$(function () {

    const $select = $('select');

    $select.on('change', function (event) {
        console.log($select.val());

    });


});