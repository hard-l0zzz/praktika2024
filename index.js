
var modal = document.getElementById("loginModal");
var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("loginForm").onsubmit = function (event) {
    event.preventDefault();
}

var modal2 = document.getElementById("orderModal");
var btn2 = document.getElementById("openOrderModal");
var span2 = document.getElementsByClassName("close")[1];

btn2.onclick = function () {
    modal2.style.display = "block";
}

span2.onclick = function () {
    modal2.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}


document.getElementById('submitBtn').addEventListener('click', function (event) {
    try {
        const login = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        if (!login || !password) {
            event.preventDefault();
            alert('Пожалуйста, заполните все поля.');
            return;
        }

        event.preventDefault();
        alert('Вход успешен');
        document.getElementById("loginModal").style.display = "none";
    } catch (error) {
        console.error("Произошла ошибка:", error.message);
        alert("Произошла ошибка при входе. Пожалуйста, попробуйте еще раз.");
    }
});



document.getElementById('orderBtn').addEventListener('click', function (event) {
    const name = document.getElementById('Name').value.trim();
    const email = document.getElementById('Email').value.trim();

    if (!name || !email) {
        event.preventDefault();
        alert('Пожалуйста, заполните все поля.');
    }
    if (name && email) {
        event.preventDefault();
        alert('Заказ оформлен');
        document.getElementById("orderModal").style.display="None"
    }
});


document.getElementById('discountsButton').addEventListener('click', function() {
    const gameCards = document.querySelectorAll('.game-card');

    gameCards.forEach(card => {
        if (!card.classList.contains('discount')) {
            card.classList.toggle('transparent');
        }
    });
});