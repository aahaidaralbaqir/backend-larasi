const router  = require('express').Router();
const { findAllwebtoons , createWebtoon , updateWebtoon , deleteWebtoon } = require('../controllers/webtoonController')
const { findAllEpisode , findOneEpisode } = require('../controllers/episodeController')
const { addFavorite , deleteFavorite } = require('../controllers/favoriteController')
const { upload } = require('../helper')
const { authentication } = require('../middleware')

router
    .get(
        '/',
        authentication,
        findAllwebtoons
    )
    .post(
        '/',
        upload.single('image'),
        authentication,
        createWebtoon
    )
    .patch(
        '/:webtoon_id/update',
        authentication,
        updateWebtoon
    )
    .delete(
        '/:webtoon_id/delete',
        authentication,
        deleteWebtoon
    )
    .get(
        '/:webtoon_id/episode/:episode_id',
        findOneEpisode
    )
    .get(
        '/:webtoon_id/episodes',
        findAllEpisode
    )

router
    .post(
        "/favorite",
        authentication,
        addFavorite
    )
    .delete(
        "/:favorite_id/favorite",
        authentication,
        deleteFavorite
    )

module.exports = router;
