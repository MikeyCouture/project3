
const pugApp = {};

// setting up global variables to be used in functions 
let imageChoice;
let boxChoice;
let numChoice;
let timer;
let counter = 0;
let myTimer;
let picture;
// const picture = document.querySelector('.item1');
const gridBox = document.querySelectorAll('.box');
// console.log(picture);



// pugApp init function firing off three others.
pugApp.init = function () {
    pugApp.listenForImageClick();
    pugApp.listenForBoxClick();
    pugApp.timeOutAndResize();
}


// listening for which image the use clicks on. setting image Choice to the pata pic number and adding box shadow
pugApp.listenForImageClick = function () {

    $(".item").on("dragstart", function () {
        // event.preventDefault();
        imageChoice = $(this).attr("data-pic");
        console.log(imageChoice);
        $(this).addClass("boxShadow");
        console.log("started");
    });

    $(".item").on('click', function (event){
        event.preventDefault();
    });

    $(".item").on('dragend', function () {
        console.log("ended");
    });

}

// listening for which box the user has selected. IF the image number and box number match, append to the box.
pugApp.listenForBoxClick = function () {

    for( empty of gridBox){
        empty.addEventListener('dragover', dragOver);
        empty.addEventListener('dragenter', dragEnter);
        empty.addEventListener('dragleave', dragLeave);
        // empty.addEventListener('drop', dragDrop);
    }

    function dragOver(e){
        e.preventDefault();
        console.log("over");
    }

    function dragEnter() {
        console.log("enter");
    }
    function dragLeave() {
        console.log("leave");
    }
    // function dragDrop(){
    //     console.log("drop");
    // }

    $(".box").on("drop", function (event) {
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
            console.log("puzzle finished");

            setTimeout(function () {
                $(".winner-box").addClass("winner-Display");
                // append time on winner box here
                $(".officialTime").append(counter);
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

        function timeIt() {
            counter++;
            document.getElementById("timer").innerHTML = counter;
            console.log(counter);
            if ($(".puzzle-Container").children().length == 0 && $(".container-Two").children().length == 0){
                clearInterval(myTimer);
            };
        }

        let myTimer = setInterval(timeIt, 1000);
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

