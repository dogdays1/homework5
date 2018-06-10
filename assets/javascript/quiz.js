//<script>
$(document).ready(function () {
    var questions = {
        info: [{
            title: "Jaws",
            a1: "Peter Fonda",
            a2: "Jack Nicholson",
            a3: "Milton Berle",
            a4: "Roy Scheider",
            correctResponse: "4",
        }, {
            title: "Ghandi",
            a1: "Ben Kingsley",
            a2: "Donald Pleasance",
            a3: "Richard Burton",
            a4: "Dame Edna Everage",
            correctResponse: "1",
        }, {
            title: "You Only Live Twice",
            a1: "Desmond LLewelyn",
            a2: "Roger Moore",
            a3: "Ian McKellen",
            a4: "Kenneth Branagh",
            correctResponse: "1",
        }, {
            title: "Bridges of Madison County",
            a1: "Nicholas Cage",
            a2: "Meryl Streep",
            a3: "Jessica Lange",
            a4: "William Hurt",
            correctResponse: "2",
        }, {
            title: "The Princess Bride",
            a1: "Tatum Oneal",
            a2: "Kirsten Dunst",
            a3: "Robin Wright",
            a4: "Madonna",
            correctResponse: "3",
        }, {
            title: "Jurassic Park",
            a1: "Julianne Moore",
            a2: "Laura Dern",
            a3: "Mary Stuart Masterson",
            a4: "William Macy",
            correctResponse: "2",
        }, {
            title: "Back to the Future II",
            a1: "Elisabeth Shue",
            a2: "Robert Carradine",
            a3: "Meredith Baxter",
            a4: "Johnny Depp",
            correctResponse: "1",
        }, {
            title: "Lord of the Rings (all 3)",
            a1: "Maggie Smith",
            a2: "Kenneth Branagh",
            a3: "Cate Blanchett",
            a4: "Gwyneth Paltrow",
            correctResponse: "3",
        }, {
            title: "Sliding Doors",
            a1: "Sandra Bullock",
            a2: "Sophie Marceau",
            a3: "Gwyneth Paltrow",
            a4: "Brad Pitt",
            correctResponse: "3",
        }, {
            title: "Star Trek: Beyond",
            a1: "Patrick Stewart",
            a2: "Benedict Cumberbatch",
            a3: "Chris Pratt",
            a4: "Simon Pegg",
            correctResponse: "4",
        }]
    };

    var i = 8;
    var rightAns = 0;
    var wrongAns = 0;
    var unAns = 0;
    var corrAns = 0;
    var comment = 0;
    $("#jtron2").hide();
    $("#b1").click(choice1);
    $("#b2").click(choice2);
    $("#b3").click(choice3);
    $("#b4").click(choice4);
    $("#reset").click(reset);
    var x = 0;
    $("#jtron2").hide();
    $("#jtron3").hide();
    showQuestion();

    // for (x = 0; x < 4; x++) {
    // showQuestion();
    console.log(questions.info[x].title);
    console.log(questions.info[x].a1);
    console.log(questions.info[x].a2);
    console.log(questions.info[x].a3);
    console.log(questions.info[x].a4);
    console.log(questions.info[x].correctResponse);

    //       var showAnswer;




    function showQuestion() {
        $("#timer").text("00:0" + i);
        if (x === 10) {
            end();
        } else {
            counter1 = setInterval(countdown, 1000)
            $("#pic").text(questions.info[x].title);
            $("#b1").text(questions.info[x].a1);
            $("#b2").text(questions.info[x].a2);
            $("#b3").text(questions.info[x].a3);
            $("#b4").text(questions.info[x].a4);
            $("#jtron1").show();
            $("#jtron2").hide();
            // noAns = parseInt(questions.info[x].correctResponse);
        }
    }
    function showRightAnswer() {
        clearInterval(counter1);
        i = 8;
        $("#jtron1").hide();
        $("#jtron2").show();
        $("#ansTxt").html("Yes, GOOD JOB!  That actor was in " + questions.info[x].title);
        setTimeout(showQuestion, 3000);
        x++;
        rightAns++;
    }
    function showWrongAnswer() {
        clearInterval(counter1);
        i = 8;
        $("#jtron1").hide();
        $("#jtron2").show();
        $("#ansTxt").html("OUCH! Sorry, that actor was not in " + questions.info[x].title + ", but " + corrAns + " was.");
        setTimeout(showQuestion, 3000);
        x++;
        wrongAns++;
    }
    function showNoAnswer() {
        clearInterval(counter1);
        i = 8;
        $("#jtron1").hide();
        $("#jtron2").show();
        $("#ansTxt").html("You did remember this was a timed quiz didn't you?  The correct response was " + noAns);
        setTimeout(showQuestion, 3000);
        x++;
        unAns++;
    }

    function countdown() {
        i--;
        console.log(i);
        if (i === 0) {
            clearInterval(counter1);
            i = 8;
            noAnswer();
        }
        else {
            clearInterval(counter1);

            showQuestion();
        }
    };
    //set which button chosen here
    function choice1() {
        console.log("clicked 1");
        clearInterval(counter1);
        if (questions.info[x].correctResponse === "1") {
            showRightAnswer();
        }
        else { corrAnswer() };
    };
    function choice2() {
        console.log("clicked 2");
        clearInterval(counter1);
        if (questions.info[x].correctResponse === "2") {
            showRightAnswer();
        }
        else { corrAnswer() };
    };
    function choice3() {
        console.log("clicked 3");
        clearInterval(counter1);
        if (questions.info[x].correctResponse === "3") {
            showRightAnswer();
        }
        else { corrAnswer() };
    };
    function choice4() {
        console.log("clicked 4");
        clearInterval(counter1);
        if (questions.info[x].correctResponse === "4") {
            showRightAnswer();
        }
        else { corrAnswer() };
    };
    function noAnswer() {
        if (questions.info[x].correctResponse === "1") {
            noAns = questions.info[x].a1;
            showNoAnswer();
        }
        else if
        (questions.info[x].correctResponse === "2") {
            noAns = questions.info[x].a2;
            showNoAnswer();
        }
        else if
        (questions.info[x].correctResponse === "3") {
            noAns = questions.info[x].a3;
            showNoAnswer();
        }
        else {
            noAns = questions.info[x].a4;
            showNoAnswer();
        };
    }
    function corrAnswer() {
        if (questions.info[x].correctResponse === "1") {
            corrAns = questions.info[x].a1;
            showWrongAnswer();
        }
        else if
        (questions.info[x].correctResponse === "2") {
            corrAns = questions.info[x].a2;
            showWrongAnswer();
        }
        else if
        (questions.info[x].correctResponse === "3") {
            corrAns = questions.info[x].a3;
            showWrongAnswer();
        }
        else {
            corrAns = questions.info[x].a4;
            showWrongAnswer();
        };
    }
    function end() {
        if (rightAns < 5) {
            comment = "We'll call you a movie NOOB.";
        }
        else if (rightAns > 6) {
            comment = "Seriously...it's called OUTDOORS.  You should try it sometime.";
        }
        else { comment = "Not bad at all" };
        console.log("end");
        $("#jtron1").hide();
        $("#jtron2").hide();
        $("#jtron3").show();
        $("#ra").text("Right = " + rightAns);
        $("#wa").text("Wrong = " + wrongAns);
        $("#na").text("Unanswered = " + unAns);
        $("#cmnt").text("(" + rightAns + " right.  " + comment + ")");
    }
    function reset() {
        x = 0;
        i = 8;
        rightAns = 0;
        wrongAns = 0;
        unAns = 0;
        corrAns = 0;
        comment = 0;
        clearInterval(counter1);
        // $("#b1").click(choice1);
        // $("#b2").click(choice2);
        // $("#b3").click(choice3);
        // $("#b4").click(choice4);
        // $("#reset").click(reset);
        $("#jtron2").hide();
        $("#jtron3").hide();
        showQuestion();

    }
})
//</script>