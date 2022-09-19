function changeName() {
    var name = document.querySelector(".user_body h1");
    name.innerText = "Another Name";
}

function removeParent(element) {
    element.parentElement.parentElement.remove();
    var requests = document.querySelector('.button_2');
    requestsInt = parseInt(requests.textContent);
    requests.innerText = requestsInt - 1;
}

function increaseConnections() {
    var connects = document.querySelector('.button_500');
    connectsInt = parseInt(connects.textContent);
    connects.innerText = connectsInt + 1;
}