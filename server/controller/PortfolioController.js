const PortfolioModel = require('../models/Portfolio');
const model = require('../models/Portfolio');
const cloudinary = require('cloudinary');




//setup cloudinary
cloudinary.config({
  cloud_name: "djcau8qma",
  api_key: "727542398513949",
  api_secret: "MwNkK8az9A9_12veTd7PPllwEZk",
});


class PortfolioController {

     // INSERT
        static createPortfolio = async (req, res) => {
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
          folder: "portfolio",
        });
    
        const portfolio = await PortfolioModel.create({
          title,
          subtitle,
          image: {
            public_id: imageupload.public_id,
            url: imageupload.secure_url,
          },
        });
    
        return res.status(201).json({
          success: true,
          message: "portfolio Inserted Successfully",
          data: portfolio,
        });
    
      } catch (error) {
        console.error("Create Portfolio Error:", error);
        return res.status(500).json({
          success: false,
          message: "Internal Server Error",
        });
      }
    };

       // DISPLAY ALL
       static displayPortfolio = async (req, res) => {
        try {
            const portfolio = await PortfolioModel.find();
            return res.status(200).json({
                success: true,
                message: "Data Displayed Successfully",
                portfolio,
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
            static viewPortfolio = async (req, res) => {
                try {
                    const id = req.params.id;
                    const portfolio = await PortfolioModel.findById(id);
                    if (!slider) {
                        return res.status(404).json({
                            success: false,
                            message: "Portfolio Not Found",
                        });
                    }
                    return res.status(200).json({
                        success: true,
                        message: "Portfolio Displayed Successfully",
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
            static deletePortfolio = async (req, res) => {
                try {
                    const id = req.params.id;
                    const portfolio = await PortfolioModel.findByIdAndDelete(id);
                    if (!portfolio) {
                        return res.status(404).json({
                            success: false,
                            message: "Portfolio Not Found",
                        });
                    }
                    return res.status(200).json({
                        success: true,
                        message: "Portfolio Deleted Successfully",
                        portfolio,
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
            static updatePortfolio = async (req, res) => {
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
        
                    const updated = await PortfolioModel.findByIdAndUpdate(id, updateData, { new: true });
        
                    if (!updated) {
                        return res.status(404).json({
                            success: false,
                            message: "Portfolio Not Found",
                        });
                    }
        
                    return res.status(200).json({
                        success: true,
                        message: "Portfolio Updated Successfully",
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
module.exports = PortfolioController;