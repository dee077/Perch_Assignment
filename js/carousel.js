const product = document.querySelectorAll(".product");
const left = document.querySelector(".arrow.left");
const right = document.querySelector(".arrow.right");
const length = product.length;
let ind = 0;

function showImages() {
  for (let i = 0; i < length; i++) {
    product[i].style.display = "none";
  }

  for (let i = ind; i < ind + 3; i++) {
    if (product[i]) {
      product[i].style.display = "block";
      left.style.display="block";
      right.style.display="block";
    }
  }
}
function slidePrev() {
    if (ind > 0) {
      ind--;
      showImages();
      left.style.display="block";
    }
    else
        left.style.display="none";
  }
  
  function slideNext() {
    if (ind < length - 3) {
      ind++;
      showImages();
      left.style.display="block";
    }
    else
        right.style.display="none";
  }
  
  left.addEventListener('click', slidePrev);
  right.addEventListener('click', slideNext);
  
  showImages();
