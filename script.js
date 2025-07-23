function gebid(id) {
    return document.getElementById(id);
}
function genrandchars(length) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

const codetext = gebid("codetext");
const code = genrandchars(5);
const startbutton = gebid("startbutton");

codetext.textContent = `enter ${code} to start`

startbutton.addEventListener("click", function(settings) {
    let input = window.prompt(`enter ${code} to start`)
    if (input === code) {
        window.location.href = "main.html";
    } else {
        alert(`error entered ${input} instead of ${code}`);
    }
})