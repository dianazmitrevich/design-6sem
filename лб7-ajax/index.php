<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Выберите город:</h1>
    <select name="city" id="city-select">
        <option value="">Выберите город</option>
        <option value="brest">Брест</option>
        <option value="vitebsk">Витебск</option>
        <option value="gomel">Гомель</option>
        <option value="grodno">Гродно</option>
        <option value="minsk">Минск</option>
        <option value="mogilev">Могилев</option>
    </select>

    <div id="result" class="result"></div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
        $("#city-select").on("change", function(e) {
            e.preventDefault();
            let th = $(this);
            $.ajax({
                url: "get_data.php",
                type: "POST",
                data: th.serialize(),
                success: function(e) {
                    let result = document.querySelector(".result");
                    result.innerHTML = "";
                    let arr = e.split(" ");

                    arr.forEach(element => {
                        result.innerHTML += "<input name='district' type='checkbox'><label for='district'>" +  element+ "</label><br>";
                    });
                },
                error: function() {
                    alert("ошибка");
                }
            });
        });
    </script>
</body>
</html>