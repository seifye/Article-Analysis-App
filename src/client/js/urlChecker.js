function checkURL(formInput) {
    let urlRGEX = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
    if (urlRGEX.test(formInput)) {
        return
    } else {
        alert("This is not a valid URL, please try again!");
    }
}

export { checkURL }

