'use strict'
const MyLazy = () => {
    let images =  document.querySelectorAll('img ');
    const options = {
        root: null,
        rootMargin: "50px",
        threshold: 0.1
    }
    function handleImg(myImg, observer) {
        myImg.forEach(myImgSingle =>{
            // console.log(myImgSingle.intersectionRatio);
            if(myImgSingle.intersectionRatio > 0){
                loadImg(myImgSingle.target);
            }

        })
    }
    function loadImg(img) {
        img.src = img.getAttribute("data")
    }



    const observer = new IntersectionObserver(handleImg, options);
    images.forEach(img =>   {
        observer.observe(img)
    })

};MyLazy();
