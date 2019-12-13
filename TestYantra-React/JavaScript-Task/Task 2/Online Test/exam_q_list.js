var pos = 0,
    test, test_status, questions, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    ["Who was the KSUSTA vice chancelor", "Prof. A. A. Zuru", "Prof. A. Zuru", "Prof. A. Kaoje", "A"],
    ["What is 20 x 50", "2000", "1500", "1000", "C"],
    ["What type of language is HTML", "Processor", "Markup language", "Server", "B"],
    ["What is value of 2<sup>5</sup>", "16", "32", "64", "B"]
];

function _(x) {
    return document.getElementById(x);
}

function renderQuestion() {
    test = _("test");
    if (pos >= questions.length) {
        test.innerHTML = "<h3>You got " + correct + " of " + questions.length + " questions correct</h3>";
        _("test_status").innerHTML = "Exam Completed";
        pos = 0;
        correct = 0;
        return false;
    }
    _("test_status").innerHTML = "Question " + (pos + 1) + " of " + questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    test.innerHTML = "<h3>" + question + "</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A'> " + chA + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> " + chB + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> " + chC + "<br><br>";
    test.innerHTML += "<input type='submit' class='btn btn-primary' value='Submit Answer' onclick='checkAnswer()'>";
}

function checkAnswer() {
    choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }
    if (choice == questions[pos][4]) {
        correct++;
    }
    pos++;
    renderQuestion();
}
window.addEventListener("load", renderQuestion, false);