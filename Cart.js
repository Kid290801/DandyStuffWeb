document.getElementById('confirm').addEventListener('click', confirmFunction)

function confirmFunction(e) {
    e.preventDefault();

    console.log("Your name: " + document.getElementById('name').value);
    console.log("Your phone number: " + document.getElementById('phone').value);
    console.log("Your address: " + document.getElementById('address').value);
    console.log("Your note: " + document.getElementById('note').value);

    alert('Your order will be deliveried as soon as possible! Thanks for choosing our shop! See you again!');
}