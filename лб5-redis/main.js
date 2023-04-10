// cоздаем клиента Redis и подключаемся к базе данных
const redis = require("redis");
const client = redis.createClient();

// получаем ссылку на кнопку "Подписаться" из HTML-документа
const subscribeBtn = document.querySelector("#subscribeBtn");

// обрабатываем отправку формы
subscribeBtn.addEventListener("click", (event) => {
    event.preventDefault(); // предотвращаем отправку формы по умолчанию

    const email = document.querySelector("#email").value;

    // добавляем email подписчика в список в redis
    client.rpush("subscribers", email, (err, reply) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(`Добавлено новый подписчик: ${email}`);
    });
});

// подписываемся на канал redis чтобы получать новости
client.subscribe("news");

// обрабатываем сообщения на канале
client.on("message", (channel, message) => {
    console.log(`Получена новость: ${message}`);

    // для каждого подписчика из списка отправляем новость по email
    client.lrange("subscribers", 0, -1, (err, subscribers) => {
        if (err) {
            console.error(err);
            return;
        }

        subscribers.forEach((subscriber) => {
            console.log(`Отправляем новость на email: ${subscriber}`);
        });
    });
});


// запустить redis-server (консоль)
// запустить http-server (консоль)
// чтобы отправить новость на сайте redis-cli
// публикуем новость на канале – PUBLISH news "Вышла новая книга"
// в консоли должна вывестить новость