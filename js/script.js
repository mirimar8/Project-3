$(function () {

    const $select = $('select');

    $select.on('change', function (event) {
        console.log("event ", event.target.value);
        // console.log($select.val());
        $.ajax({
            method: "GET",
            url: "https://api.nytimes.com/svc/topstories/v2/" + event.target.value + ".json?api-key=pKVd06Mh3sAKyIaCdi5xzTGMW6D5w17t"
        }).done(function (data) {
            console.log("data", data);
            // // $(".results").append("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'/>");
            // $(".results").append(`<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" />`);
            // $(".results").append(`<p>${data.weather[0].main}</p>`);
            // $(".results").append(`<p>${data.weather[0].description}</p>`);




        });

    });



});