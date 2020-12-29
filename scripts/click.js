function button_clicked(){
    let img_ref=document.querySelector("img");
    let cur_img=img_ref.getAttribute("src");
    if(cur_img=="images/avengers.jpeg"){
        cur_img="images/abd.jpeg";
    }else{
        cur_img="images/avengers.jpeg";
    }
    img_ref.setAttribute("src",cur_img);
}

