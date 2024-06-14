let orderimg = document.getElementById("orderimg");
let chat = document.getElementById("chat");
let chat_close = document.getElementById("chat_close");
let home_btn = document.getElementById("home_btn");
let chat_button = document.getElementById("chat_button");
let chat_input = document.getElementById("chat_input");
let chat_items = document.getElementById("chat_items");


// Menú hamburguesa
let nav_burguerbutton = document.getElementById("nav_burguerbutton");
let nav = document.getElementById("nav");

function abrirmenu(){
    if(nav.classList.contains("nav__show")){
        nav.classList.remove("nav__show")

    }else{
        nav.classList.add("nav__show")
    }
    

}
nav_burguerbutton.addEventListener("click",abrirmenu)


function abrirChat(){
    if(chat.classList.contains("chat_view")){
        chat.classList.remove("chat_view")
    }else{
        chat.classList.add("chat_view")
    }
}

orderimg.addEventListener("click",abrirChat)



