const TechnologyModel = require('../models/Technology'); 
const cloudinary = require('cloudinary')


cloudinary.config({
  cloud_name: "djcau8qma",
  api_key: "727542398513949",
  api_secret: "MwNkK8az9A9_12veTd7PPllwEZk",
});

class TechnologyController {
    // INSERT
    static techinsert = async (req, res) => {
     try {
       const { title, discription } = req.body;
   
       if (!req.files || !req.files.image) {
         return res.status(400).json({
           success: false,
           message: "Image file is required.",
         });
       }
   
       const file = req.files.image;
   
       const imageupload = await cloudinary.uploader.upload(file.tempFilePath, {
         folder: "technology",
       });
   
       const technology = await TechnologyModel.create({
         title,
         discription,
         image: {
           public_id: imageupload.public_id,
           url: imageupload.secure_url,
         },
       });
   
       return res.status(201).json({
         success: true,
         message: "Technology Inserted Successfully",
         data: technology,
       });
   
     } catch (error) {
       console.error("Create technology Error:", error);
       return res.status(500).json({
         success: false,
         message: "Internal Server Error",
       });
     }
   };

    // DISPLAY ALL
    static techdisplay = async (req, res) => {
        try {
            const technology = await TechnologyModel.find();
            return res.status(200).json({
                success: true,
                message: "Data Displayed Successfully",
                technology,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                success: false,
                message: "Internal Server Error",
            });
        }
    }

    // DISPLAY SINGLE
    static techview = async (req, res) => {
        try {
            const id = req.params.id;
            const technology = await TechnologyModel.findById(id);
            if (!technology) {
                return res.status(404).json({
                    success: false,
                    message: "Data Not Found",
                });
            }
            return res.status(200).json({
                success: true,
                message: "Data Displayed Successfully",
                technology,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                success: false,
                message: "Internal Server Error",
            });
        }
    }

    // DELETE
    static techdelete = async (req, res) => {
        try {
            const id = req.params.id;
            const technology = await TechnologyModel.findByIdAndDelete(id);
            if (!technology) {
                return res.status(404).json({
                    success: false,
                    message: "Data Not Found",
                });
            }
            return res.status(200).json({
                success: true,
                message: "Data Deleted Successfully",
                technology,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                success: false,
                message: "Internal Server Error",
            });
        }
    }

    // UPDATE
    static techupdate = async (req, res) => {
        try {
            const id = req.params.id;
            const { title, description, image } = req.body;

            const updateData = {
                title,
                description,
            };

            if (image && image.public_id && image.url) {
                updateData.image = {
                    public_id: image.public_id,
                    url: image.url,
                };
            }

            const updated = await TechnologyModel.findByIdAndUpdate(id, updateData, { new: true });

            if (!updated) {
                return res.status(404).json({
                    success: false,
                    message: "Data Not Found",
                });
            }

            return res.status(200).json({
                success: true,
                message: "Data Updated Successfully",
                data: updated,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                success: false,
                message: "Internal Server Error",
            });
        }
    }
}

module.exports = TechnologyController;