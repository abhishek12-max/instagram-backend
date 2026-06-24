
const Imagekit = require("imagekit");

const imagekit = new Imagekit({
    publicKey: process.env.IMAGEKEY_PUBLIC_KEY,
    privateKey: process.env.IMAGEKEY_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKEY_URL_ENDPOINT
});

module.exports = imagekit;