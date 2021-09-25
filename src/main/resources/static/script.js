
/*
const rb = document.getElementById("random-gen");
const nn = document.getElementById("new-number");
function getData(response) {
    return response.json();
}

function alertResponse(parsedData) {
    nn.innerHTML = parsedData;
}
rb.addEventListener("click", () => {
    fetch("/random")
            .then(getData)
            .then(alertResponse);
});
*/
const urlParams = new URLSearchParams(window.location.search);
const status = urlParams.get('key');
const success = document.getElementById("success");
const danger = document.getElementById("danger");

if (status == "success!") {
    danger.style.display = "none";
    success.style.display = "block !important";
} else if (status == "failure!") {
    danger.style.display = "block !important";
    success.style.display = "none";
} else {
    danger.style.display = "none";
    success.style.display = "none";
}

