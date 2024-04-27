let prevScrollPos = window.scrollY;
window.onscroll = function(){
    let currentScrollPos = window.scrollY;
    if(prevScrollPos > currentScrollPos){
        document.getElementsByTagName("header")[0].classList.remove("hidden");
    }else{
        document.getElementsByTagName("header")[0].classList.add("hidden")
    }
    prevScrollPos = currentScrollPos;
}