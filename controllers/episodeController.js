const models = require('../models')
      Episode  = models.episode
      Chapter = models.chapter

  exports.findOneEpisode  = (req,res) => {
  let { episode_id } = req.params
  Episode
    .findAll({
    where: {
      id : episode_id
    },
    include: [{
        as: "chapter",
        model: Chapter
    }]
  })
  .then( result=> {
    res
      .status(200)
      .json({
        message : "succes",
        data : result[0].chapter
    })
  })
  .catch(error => {
    res
      .status(400)
      .json({
        message : "error",
        data : error
      })
  })
}

exports.findAllEpisode =  (req,res) => {
  let { webtoon_id } = req.params
  Episode
    .findAll({
      where : { webtoon_id : webtoon_id }
    })
    .then( result => {
      res
        .status(200)
        .json({
            message : "success",
            data : result
        })
    })
    .catch( error => {
      res
        .status(200)
        .json({
            message : "success",
            data : error
        })
    })
}

exports.createEpisode = (req,res) => {
  let data = {
    title : req.body.title,
    image : req.file.path,
    webtoon_id : req.params.webtoon_id
  }

  Episode
    .create(data)
    .then(episode => {
      res
        .status(200).send({
          message : 'success',
          episode
        })
  })
}

exports.updateEpisode =  async (req,res) => {
  let  { episode_id } = req.params

  const validate = await Episode.findOne({
    where: { id: episode_id },
  });
   let data = {
     title : req.body.title,
     image :  req.file ? req.file.path : validate.image,
   }

  Episode
    .update(
      data,
      {where : {id : episode_id}}
    ).then(episode => {
    res
      .json({
        status : 200,
        message : "success",
        data : episode
      })
  })
}

exports.deleteEpisode = (req,res) => {
  let { episode_id } = req.params
  Episode
   .destroy(
      {
        where : { id : episode_id }
      }
   ).then(result => {
      res.status(200).json({
        message : "success",
        data : result
      })
   }).catch(error => {
        res.status(400).json({
          message : "failed",
          data : error
        })
   })
}