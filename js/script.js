$(function () {

    const $select = $('select');
    const $gridContainer = $('.grid-container');
    const $ajaxLoader = $('.ajax-loader');


    $select.on('change', function (event) {
        $ajaxLoader.show();

        $(".logo").addClass("logo-on-click");
        $(".top-header").addClass("top-header-on-click");
        $(".choose-section").addClass("choose-section-on-click");
        $(".choose-section-wrapper").addClass("choose-section-wrapper-on-click");
        $(".copyright").addClass("copyright-on-click");
        $gridContainer.text('');

        $.ajax({
            method: "GET",
            url: "https://api.nytimes.com/svc/topstories/v2/" + event.target.value + ".json?api-key=pKVd06Mh3sAKyIaCdi5xzTGMW6D5w17t"
        }).done(function (data) {
            $ajaxLoader.hide();


            let count = 0;
            data.results.forEach(function (element, index) {
                const numStories = data.results[index].multimedia.length;

                if (count < 12 && numStories >= 5) {
                    count += 1;
                    $gridContainer.append(`<li>
                        <a href="${data.results[index].url}" target="_blank">
                            <div class="story-image" style="background-image: url(${data.results[index].multimedia[4].url})">
                                <p>${data.results[index].abstract}</p>
                            </div>
                        </a>
                    </li>`);

                };

            });

        });

    });

});