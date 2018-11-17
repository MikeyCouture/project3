
$(function () { 

    console.log("working!");

// listening for an on click image
    let imageChoice;
    let boxChoice;
    let numChoice;

    $(".item").on("click", function(event) {
        event.preventDefault();
        imageChoice = $(this).attr("data-pic");
        console.log(imageChoice);
        $(this).addClass("boxShadow");
    });
    
// listening for an on click on box
    $(".box").on("click", function (event) {
        event.preventDefault();
        boxChoice = $(this).attr("data-box");
        // numChoice = $(this).children().remove();
        console.log(boxChoice);
        console.log(numChoice);

        if (imageChoice === boxChoice) {
            $(`.item${imageChoice}`).appendTo(`.box${boxChoice}`);
            $(`.item${imageChoice}`).removeClass("bord");
        } else {
            // alert("Try again!");
            swal("Try again!", "", "error");
        }

        if ($(".puzzle-Container").children().length == 0) {
            $(".box").removeClass("box-border");
            setTimeout(function(){
                console.log(setTimeout);
                $(".winner-box").addClass("winner-Display");
            }, 1200);
        }

        $(".play-Again").on("click", function(){
            $("#pugPic1").attr("src", "./assets/Pug_Image2-1.jpg");
            location.reload();
        });

    });

    $(".fas").on("click", function(){

        setTimeout(function () {
            swal("Time is up!", "", "error");
        }, 2000);
    })




});
