const myButton = document.getElementById('button');
myButton.addEventListener('click', () => {
    const pTag = document.getElementById('name');

    const nameInput = document.getElementById('name-input');

    const myInput = nameInput.value;

    pTag.textContent = myInput;

    if(myInput === 'Kira Yoshikage') {
        location.replace('https://youtu.be/yUCGIL1k1dw?t=156');
    }
});