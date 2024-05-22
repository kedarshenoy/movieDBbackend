const express =require('express');
const Routes = express.Router();
const Trends = require('../Controlers/Trending');
const Free =require('../Controlers/Free');
const Trailer =require('../Controlers/Trailers');
const Popular =require('../Controlers/Popular');

Routes.get('/',(req,res)=>{res.send("hello routes working")});



Routes.get('/trending',Trends.getTrends);
Routes.get('/trailers',Trailer.getTrailers);
Routes.get('/free',Free.getfree);
Routes.get('/popular',Popular.getpopular);




module.exports=Routes;