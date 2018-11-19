
const pugApp = {};

let imageChoice;
let boxChoice;
let numChoice;
let timeoutId;

pugApp.init = function () {
    pugApp.listenForImageClick();
    pugApp.listenForBoxClick();
    pugApp.timeOutAndResize();

}

pugApp.listenForImageClick = function () {

    $(".item").on("click", function (event) {
        event.preventDefault();
        imageChoice = $(this).attr("data-pic");
        console.log(imageChoice);
        $(this).addClass("boxShadow");
    });
}

pugApp.listenForBoxClick = function () {

    $(".box").on("click", function (event) {
        event.preventDefault();
        boxChoice = $(this).attr("data-box");
        console.log(boxChoice);
        console.log(numChoice);

        if (imageChoice === boxChoice) {
            $(`.item${imageChoice}`).appendTo(`.box${boxChoice}`);
            $(`.item${imageChoice}`).removeClass("bord");
        } else {
            // alert("Try again!");
            swal("Try again!", "", "error");
        }

        if ($(".puzzle-Container").children().length == 0 && $(".container-Two").children().length == 0) {
            $(".box").removeClass("box-border");
            $(".main-box").addClass("winner-Highlight");
            setTimeout(function () {
                console.log(setTimeout);
                $(".winner-box").addClass("winner-Display");
            }, 2500);
            clearTimeout(timeoutId);
        }

        $(".play-Again").on("click", function () {
            // $("#pugPic1").attr("src", "./assets/Pug_Image2-1.jpg");
            location.reload();
        });
    });
}

pugApp.timeOutAndResize = function () {

    // $(".fas").on("click", function () {
    //     setTimeout(function () {
    //         swal("Time is up!", "", "error");
    //     }, 34000);
    //     if ($(".puzzle-Container").children().length == 0 && $(".container-Two").children().length == 0) {
    //         clearTimeout(timeoutId);
    //     }
    // });

    $(".fas").on("click", function () {
        timeoutId = setTimeout(function () {
            swal("Time is up!", "", "error");
        }, 45000);

        // if ($(".puzzle-Container").children().length == 0 && $(".container-Two").children().length == 0) {
        //     clearTimeout(timeoutId);
        // }
    });





    $(window).resize(function () {
        if ($(window).width() < 1300) {
            // do something here
            $(".puzzle-Container").children().appendTo(`.container-Two`);

        }
    });
}


$(function () {
    pugApp.init();
});

