const models  = require('../models')
const Chapter = models.chapter

exports.addChapter = (req,res) => {

    let { page , image } = req.body
    let { episode_id } = req.params
    let data = {
        page,
        image,
        episode_id
    }

    Chapter
     .create(data)
     .then(result => {
        res.status(200).json({
            message : "success",
            data : result
        })
     })
     .catch(error => {
         res.status(400).json({
             message : "error"
         })
     })
}

exports.deleteChapter = (req,res) => {
    let { image_id } = req.params
    Chapter
     .destroy({
         where : { id : image_id }
     })
     .then(result => {
        res.status(200).json({
            message : "succes",
            data : result
        })
     })
     .catch(error => {
         res.status(400).json({
             message : "failed"
         })
     })
}

exports.getChapter = (req,res) => {
    let { episode_id } = req.params
    Chapter.findAll({
         where : { episode_id }
     })
     .then(result => {
        res.status(200).json({
            message : "success",
            data : result
        })
     })
     .catch(error => {
         res.status(400).json({
             message : "error",
         })
     })
}