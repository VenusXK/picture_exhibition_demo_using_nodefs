let fs = require("fs")
const express = require('express');
const app = express()
app.listen(8088, ()=>{
    console.log('8088端口-获取素材库下文件')
})

function init(Response){
    Response.setHeader('content-type', 'application/x-www-form-urlencoded');
    Response.setHeader('Access-Control-Allow-Origin', '*');
    Response.setHeader('Access-Control-Allow-Headers', '*');
    Response.setHeader('Access-Control-Request-Headers',"*");
    Response.setHeader('Access-Control-Request-Method','*');
}


app.all('/fileNameLoader', (Request, Response)=>{
    init(Response)
    if(Request.query.folder1Name){
        folderName = Request.query.folder1Name;
        getFileName(folderName, Response);
    }
    else if(Request.query.folder2Name){
        folderName = Request.query.folder2Name;
        getFileName(folderName, Response);
    }
})

function getFileName(folderName, Response){
    fs.readdir(folderName, function(err, files){
        if(err){
            return console.error(err);
        }
        else{
            Response.send(files)
        }
    });
}