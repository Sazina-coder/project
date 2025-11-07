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
    let dotss=document.getElementsByClassName("circle");
    
    if (n>slide.length){
        slideindex=1
    }
    
    if(n<1){
        slideindex=slide.length
    }

    for(let i=0; i<slide.length; i++){
        slide[i].style.display="none"
    }

    for(let i=0; i<dotss.length;i++){
        dotss[i].classList.remove("active");
    }
    slide[slideindex-1].style.display="flex";
    dotss[slideindex-1].classList.add("active")
}
setInterval(()=>{
 plusslide(1);
},8000);






 let index=1;
    showslide(index);

    function beforeslide(){
        showslide(index-=1);
    }

    function afterslide(){
        showslide(index+=1);
    }

    function currentSlide(n){
        showslide(index=n);
    }

    function plusslides(n){
        showslide(index+=n);
    }

    function showslide(n){
        let slides= document.getElementsByClassName("slide");
        let dots= document.getElementsByClassName("dot");

        if (n>slides.length){
            index=1
        }
        if(n<1){
            index=slides.length
        }

        for(let i=0; i<slides.length; i++){
            slides[i].style.display="none"
        }

        for(let i=0; i<dots.length; i++){
            dots[i].classList.remove("active");
        }
        slides[index-1].style.display="flex";
        dots[index-1].classList.add("active");
    }

    setInterval(()=>{
        plusslide(1);
    },8000);
