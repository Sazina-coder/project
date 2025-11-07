 let slideindex=1;
    showslides(slideindex);

    function beforeslide(){
        showslides(slideindex-=1);
    }

    function afterslide(){
        showslides(slideindex+=1);
    }

    function currentSlide(n){
        showslides(slideindex=n);
    }

    function plusslide(n){
        showslides(slideindex+=n);
    }

    function showslides(n){
        let slides= document.getElementsByClassName("slide");
        let dots= document.getElementsByClassName("dot");

        if (n>slides.length){
            slideindex=1
        }
        if(n<1){
            slideindex=slides.length
        }

        for(let i=0; i<slides.length; i++){
            slides[i].style.display="none"
        }

        for(let i=0; i<dots.length; i++){
            dots[i].classList.remove("active");
        }
        slides[slideindex-1].style.display="flex";
        dots[slideindex-1].classList.add("active");
    }

    setInterval(()=>{
        plusslide(1);
    },8000);
