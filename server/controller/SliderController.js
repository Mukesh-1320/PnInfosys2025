const SliderModel = require('../models/Slider');
const cloudinary = require('cloudinary');



//setup cloudinary
cloudinary.config({
  cloud_name: "djcau8qma",
  api_key: "727542398513949",
  api_secret: "MwNkK8az9A9_12veTd7PPllwEZk",
});

class SliderController {
    // INSERT
    static createSlider = async (req, res) => {
  try {
    const { title, subtitle } = req.body;

    if (!req.files || !req.files.image) {
      return res.status(400).json({
        success: false,
        message: "Image file is required.",
      });
    }

    const file = req.files.image;

    const imageupload = await cloudinary.uploader.upload(file.tempFilePath, {
      folder: "sliders",
    });

    const slider = await SliderModel.create({
      title,
      subtitle,
      image: {
        public_id: imageupload.public_id,
        url: imageupload.secure_url,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Slider Inserted Successfully",
      data: slider,
    });

  } catch (error) {
    console.error("Create Slider Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

    // DISPLAY ALL
    static displaySlider = async (req, res) => {
        try {
            const sliders = await SliderModel.find();
            return res.status(200).json(sliders)
        
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                success: false,
                message: "Internal Server Error",
            });
        }
    }

    // DISPLAY SINGLE
    static viewSlider = async (req, res) => {
        try {
            const id = req.params.id;
            const slider = await SliderModel.findById(id);
            if (!slider) {
                return res.status(404).json({
                    success: false,
                    message: "Slider Not Found",
                });
            }
            return res.status(200).json({
                success: true,
                message: "Slider Displayed Successfully",
                slider,
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
    static deleteSlider = async (req, res) => {
        try {
            const id = req.params.id;
            const slider = await SliderModel.findByIdAndDelete(id);
            if (!slider) {
                return res.status(404).json({
                    success: false,
                    message: "Slider Not Found",
                });
            }
            return res.status(200).json({
                success: true,
                message: "Slider Deleted Successfully",
                slider,
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
    static updateSlider = async (req, res) => {
        try {
            const id = req.params.id;
            const { title, subtitle, image } = req.body;

            const updateData = {
                title,
                subtitle,
            };

            // Only update image if both public_id and url are present
            if (image && image.public_id && image.url) {
                updateData.image = {
                    public_id: image.public_id,
                    url: image.url,
                };
            }

            const updated = await SliderModel.findByIdAndUpdate(id, updateData, { new: true });

            if (!updated) {
                return res.status(404).json({
                    success: false,
                    message: "Slider Not Found",
                });
            }

            return res.status(200).json({
                success: true,
                message: "Slider Updated Successfully",
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

module.exports = SliderController;