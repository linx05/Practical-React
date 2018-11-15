const express = require('express');
const goodHttp = require('../helpers/good-http');
const favorites = require('../helpers/db');
const router = express.Router();

const baseUrl = 'http://api.thecatapi.com';


/**
 * @api {get} /images Get a random image from thecatapi
 * @apiVersion 1.0.0
 * @apiName GetImages
 * @apiGroup Images
 * @apiHeader {String} API_KEY=g00dLuCk User unique access-key.
 * @apiHeaderExample {json} Header-Example:
 *      { "api_key": "g00dLuCk" }
 *
 * @apiSuccess {Object} image A random image taken from thecatapi.
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *      "image": {
 *          "id": "b9c",
 *          "url": "http://24.media.tumblr.com/tumblr_lilmn2TaDw1qgnva2o1_500.jpg"
 *      }
 *  }
 *
 */
router.get('/', function (req, res) {
    const url = `${baseUrl}/v1/images/search?format=json`;

    return goodHttp.get(url)
        .then((response) => {
            const data = JSON.parse(response)[0];

            res.json({
                image: {
                    id: data.id,
                    url: data.url,
                }
            });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'Server error, trace available on server log' });
        });
});


/**
 * @api {get} /images/fav Get all favorites
 * @apiVersion 1.0.0
 * @apiName GetFav
 * @apiGroup Favs
 * @apiHeader {String} API_KEY=g00dLuCk User unique access-key.
 * @apiHeaderExample {json} Header-Example:
 *      { "api_key": "g00dLuCk" }
 *
 * @apiSuccess {Object[]} images List of favorites.
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *      "images": [
 *          {
 *              "id": "b9c",
 *              "url": "http://24.media.tumblr.com/tumblr_lilmn2TaDw1qgnva2o1_500.jpg",
 *              "source_url": "http://thecatapi.com/?id=b9c"
 *          }
 *      ]
 *  }
 *
 */
router.get('/fav', function (req, res) {
    const favs = favorites.get(req.apiKey);
    const images = [];

    for (let id in favs) {
        if(favs.hasOwnProperty(id)) {
            images.push(favs[ id ]);
        }
    }

    res.json({ images: images });
});


/**
 * @api {post} /images/fav/:imageId Adds image to favorites
 * @apiVersion 1.0.0
 * @apiName AddFav
 * @apiGroup Favs
 * @apiHeader {String} API_KEY=g00dLuCk User unique access-key.
 * @apiHeaderExample {json} Header-Example:
 *      { "api_key": "g00dLuCk" }
 *
 * @apiParam {Number} imageId Image unique ID.
 *
 * @apiSuccess {Object} image Image added to favorites.
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *      "image": {
 *          "id": "b9c",
 *          "url": "http://24.media.tumblr.com/tumblr_lilmn2TaDw1qgnva2o1_500.jpg"
 *      }
 *  }
 *
 */
router.post('/fav/:imageId', function (req, res) {
    const url = `${baseUrl}/v1/images/${req.params.imageId}`;

    return goodHttp.get(url)
        .then((response) => {
            const data = JSON.parse(response);

            if (data.message) {
                res.status(400).json({ error: 'invalid image id' });
                return;
            }

            const image = {
                id: data.id,
                url: data.url,
            };

            favorites.add(req.apiKey, image);

            res.json({ image });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'Server error, trace available on server log' });
        });
});


/**
 * @api {delete} /images/fav/:imageId Removes image from favorites
 * @apiVersion 1.0.0
 * @apiName DeleteFav
 * @apiGroup Favs
 * @apiHeader {String} API_KEY=g00dLuCk User unique access-key.
 * @apiHeaderExample {json} Header-Example:
 *      { "api_key": "g00dLuCk" }
 *
 * @apiParam {Number} imageId Image unique ID.
 */
router.delete('/fav/:imageId', function (req, res) {
    favorites.delete(req.apiKey, req.params.imageId);
    res.end();
});

module.exports = router;
