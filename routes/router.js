const express = require('express')

const adminControler = require('../controller/adminController')  
const mainimageController = require('../controller/mainimageController')
const multerConfig = require('../middlewares/multerMiddleware') 
const pointstableController = require('../controller/pointstableController')
const liveController = require('../controller/liveController')
const pressController = require('../controller/pressController')

const router = new express.Router()  

// register admin
router.post('/register',adminControler.registerController)

// login admin
router.post('/login',adminControler.loginController) 

// add image
router.post('/add-mainimage',multerConfig.single('mainimage'),mainimageController.addmainImg)

// get image
router.get('/get-mainimage',mainimageController.getmainimageController) 

// delete image
router.delete('/delete-image/:_id',mainimageController.deleteimageControlller) 



// add points tatble
router.post('/addpoints-table',pointstableController.addpoint) 

// get points table
router.get('/addpoints-table',pointstableController.getallpointController) 

// get single point
router.get('/editpoints-table/:_id',pointstableController.getsinglepointController)

// update single point
router.put('/updatepoint-table/:_id',pointstableController.updatesinglepointController)

// delete point
router.delete('/deletepoint-table/:_id',pointstableController.removepointController)

// live

// add live
router.post('/add-live',liveController.addliveController)

// get live
router.get('/get-live',liveController.getliveController)

// get single live
router.get('/getsingle-live/:_id',liveController.getsingleliveController)

// delete live
router.delete('/delete-live/:_id',liveController.deleteliveController)

// update live
router.put('/update-live/:_id',liveController.updateliveController)


// press release

// add press release
router.post('/add-press',pressController.addpressController)

// get press release
router.get('/get-press',pressController.getpressController)

// get single release
router.get('/getsingle-press/:_id',pressController.getsinglepressController)

// update single press
router.put('/update-press/:_id',pressController.updatesinglepressController)

// delete press
router.delete('/delete-press/:_id',pressController.deletepressController)


module.exports = router  