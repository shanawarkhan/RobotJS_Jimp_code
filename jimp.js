var jimp = require('jimp');

jimp.read("hedgefunds_blockchain.jpg").then(function (lenna) {
    lenna.resize(256, 256)
         .quality(60)
         .greyscale()
         .write("hedgefunds_blockchain_small.jpg");
}).catch(function (err) {
    console.error(err);
});
