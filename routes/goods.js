
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
    res.send('respond with a resource');
});
router.get('/test', function(req, res, next) {
    var list=[
        {goods_id:1234,goods_namee:"IPHONE",goods_price:12255},
        {goods_id:33,goods_namee:"ping",goods_price:12552},
        {goods_id:124434,goods_namee:"axc",goods_price:6},
        {goods_id:123334,goods_namee:"mac",goods_price:7776},
        {goods_id:123224,goods_namee:"in",goods_price:77},

    ];

    res.send(list);
});
module.exports = router;