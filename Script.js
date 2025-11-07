let slideindex=1;
showslides(slideindex);

function currentslide(n){
    showslides (slideindex=n);
}

function plusslide(n){
    showslides (slideindex+=n);
}

function showslides(n){
    let slide=document.getElementsByClassName("slides");
    let dots=document.getElementsByClassName("dot");
    
    if (n>slide.length){
        slideindex=1
    }
    
    if(n<1){
        slideindex=slide.length
    }

    for(let i=0; i<slide.length; i++){
        slide[i].style.display="none"
    }

    for(let i=0; i<dots.length;i++){
        dots[i].classList.remove("active");
    }
    slide[slideindex-1].style.display="flex";
    dots[slideindex-1].classList.add("active")
}
setInterval(()=>{
 plusslide(1);
},4000);