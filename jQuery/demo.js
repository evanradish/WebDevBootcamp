/**
 * Created by Evan on 5/17/2016.
 */
$("button").on("click", function(){
    $("div").slideToggle(1000, function(){
        $(this).remove();
    });
});