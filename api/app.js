const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cheerio = require('cheerio')
const axios = require('axios');
const https = require("https");
const router = express.Router();


//设置跨域访问
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*') 
	res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method') 
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE')
   res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE') 
	 next();
   });
   


// 创建忽略 SSL 的 axios 实例
const ignoreSSL = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
})

// 在 axios 请求时，选择性忽略 SSL
const agent = new https.Agent({
  rejectUnauthorized: false
})


function myUrl(callback) {
  axios.get('https://github.com/flieswiming/pic/file-list/main/pic',{ httpsAgent: agent })
    .then(function (response) {
      let $ = cheerio.load(response.data)
      let myHref = []
      $('.js-navigation-open').each(function (i, elem) {
        myHref[i] = $(this).text();
      })
        //console.log(myHref)
      callback(myHref)
    })
    .catch(function (error) {
      // 处理错误情况
      console.log(error);
    })
    .then(function () {
      // 总是会执行
    });
}
app.use(bodyParser.json());
router.get('/', (req, res) => {
  myUrl(function fileName(myHref) {
    let domain = "https://mytempic.netlify.app/pic/"
    let newHref = []
    for(var i=1;i<myHref.length;i++){
      newHref.push(domain + myHref[i])
      }
   console.log(newHref)
   res.send(newHref)
  })

});

app.use(router)

app.listen(3000, () => console.log('Local app listening on port 3000!'));
