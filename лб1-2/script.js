'use strict';

const info = [
    [
        "Банка сгущёнки",
        "images/sgushenka.jpeg",
        "У многих жителей СНГ при виде бело-синего геометрического узора на консервной банке начинает урчать в животе.Ещё бы, вкус Рогачёрской сгущёнки знаком нескольким поколениям сладкоежек.В 2013 году в этом белорусском городе появилась соответственная скульптура авторства Глеба Отчика.Скульптурная композиция исполнена в античной технике мозаики из разноцветного стекла.",
    ],
    [
        "Буква «Ў краткая»",
        "images/u-kratkaya.jpeg",
        "Сегодня каменная буква собирает вокруг себя филологов, спорящих на темы касательно белорусского языка, поэтов, сочиняющих стихи, посвященные букве «Ў», и, разумеется, туристов.",
    ],
    [
        "Торговка семечками",
        "images/semechki.jpeg",
        "Скульптура установлена в 2002 году в честь развития малого предпринимательства. Есть в народе такая примета: дотронуться до статуи бабушки, чтобы дела стали ладиться.",
    ],
    [
        "Огурец",
        "images/ogurec.jpeg",
        "Удивительная скульптура привлекает ещё и тем, что с ней связаны интересные приметы: чтобы разбогатеть, следует потереть купюры в кармане; а если дотронуться цветка – будет прибавление в семействе!",
    ],
    [
        "Звездочёт",
        "images/zvezdochet.jpeg",
        "Есть поверье, что если сесть в «своё» кресло и загадать желание, оно непременно исполнится. Впрочем, говорят, если дотянуться до руки семиметрового астролога, эффект тот же!",
    ],
    [
        "«Шура Балаганов»",
        "images/shura.jpeg",
        "Бронзовая скульптура персонажа из романа Ильфа и Петрова «Золотой телёнок».",
    ],
];

$(".map__city").each(function (index) {
    $(this).on("mousemove", () => {
        $(".info").css("opacity", "1");
        $(".card__title").text(info[index][0]);
        $(".card__image img").attr("src", info[index][1]);
        $(".card__desc").text(info[index][2]);
    });

    $(this).on("mouseout", () => {
        $(".info").css("opacity", "0");
    });
});

// 2

const person = $(".animation__person img");

setTimeout(() => {
    $(".animation__person img").animate({ "margin-left": "-=240" }, 1000);
    $(".map__city-grodno").trigger("mousemove");
}, 1000);

setTimeout(() => {
    $(".animation__person img").animate({ "margin-left": "+=30", "margin-bottom": "-=230" }, 1000);
    $(".map__city-brest").trigger("mousemove");
}, 3000);

setTimeout(() => {
    $(".animation__person img").animate({ "margin-left": "+=500", "margin-bottom": "+=20" }, 1000);
    $(".map__city-gomel").trigger("mousemove");
}, 5000);

setTimeout(() => {
    $(".animation__person img").animate({ "margin-left": "+=100", "margin-bottom": "+=250" }, 1000);
    $(".map__city-mogilev").trigger("mousemove");
}, 7000);

setTimeout(() => {
    $(".animation__person img").animate({ "margin-left": "-=200", "margin-bottom": "+=360" }, 1000);
    $(".map__city-vitebsk").trigger("mousemove");
}, 9000);

setTimeout(() => {
    $(".animation__person img").animate({ "margin-left": "0", "margin-bottom": "0" }, 1000);
    $(".map__city-minsk").trigger("mousemove");
}, 11000);