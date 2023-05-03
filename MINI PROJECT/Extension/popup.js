const urlParams = new URLSearchParams(window.location.search);
const result = urlParams.get('result');

const resultContainer = document.getElementById('result-container');
resultContainer.innerText = result;

let description;
if(result === "malware" || result === "Malware" ){
    description = "This website may infect your device, steal your personal information, or exploit vulnerabilities in your web browser or operating system";
} else if (result === "phishing" || result === "Phishing"){
    description = "This website may steal your login credentials, credit card details, or other sensitive information";
}else if(result === "defacement" || result === "Defacement"){
    description = "This website may download malware or compromise personal information or login credentials";
}

const descriptionContainer = document.getElementById('description-container');
descriptionContainer.innerText = description;


// add one liners --> code in popup.html
