const slider = document.querySelectorAll('img')
let conut = 0

slider.forEach(
    (img,index) => {
        img.style.left = `${index * 100}%`
    }
)
const slidersImg = () =>{
    slider.forEach(
            (img) => {
            img.style.transform = `translatex(${(conut%5)* 100}%)`
        }
    )
}
const goright = () =>{
    conut++
    slidersImg()
}
const goleft = () =>{
    conut--
    slidersImg()

}
// let slideIndex = 1;
// showSlides(slideIndex);

// function goright(n) {
//     showSlides(slideIndex += n);
//   }
//   function goleft(n){
//     showSlides(slideIndex += n);
//   }
//   function showSlides(n) {
//     let i;
//     let slides = document.querySelectorAll("img");
//     if (n > slides.length) {slideIndex = 1}    
//     if (n < 1) {slideIndex = slides.length}

//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//     }
//     for (i = 0; i < length; i++) {
//     }
//     slides[slideIndex-1].style.display = "";
//   }