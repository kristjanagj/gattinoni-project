$(document).ready(function(){
    var date_input=$('input[name="date"]'); //our date input has the name "date"
    var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
    date_input.datepicker({
        format: 'mm/dd/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
    })

    $('.btn.two').on("click", function() {
        $(this).css('background-color', '#fbc12d');
        $(this).css('padding-bottom', '65px');
    });
    
    $('.btn.three').on("click", function() {
        $(this).css('background-color', '#9186bc');
        $(this).css('padding-bottom', '65px');
    });

    // $(".btn.two").mouseover(function () {
    //     $(this).css('background-color', '#fbc12d');
    //     $(this).css('padding-bottom', '65px'); 
    // }).mouseout(function () {
    //     $(this).css('background-color', '#fff');
    //     $(this).css('padding-bottom', '10px'); // light blue color
    // });
// change somthing

});