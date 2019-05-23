var express = require('express');
var router = express.Router();
// const { Pool, Client } = require('pg')

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'News',
//   password: 'Dong123456',
//   port: 5432,
// })

var request = require("request");
var cheerio = require("cheerio");
/* GET home page. */
router.get('/', function (req, res, next) { 
  request("https://vnexpress.net/thoi-su/tai-xe-tra-2-000-dong-cho-tram-thu-phi-gan-cau-vam-cong-3928207.html", function(error, response, body){
    if(error){
      console.log(error);
    }else{
      $ = cheerio.load(body);
      var ds = $(body).find("p.Normal");
      console.log(ds);
      res.render('index', {title:ds});
      // res.render('index', {title: ds});
    }
  })
});


router.get('/getdata01', function (req, res, next) {
  
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  console.log("get dữ liệu json");
  request("https://vnexpress.net/", function(error, response, body){
  // request(link, function(error, response, body){
    if(error){
      console.log(error);
    }else{
      // $ = cheerio.load(body);
      // var ds = $(body).find("a.txt_link");
      // // res.render('index', {title: ds});
      res.send(body);
    }
  })
});

module.exports = router;
