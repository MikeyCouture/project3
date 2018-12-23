
const pugApp = {};

// setting up global variables to be used in functions 
let imageChoice;
let boxChoice;
let numChoice;
let timer;
let counter = 0;


// pugApp init function firing off three others.
pugApp.init = function () {
    pugApp.listenForImageClick();
    pugApp.listenForBoxClick();
    pugApp.timeOutAndResize();

}

// listening for which image the use clicks on. setting image Choice to the pata pic number and adding box shadow
pugApp.listenForImageClick = function () {

    $(".item").on("click", function (event) {
        event.preventDefault();
        imageChoice = $(this).attr("data-pic");
        console.log(imageChoice);
        $(this).addClass("boxShadow");
    });
}

// listening for which box the user has selected. IF the image number and box number match, append to the box.
pugApp.listenForBoxClick = function () {

    $(".box").on("click", function (event) {
        event.preventDefault();
        boxChoice = $(this).attr("data-box");
        console.log(boxChoice);

        if (imageChoice === boxChoice) {
            $(`.item${imageChoice}`).appendTo(`.box${boxChoice}`);
            $(`.item${imageChoice}`).removeClass("bord");
        } else {
            // alert("Try again!");
            swal("Try again!", "", "error");
        }

        // if all the divs with images are empty - prompt the user a winning message.
        if ($(".puzzle-Container").children().length == 0 && $(".container-Two").children().length == 0) {
            $(".box").removeClass("box-border");
            $(".main-box").addClass("winner-Highlight");

            setTimeout(function () {
                $(".winner-box").addClass("winner-Display");
            }, 2000);
        }
        $(".play-Again").on("click", function () {
            // $("#pugPic1").attr("src", "./assets/Pug_Image2-1.jpg");
            location.reload();
        });
    });
}

pugApp.timeOutAndResize = function () {

    $(".fas").on("click", function () {
        console.log('clicked!');
        
        function timeIt(){
            counter++;
            document.getElementById("timer").innerHTML = counter;
            console.log(counter);
        }

        setInterval(timeIt, 1000);

        function myStopFunction() {
            clearInterval(setInterval);
        }

        myStopFunction();

    });



    // if ($(".puzzle-Container").children().length == 0 && $(".container-Two").children().length == 0) {

    //     console.log("puzzle finished");

    // };



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

