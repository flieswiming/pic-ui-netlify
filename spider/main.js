const cheerio = require('cheerio')
const axios = require('axios');
// 向给定ID的用户发起请求

function myUrl(callback){

axios.get('https://github.com/flieswiming/pic/file-list/main/pic')
  .then(function (response) {


    $ = cheerio.load(response.data);
    let myHref=[]
// $ = cheerio.load(htmltest);
// let a= $('.js-navigation-open').text()
$('.js-navigation-open').each(function(i, elem) {
    myHref[i] = $(this).text();
  });
  


// let b=$('.js-navigation-open').attr('href')
// let c=$('a[class=js-navigation-open Link--primary]').html()
// console.log(c)
    // 处理成功情况
 
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

myUrl(function fileName(myHref){
    // console.log(myHref);
let domain="https://mytempic.netlify.app/pic/"
let newHref=[]
myHref.forEach(element => {
    newHref.push(domain+element)
});
console.log(newHref)
})