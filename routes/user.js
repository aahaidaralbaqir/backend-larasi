const router = require('express').Router()
// const userController = require('../controllers/userController')
const { authentication , authorized } = require('../middleware')
const { upload } = require('../helper')
const { findAllWebtoonsByUser , createWebtoon , updateWebtoon , deleteWebtoon } = require('../controllers/webtoonController')
const { findAllEpisode , findOneEpisode, createEpisode , updateEpisode, deleteEpisode } = require('../controllers/episodeController')
const { addChapter, deleteChapter , getChapter } = require('../controllers/chapterController')
    router
        .get(
            "/:user_id/webtoons",
            authentication,
            authorized,
            findAllWebtoonsByUser
        )
        .post(
            "/:user_id/webtoon",
            authentication,
            authorized,
            upload.single('image'),
            createWebtoon
        )
        .patch(
            "/:user_id/webtoon/:webtoon_id",
            authentication,
            authorized,
            upload.single('image'),
            updateWebtoon
        )
        .delete(
            "/:user_id/webtoon/:webtoon_id",
            authentication,
            authorized,
            deleteWebtoon
        )
    
        
    router
        .get(
            "/:user_id/webtoon/:webtoon_id/episodes",
            authentication,
            authorized,
            findAllEpisode
        )
        .get(
            "/:user_id/webtoon/:webtoon_id/episode/:episode_id",
            authentication,
            authorized,
            findOneEpisode
        )
        .post(
            "/:user_id/webtoon/:webtoon_id/episode",
            authentication,
            authorized,
            upload.single('image'),
            createEpisode
        )
        .patch(
            "/:user_id/webtoon/:webtoon_id/episode/:episode_id",
            authentication,
            authorized,
            upload.single('image'),
            updateEpisode
        )
        .delete(
            "/:user_id/webtoon/:webtoon_id/episode/:episode_id",
            authentication,
            authorized,
            deleteEpisode
        )
    
    router
        .post(
            "/:user_id/webtoon/:webtoon_id/episode/:episode_id/image",
            authentication,
            authorized,
            upload.single('image'),
            addChapter
        )
        .get(
            "/:user_id/webtoon/:webtoon_id/episode/:episode_id/images",
            authentication,
            authorized,
            getChapter
        )
        .delete(
            "/:user_id/webtoon/:webtoon_id/episode/:episode_id/image/:image_id",
            authentication,
            authorized,
            deleteChapter   
        )
    


module.exports = router;
