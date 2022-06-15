var express = require('express')

var fs = require('fs');
var path_fun = require('path');

getPath_router.get('/api/path', (req, res) => {
    function getJsonFiles(jsonPath){
        let jsonFiles = [];
        function findJsonFile(path){
            let files = fs.readdirSync(path);
            files.forEach(
                function (item, index) {
                let fPath =path_fun.resolve(path_fun.join(path,item))
                let fomatPath = fPath.slice(fPath.indexOf('\\img'));
                    console.log( fomatPath);
                    // .replace(/\\/g,"/")
                let stat = fs.statSync(fPath);
                if(stat.isDirectory() === true) {
                    findJsonFile(fomatPath);
                }
                if (stat.isFile() === true) { 
                  jsonFiles.push( fomatPath.replace(/\\/g,"/"));
                }
            });
        }
        findJsonFile(jsonPath);
     
         return jsonFiles
    }
    var img = getJsonFiles("img");  
    console.log(img)
    res.json(img)
})

module.exports = app//导出路由
 

