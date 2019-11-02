const multer = require('multer')
      path   = require('path')

module.exports = {
    upload : multer({
        storage: multer.diskStorage({
            destination: `./storage/`,
            filename: function(req, file, cb){
                var filename = (new Date).getTime();
                filename = (filename==null) ? (file.originalname) : (filename + path.extname(file.originalname))
                console.log(file.originalname);
              cb(null,filename);
            }
        })
    })
}

