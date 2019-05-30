$(function () {

    const $select = $('select');
    const $gridContainer = $('.grid-container');

    $select.on('change', function (event) {
        console.log("event", event.target.value);
        // console.log($select.val());
        $.ajax({
            method: "GET",
            url: "https://api.nytimes.com/svc/topstories/v2/" + event.target.value + ".json?api-key=pKVd06Mh3sAKyIaCdi5xzTGMW6D5w17t"
        }).done(function (data) {
            console.log("data", data);
            // console.log(data.results[0].multimedia[4].url);

            data.results.forEach(function (value, index) {
                if (index <= 11) {
                    // && $multimedia.length !== 0
                    // const $multimedia = $('data.results[index].multimedia');
                    $gridContainer.append(`<li>
                        <a href="#">
                            <div style="background-image: url(${data.results[index].multimedia[4].url})">
                                <p>${data.results[index].abstract}</p>
                            </div>
                        </a>
                    </li>`);

                };

            });








            // // $(".results").append("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'/>");
            // $(".results").append(`<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" />`);
            // $(".results").append(`<p>${data.weather[0].main}</p>`);
            // $(".results").append(`<p>${data.weather[0].description}</p>`);




        });

    });



});