var http = require('http');
var URL = require('url');


var server = http.createServer(function (req, res) {
	var myUrl = "http://www.google.com/profile?search=1&param=abv";
	var myUrlObject =  URL.parse(myUrl,true);
  



	if (req.url == "/") {
       	res.writeHead(200,{'content-Type':'json/html','token':'1234'});
		   res.write('<h1> This is Home</h1>');

   		res.end();
   	}else if (req.url == "/profile") {
		res.writeHead(200,{'content-Type':'json/html','token':'1234'});
		res.write('<h1> This is Profile</h1>');
		res.end();
	}else if (req.url == "/test") {
		res.writeHead(200,{'content-Type':'json/html','token':'1234'});
 		//res.write(myUrlObject.host);
		// res.write(myUrlObject.pathname);
		 res.write(myUrlObject.search);
		res.end();
	}
});
server.listen(5021);
console.log("Server run success");