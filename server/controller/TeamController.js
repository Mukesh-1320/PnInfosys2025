const TeamModel = require('../models/Team');
const cloudinary = require('cloudinary');



//setup cloudinary
cloudinary.config({
  cloud_name: "djcau8qma",
  api_key: "727542398513949",
  api_secret: "MwNkK8az9A9_12veTd7PPllwEZk",
});


class TeamController {
  // INSERT
  static createTeam = async (req, res) => {
    try {
      const { name, position} = req.body;

      if (!req.files || !req.files.image) {
        return res.status(400).json({
          success: false,
          message: "Image file is required.",
        });
      }

      const file = req.files.image;

      const imageupload = await cloudinary.uploader.upload(file.tempFilePath, {
        folder: "Team",
      });

      const team = await TeamModel.create({
        name,
        position,
        image: {
          public_id: imageupload.public_id,
          url: imageupload.secure_url,
        },
      });

      return res.status(201).json({
        success: true,
        message: "team Inserted Successfully",
        data: team,
      });
    } catch (error) {
      console.error("Create Team Error:", error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };

  // DISPLAY ALL
  static displayTeam = async (req, res) => {
    try {
      const team = await TeamModel.find();
      return res.status(200).json({
        success: true,
        message: "Data Displayed Successfully",
        team,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };

  // DISPLAY SINGLE
  static viewTeam = async (req, res) => {
    try {
      const id = req.params.id;
      const team = await TeamModel.findById(id);
      if (!team) {
        return res.status(404).json({
          success: false,
          message: "Events Not Found",
        });
      }
      return res.status(200).json({
        success: true,
        message: "team Displayed Successfully",
        team,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };

  // UPDATE
  static updateTeam = async (req, res) => {
    try {
      const id = req.params.id;
      const { name, position, image } = req.body;

      const updateData = {
        name,
        position,
      };

      // Only update image if both public_id and url are present
      if (image && image.public_id && image.url) {
        updateData.image = {
          public_id: image.public_id,
          url: image.url,
        };
      }

      const updated = await TeamModel.findByIdAndUpdate(id, updateData, {
        new: true,
      });

      if (!updated) {
        return res.status(404).json({
          success: false,
          message: "Team Not Found",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Team Updated Successfully",
        data: updated,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };

  // DELETE
  static deleteTeam = async (req, res) => {
    try {
      const id = req.params.id;
      const team = await TeamModel.findByIdAndDelete(id);
      if (!team) {
        return res.status(404).json({
          success: false,
          message: "Team Not Found",
        });
      }
      return res.status(200).json({
        success: true,
        message: "Team Deleted Successfully",
        team,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };
}
module.exports = TeamController;
