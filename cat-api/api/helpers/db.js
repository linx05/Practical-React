const favorites = {};

module.exports = {
    get: function (apiKey) {
        if (!favorites[ apiKey ]) {
            return {};
        }
        return favorites[ apiKey ];
    },

    add: function (apiKey, image) {
        if (!favorites[ apiKey ]) {
            favorites[ apiKey ] = {};
        }
        favorites[ apiKey ][ image.id ] = image;
    },

    delete: function (apiKey, imageId) {
        if (!favorites[ apiKey ]) {
            return;
        }
        delete favorites[ apiKey ][ imageId ];
    }
};
