function getAbout() {
    return fetch("about.json")
    .then(response => response.json())
    .then(data => {return data})
}
function showAbout(texts) {
    let textContainer = document.querySelector("#about-text");
    let textHTML = "";
    texts.forEach(e => {
        textHTML += `⦿ ${e.text}<br/>`
    });
    textContainer.innerHTML = textHTML;
}
getAbout().then(data => {
    showAbout(data);
})

function getCoding() {
    return fetch("coding.json")
    .then(response => response.json())
    .then(data => {return data})
}
function showCoding(texts) {
    let textContainer = document.querySelector("#coding-text");
    let textHTML = "";
    texts.forEach(text => {
        textHTML += `⦿ <a href="${text.Profile}" target="_blank">${text.Platform}:</a> </span>${text.Text}<br/>`
    });
    textContainer.innerHTML = textHTML;
}
getCoding().then(data => {
    showCoding(data);
})
