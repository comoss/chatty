var express = require('express'); 
var bodyParser = require('body-parser')


var app = express();

var messages = [{message: 'hide yo kids hide yo wife', timestamp: new Date() }]

app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.status(200).json(messages)
});

app.post('/', function (req, res){
   var newMessage = req.body
   newMessage.timeStamp = new Date();

console.log('new message is')
console.log(newMessage)

   messages.push(newMessage)
   res.status(201).json(newMessage)
});

app.listen(9090)



// var http = require('http');

// var server = http.createServer(function(request, response){
// 	response.writeHead(200, {
// 		"Connection": 'close',
// 		'Content-Type': 'application/json',
// 		'Access-Control-Allow-Origin': '*'
		
// 	});
// 	var messages = ["sup?", "bacon ipsum"]
// 	response.end(JSON.stringify(messages[0]))
// });

// var onRequest = function(request, response) {
//     if (request.method == 'POST') {
//        var postData = '';
//        request.on('data', function(chunk) {
//            postData += chunk.toString();
//         });    
//         request.on('end', function() {
//             console.log("Got POST data:");
//             console.log(JSON.parse(postData));
//        });
//     }
// }

// // server.listen(9090);
// http.createServer(onRequest).listen(9090);

