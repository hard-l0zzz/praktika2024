
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
var btn2 = document.getElementsByClassName("order-button");
var span2 = document.getElementsByClassName("close");

// Loop through all buttons and add click event listeners
for (let i = 0; i < btn2.length; i++) {
    btn2[i].onclick = function () {
        modal2.style.display = "block";
    }
}

// Add click event listener for closing the modal
for (let j = 0; j < span2.length; j++) {
    span2[j].onclick = function () {
        modal2.style.display = "none";
        descriptionModal.style.display = "none";
    }
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


var descriptionModal = document.getElementById("descriptionModal");





// Функция для открытия модального окна с описанием
function openDescriptionModal(imageIndex) {
    var modalImage = descriptionModal.querySelector(".modal-image");
    var modalDescription = descriptionModal.querySelector("p");

    // Формируем путь к изображению на основе индекса
    modalImage.src = "img/img" + (imageIndex) + ".jpg"; // Устанавливаем источник изображения
    console.log("СУРС"+modalImage.src)
    switch (imageIndex) {
        case 1:
            modalDescription.textContent = "Это подробное описание игры Dungeons & Dragons. В этой игре вы погружаетесь в мир фэнтези, где можете стать кем угодно.";
            break;
        case 2:
            modalDescription.textContent = "Набор фигурок для игры в Dungeons & Dragons";
            break;
        case 3:
            modalDescription.textContent = "Книга содержит описания десятков каноничных монстров из мира Dungeons & Dragons. Нечисть и гиты, зорны и йети – будьте уверены, что без драконов дело тоже не обойдётся! Данная книга – настоящий подарок для любого мастера, который хочет разнообразить своё приключение, добавить в него опасность и особую изюминку.";
            break;
        case 4:
            modalDescription.textContent = `"Берсерк. Герои -
Генерал" – специальный формат игры, в котором можно играть более чем двум игрокам. Эти наборы предназначены именно для этого формата игры, а содержащиеся в них Герои сбалансированы специально для игры друг против друга. Правила также незначительно дополнены, чтобы описать игровой процесс на более чем двух человек.`;
            break;
        case 5:
            modalDescription.textContent = `Создавайте истории! "Руководство мастера подземелий" – одна из трёх главных книг Dungeons & Dragons, наряду с "Книгой Игрока" и "Энциклопедией Чудовищ". Для Мастера Подземелий эта книга станет основным источником информации при создании приключений и начала игр в настольную ролевую игру Dungeons & Dragons, а также поможет наполнить историю персонажами и взаимодействиями.`;
            break;
        case 6:
            modalDescription.textContent = "Спускайтесь в древние подземные лабиринты, охотьтесь за несметными сокровищами, сражайтесь с легендарными монстрами! Или просто исследуйте необъятные миры, распутывайте хитроумные королевские интриги и смело ввязывайтесь в любые неприятности – вы вольны делать всё, что вам вздумается в этом уникальном мире, а результат ваших действий будет зависеть от Мастера Подземелий и вашей удачи!";
            break;
        default:
            modalDescription.textContent = "Описание не доступно."; // На случай, если индекс вне диапазона
    }
    descriptionModal.style.display = "block"; // Показываем модальное окно
}

// Добавляем обработчик события на все изображения
var gameImages = document.getElementsByClassName("game-image");
for (let i = 0; i < gameImages.length; i++) {
    gameImages[i].onclick = function () {
        openDescriptionModal(i + 1); // Передаем индекс (i + 1, так как индексы начинаются с 0)
    }
}

// Закрытие модального окна при клике вне его
window.onclick = function (event) {
    if (event.target == descriptionModal) {
        descriptionModal.style.display = "none";
    }
}