const cart = document.getElementById('cart');
const modal = document.getElementById('modal');
const rem = document.getElementById('close');
cart.addEventListener('click', function (event) {modal.style.display = "flex";});
rem.addEventListener('click', function (event) {modal.style.display = "none";});