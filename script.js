function allowOnlyLetters(event) {
    const inputField = event.target;
    inputField.value = inputField.value.replace(/[^a-zA-Z]/g, '');
}
