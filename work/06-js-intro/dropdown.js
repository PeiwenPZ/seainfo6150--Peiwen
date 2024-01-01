document.addEventListener("DOMContentLoaded", function () {
    const dropdownButton = document.querySelector(".dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content");
  
    dropdownButton.addEventListener("click", function () {
        dropdownContent.classList.toggle("active");
    });
});
  