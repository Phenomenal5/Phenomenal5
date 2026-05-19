
function quiz(event) {
    const q1 = document.querySelector('input[name="question_1"]:checked');
    const q2 = document.querySelector('input[name="question_2"]:checked');
    const q3 = document.querySelector('input[name="question_3"]:checked');



    let score = 0;

    if(q1 && q1.value === "right")
        score++;
    if(q2 && q2.value === "right")
        score++;
    if(q3 && q3.value === "right")
        score++;

    alert(`you score ${score} out of 3`);
}