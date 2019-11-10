const express = require('express');
const app = express();
const port  = 9000;
const multer = require('multer');

const fileStorage = multer.diskStorage({
    destination : function (req, file, cb) {

        var url = req.url;
        var mimeType = file.mimetype;
        if(url === '/upload-files'){
            var typesoffilesallowed = [
                'image/jpeg',
                'image/jpg',
                'image/png',
                'application/pdf'
            ];
        }

        if(typesoffilesallowed.indexOf(mimeType) === -1){
            return cb("Error! Invalid file type");
        }

        return cb(null, 'public/');
    },
    filename : function (req, file, cb) {
        var filename = file.originalname;
        
        return cb(null, filename);
    }
});

const upload = multer({
    storage : fileStorage
});

var profileController = require('./routes/profile.js');

app.use(express.json());
app.use(express.urlencoded());
app.use('/public', express.static('public'));

var fields = [
    {name: 'pictures', maxCount: 5},
    {name: 'pdfFiles', maxCount: 2}
]
app.post('/upload-files', upload.fields(fields), profileController.uploadfiles);
app.get('/get-files', profileController.getfiles);

app.listen(port, function () {
    console.log("Application has started on port:", port);
}).on('error', function (error) {
    console.log("Error is ",error);
});