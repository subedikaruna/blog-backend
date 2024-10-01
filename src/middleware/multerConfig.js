import multer from "multer";

const storage=multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./storage"); //cb(error,success)
  },
  filename: function (req, file, cb) {
    cb(null, "karuna-" + file.originalname);
  },
});
 export default storage