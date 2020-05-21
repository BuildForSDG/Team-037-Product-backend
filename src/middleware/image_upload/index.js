import 'dotenv/config';
import { SERVER_ERROR_MESSAGE } from '../../utils/constant';

const cloudinary = require('cloudinary').v2;

class CloudinaryImageUpload {
  static async imageUplaod(req, res, next) {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET
    });
    if (!req.files) {
      return next();
    }

    try {
      const tempFile = req.files.imageUrl;
      return cloudinary.uploader.upload(tempFile.tempFilePath, async (err, result) => {
        if (err) {
          return res.json({
            message: 'Upload was unsuccessful. Try again'
          });
        }
        req.body.imageUrl = result.url;
        return next();
      });
    } catch (error) {
      return res.status(500).json({ status: 500, message: SERVER_ERROR_MESSAGE });
    }
  }
}
const { imageUplaod } = CloudinaryImageUpload;
export default imageUplaod;
