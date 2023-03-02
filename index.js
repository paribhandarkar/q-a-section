const questionsEl = document.querySelectorAll(".question");

questionsEl.forEach((question) => {
  const btnEl = question.querySelector(".btn");
  btnEl.addEventListener("click", function () {
    question.classList.toggle("show-text");
  });
});
