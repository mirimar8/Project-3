$(function () {

    const $select = $('select');
    const $gridContainer = $('.grid-container');
    // const $multimedia = $('data.results[index].multimedia');


    $select.on('change', function (event) {
        console.log("event", event.target.value);
        $(".ajax-loader").show();

        $(".logo").addClass("logo-on-click");
        $(".top-header").addClass("top-header-on-click");
        $(".choose-section").addClass("choose-section-on-click");
        $(".choose-section-wrapper").addClass("choose-section-wrapper-on-click");
        $(".copyright").addClass("copyright-on-click");

        $gridContainer.text('');

        // console.log($select.val());
        $.ajax({
            method: "GET",
            url: "https://api.nytimes.com/svc/topstories/v2/" + event.target.value + ".json?api-key=pKVd06Mh3sAKyIaCdi5xzTGMW6D5w17t"
        }).done(function (data) {
            console.log("data", data);
            // console.log(data.results[0].multimedia[4].url);
            $(".ajax-loader").hide();


            let count = 0;
            data.results.forEach(function (element, index) {
                if (count < 12 && data.results[index].multimedia.length >= 5) {
                    count += 1;
                    $gridContainer.append(`<li>
                        <a href="${data.results[index].url}" target="_blank">
                            <div style="background-image: url(${data.results[index].multimedia[4].url})">
                                <p>${data.results[index].abstract}</p>
                            </div>
                        </a>
                    </li>`);

                };

            });

        });

    });

});