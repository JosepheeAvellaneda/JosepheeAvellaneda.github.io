const buttons = document.querySelectorAll(".cv-button");
const contents = document.querySelectorAll(".cv-content");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-section");

    contents.forEach(content => {
      content.classList.remove("active");
    });

    buttons.forEach(btn => {
      btn.classList.remove("active-button");
    });

    document.getElementById(target).classList.add("active");
    button.classList.add("active-button");
  });
});
