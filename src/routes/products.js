// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

// ************ Controller Require ************
const {index,create,store,detail,edit,update,destroy}= require('../controllers/productsController');

// ************ Configuración de Multer ************

const storage = multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null,'./public/images/products')
        },
        filename :(req,file,cb) => {
cb(null,'img-'+ Date.now() + path.extname(file.originalname))
}});

const upload = multer ({
        storage
})

/*** GET ALL PRODUCTS ***/ 
router
.get('/', index) 

/*** CREATE ONE PRODUCT ***/ 
.get('/create/', create) 
.post('/create',upload.single('image') ,store) 


/*** GET ONE PRODUCT ***/ 
.get('/detail/:id/', detail) 

/*** EDIT ONE PRODUCT ***/ 
.get('/edit/:id', edit) 
.put('/edit/:id', update) 


/*** DELETE ONE PRODUCT***/ 
.delete('/destroy/:id', destroy) 


module.exports = router;
