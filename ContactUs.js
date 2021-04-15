document.getElementById('submit').addEventListener('click', submitFunction)

function submitFunction(e) {
    e.preventDefault();

    console.log("Your name: " + document.getElementById('name').value);
    console.log("Your age: " + document.getElementById('age').value);
    console.log("Your email: " + document.getElementById('email').value);
    console.log("Your subject: " + document.getElementById('subject').value);
    console.log("Your message: " + document.getElementById('message').value);

    alert('Thank you for submitting! We will get back to you soon!');
}