const myButton = document.getElementById('button');
myButton.addEventListener('click', () => {
    const pTag = document.getElementById('name');

    const nameInput = document.getElementById('name-input');

    const myInput = nameInput.value;

    pTag.textContent = myInput;
});






// myButton.addEventListener('click', changeName);
// myButton.addEventListener('click', function() {});
// pTag.textContent = 'Johnny Blaze';
// pTag.style.color = 'blue';
