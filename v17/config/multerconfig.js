const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

// disk storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/uploads')
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12, function (err, name){
        const fn = name.toString('hex') + path.extname(file.originalname);
        cb(null, fn);
    })
  }
})

const upload = multer({ storage: storage })

// export the configured multer instance

module.exports = upload;