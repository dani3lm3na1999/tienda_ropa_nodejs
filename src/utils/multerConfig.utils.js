const multer = require('multer');
const shortid = require('shortid');

const multerConfig = {
    storage: filesStore = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, __dirname+'../../uploads');           
        },
        filename: (req, file, cb) => {
            const extension = file.mimetype.split('/')[1];
            cb(null,`${shortid.generate()}__${Date.now()}.${extension}`);
        }
    }),
    fileFilter(req, file, cb) {
        if ( file.mimetype === 'image/png' || file.mimetype === 'image/jpeg'){
            cb(null, true)
        } else {
            cb(new Error('Formato no valido'))
        }
    },
}

module.exports = multerConfig;