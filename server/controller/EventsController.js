const EventsModel = require("../models/Events");
const cloudinary = require('cloudinary')



//setup cloudinary
cloudinary.config({
  cloud_name: "djcau8qma",
  api_key: "727542398513949",
  api_secret: "MwNkK8az9A9_12veTd7PPllwEZk",
});


class EventsController {
  // INSERT
  static createEvents = async (req, res) => {
    try {
      const { title, description } = req.body;

      if (!req.files || !req.files.image) {
        return res.status(400).json({
          success: false,
          message: "Image file is required.",
        });
      }

      const file = req.files.image;

      const imageupload = await cloudinary.uploader.upload(file.tempFilePath, {
        folder: "Events",
      });

      const events = await EventsModel.create({
        title,
        description,
        image: {
          public_id: imageupload.public_id,
          url: imageupload.secure_url,
        },
      });

      return res.status(201).json({
        success: true,
        message: "events Inserted Successfully",
        data: events,
      });
    } catch (error) {
      console.error("Create Events Error:", error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };

  // DISPLAY ALL
  static displayEvents = async (req, res) => {
    try {
      const events = await EventsModel.find();
      return res.status(200).json({
        success: true,
        message: "Data Displayed Successfully",
        events,
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
  static viewEvents = async (req, res) => {
    try {
      const id = req.params.id;
      const events = await EventsModel.findById(id);
      if (!events) {
        return res.status(404).json({
          success: false,
          message: "Events Not Found",
        });
      }
      return res.status(200).json({
        success: true,
        message: "Events Displayed Successfully",
        Events,
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
  static updateEvents = async (req, res) => {
    try {
      const id = req.params.id;
      const { title, description, image } = req.body;

      const updateData = {
        title,
        description,
      };

      // Only update image if both public_id and url are present
      if (image && image.public_id && image.url) {
        updateData.image = {
          public_id: image.public_id,
          url: image.url,
        };
      }

      const updated = await EventsModel.findByIdAndUpdate(id, updateData, {
        new: true,
      });

      if (!updated) {
        return res.status(404).json({
          success: false,
          message: "Events Not Found",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Events Updated Successfully",
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
  static deleteEvents = async (req, res) => {
    try {
      const id = req.params.id;
      const events = await EventsModel.findByIdAndDelete(id);
      if (!events) {
        return res.status(404).json({
          success: false,
          message: "Events Not Found",
        });
      }
      return res.status(200).json({
        success: true,
        message: "Events Deleted Successfully",
        events,
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
module.exports = EventsController;
