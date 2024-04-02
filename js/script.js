/* Header slider start */
// finding element
const images = document.querySelectorAll(".header_slider ul img");
const prevBtn = document.querySelector(".contral_prev");
const nextBtn = document.querySelector(".contral_next");

let n = 0;
function slideChange(){
    for(let image of images){
        image.style.display = "none";
    }
    images[n].style.display = "block";
}
slideChange();

prevBtn.addEventListener("click", ()=>{
    if(n > 0){
        n--;
    }else{
        n = images.length -1;
    }
    slideChange();
})

nextBtn.addEventListener("click", ()=>{
    if(n < images.length -1){
        n++;
    }else{
        n = 0;
    }
    slideChange();
})
/* Header slider end */


/* Product Slider Start */
const scrollContainer = document.querySelectorAll(".products");
for (const product of scrollContainer) {
  product.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
      product.scrollLeft += 100;
      e.preventDefault();
    }
    else {
      product.scrollLeft -= 100;
      e.preventDefault();
    }
  });
}

/* Product Slider end */