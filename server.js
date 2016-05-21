var express=require("express");
var path    = require("path");  
var app=express();
app.use("/js", express.static(__dirname + path.sep + "js"));
var server=app.listen(8080,"0.0.0.0");
var io=require("socket.io").listen(server);
var path=require("path");
io.sockets.on("connection",function(socket){
	socket.on("shareVideo",function(video){
	   	   socket.broadcast.emit("receiveVideo",video);
	 }); 
});


app.get("/index.html",function(req,resp){
   resp.sendFile(path.join(__dirname+"/index.html"));
});

app.get("/view.html",function(req,resp){
   resp.sendFile(path.join(__dirname+"/view.html"));
});