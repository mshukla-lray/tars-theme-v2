$(document).ready(function () {
    //start vechile result modify (sorting, filtering, select all)
    $('.Vehicle .ul-modify-result > li').click(function () {
        $(this).toggleClass('active');
    });
    //end vechile result modify (sorting, filtering, select all)

    //start grid/list view option change
    $('.ul-view-style >li').click(function () {
        debugger;
        $('.ul-view-style >li').removeClass('active');
        $(this).addClass('active');
        var view = $(this).attr('data-attr');
        view == "grid-view" ? $('.ul-view-option').removeClass('list-view') : $('.ul-view-option').removeClass('grid-view');
        $('.ul-view-option').addClass(view);
    });
    //end grid/list view option change

    //start select vehicle function//
    $('.ul-view-option > li').click(function () {
        $(this).toggleClass('selected');
    });
});