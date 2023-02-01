
let reg1 = new RegExp("./", "g");
let title_real = folder1Name.replace(reg1, "")

let title_div = document.createElement('div')
title_div.className = "title"
title_div.innerHTML = title_real +'&nbsp;' +'<span class = "text-gray-500"><a href="./index.html">返回</a></span>'
if(title_real!='conficonfig_fileexexex')
    document.body.appendChild(title_div)

axios({
    method: 'GET',
    url: 'http://127.0.0.1:8088/fileNameLoader',
    params: {
        folder1Name: folder1Name
    }
}).then(response1 =>{
    for(let i=0; i<response1.data.length; i++){
        if(!(response1.data[i].indexOf("\.")>0)){
            let subtitle = document.createElement("div");
            subtitle.className = "subtitle";
            subtitle.id = response1.data[i];
            subtitle.innerHTML = response1.data[i];
            document.body.appendChild(subtitle);
            axios({
                method: 'GET',
                url: 'http://127.0.0.1:8088/fileNameLoader',
                params: {
                    folder2Name: folder1Name + "/" + response1.data[i]
                }
            }).then(response2 =>{
                let screen_line = makeScreenLine(subtitle.id);
                for(let j=0; j<response2.data.length; j++){
                    // if(j!=0 && j%7==0){
                    //     screen_line = makeScreenLine(subtitle.id);
                    // }
                    subtitle_content = response1.data[i];
                    display_content = response2.data[j];
                    Display(subtitle_content, display_content, screen_line);
                }
            })
        }
    }
})

function makeScreenLine(id){
    let subtitle = document.getElementById(id)
    let screen_line = document.createElement("div");
    screen_line.className = "screen-line";
    subtitle.appendChild(screen_line);
    return screen_line
}

function ifIMG(elm){
    if(elm.indexOf("\.mp4")>=0){
        let display_elm = document.createElement('video');
        return display_elm
    }
    else{
        let display_elm = document.createElement('img');
        return display_elm
    }
}

function ifHiddenFolder(folder1Name, subtitle_content, display_content){
    if(folder1Name == "./config/config_files/ext/ext/ext/"){
        let display_path =  './' + subtitle_content + "/" + display_content;
        return display_path
    }
    else{
        let display_path = folder1Name + "/" +subtitle_content + "/" + display_content;
        return display_path
    }
}

function Display(subtitle_content, display_content, screen_line){
    let display_path = ifHiddenFolder(folder1Name, subtitle_content, display_content)

    let display_contain = document.createElement("div");
    display_contain.className = "img-contain";

    let display_href = document.createElement('a');
    display_href.href = display_path;
    display_href.target = "_blank"

    let display_elm = ifIMG(display_content)
    display_elm.src =  display_path;

    screen_line.appendChild(display_contain);
    display_contain.appendChild(display_href);
    display_href.appendChild(display_elm);
}