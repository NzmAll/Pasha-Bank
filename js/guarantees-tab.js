export function guaranteeTab() {
  const tabButtons = document.querySelectorAll(
    "#online-business-benefits .nav-tabs button"
  );

  const firstContent = document.querySelector("#tab1");
  const secondContent = document.querySelector("#tab2");

  tabButtons.forEach((tabButton) => {
    const tab = tabButton.getAttribute("data-tab");
    tabButton.addEventListener("click", function () {
      if (tab === firstContent.id) {
        firstContent.classList.add("show");
        secondContent.classList.remove("show");
        tabButton.classList.add("active");
        tabButton.nextElementSibling.classList.remove("active");
        tabButton.style.color = "#343836";
        tabButton.nextElementSibling.style.color = "#00000061";
      } else if (tab === secondContent.id) {
        firstContent.classList.remove("show");
        secondContent.classList.add("show");
        tabButton.classList.add("active");
        tabButton.previousElementSibling.classList.remove("active");
        tabButton.style.color = "#343836";
        tabButton.previousElementSibling.style.color = "#00000061";
      }
    });
  });
}
