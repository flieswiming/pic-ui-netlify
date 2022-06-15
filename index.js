var express = require('express')
var app = express()
var path = require('path')
var getPath_router= require('./api/getPath')



//设置跨域访问
// app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*') 
	res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method') 
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE')
   res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE') 
	 next();
   });


//暴露公共资源
// app.use('/', express.static(path.join(__dirname,'./')))//只考虑路径，不考虑请求方法的中间件
// app.use('/node_modules/', express.static(path.join(__dirname,'./node_modules/')))


app.use(getPath_router)
app.listen(9000,function(){
	console.log('express is runnig at 9000')
})

