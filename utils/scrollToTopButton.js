const scrollToTopButton = document.querySelector('.scroll-to-top');

const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

scrollToTopButton.addEventListener('click', function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
})

document.addEventListener("scroll", function(){
    if(window.scrollY > (vh / 2)){
        scrollToTopButton.style.visibility = 'visible';
    }else{
        scrollToTopButton.style.visibility = 'hidden';
    }
});