let folder1Name = "./"

axios({
    method: 'GET',
    url: 'http://127.0.0.1:8088/fileNameLoader',
    params: {
        folder1Name: folder1Name
    }
}).then(response1 =>{
    for(let i=0; i<response1.data.length; i++){
        if(response1.data[i] == "node_modules" || response1.data[i] == "config"){
            continue;
        }
        if(!(response1.data[i].indexOf("\.")>0)){
            let index_title = document.createElement("div");
            index_title.className = "subtitle"
            index_title.id = response1.data[i];
            index_title.innerHTML = '<span class = "cursor-pointer">' + response1.data[i] + '</span>';
            document.body.appendChild(index_title);
            index_title.onclick = function(){
                document.write(
                    '<html>'+
                    '<head>'+
                        '<meta charset="UTF-8">'+
                        '<meta http-equiv="X-UA-Compatible" content="IE=edge">'+
                        '<meta name="viewport" content="width=device-width, initial-scale=1.0">'+
                        '<title>[本地]张景赫-素材-'+response1.data[i]+'</title>'+
                        '<link rel="stylesheet" href="./output.css">'+
                    '</head>'+
                    '<body>'+
                    '</body>'+
                    '</html>'
                )
                let script1 = document.createElement('script');
                let script2 = document.createElement('script');
                let script1_5 = document.createElement('script');
                script1_5.innerHTML = 'folder1Name = "./' + response1.data[i] + '"' 
                console.log(script1_5)
                script1.src="./axios.js"
                script2.src="./display.js"
                document.body.appendChild(script1);
                document.body.appendChild(script1_5);
                document.body.appendChild(script2);
            }
        }
    }
})

   