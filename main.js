// chamge navbar styles on scrool

window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle
    ("windows-scroll", window.scrollY > 0)
    
})


//      mostramos las respuestas a las preguntas agregando clase open

const faqs= document.querySelectorAll(".faq");

faqs.forEach(faq => {
   faq.addEventListener("click", () => {
    faq.classList.toggle("open");

     // change icon

   const icon = faq.querySelector(".faq_icon i ");
   if (icon.className === "uil uil-plus"){
    icon.className = "uil uil-minus";
   }else{
    icon.className = "uil uil-plus";
   }
   })

  
})

//    show/hide nave menu

const menu = document.querySelector(".nav_menu");
const openmenu = document.querySelector("#open_menu_btn");
const closemenu = document.querySelector("#close_menu_btn");

openmenu.addEventListener("click", () =>{
  menu.style.display = "flex";
  closemenu.style.display = "inline-block";
  openmenu.style.display = "none";
})

// close menu nav 

const closeNav = ()=>{
  menu.style.display = "none";
  closemenu.style.display = "none";
  openmenu.style.display = "inline-block";
}

closemenu.addEventListener("click", closeNav);