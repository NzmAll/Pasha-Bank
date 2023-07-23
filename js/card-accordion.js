export function cardsAccordion() {
  const forMoreButtons = document.querySelectorAll(
    ".card-info .card-info-context button"
  );
  const forMoreSections = document.querySelectorAll(
    ".card-info .card-info-context"
  );

  forMoreSections.forEach((forMoreSection) => {
    const forMoreButton = forMoreSection.querySelector("button");
    const infoSection = forMoreSection.nextElementSibling;
    forMoreButton.addEventListener("click", function () {
      infoSection.classList.toggle("show-me-yourself");
      if (infoSection.classList.contains("show-me-yourself")) {
        forMoreButton.textContent = "Bağla";
      } else {
        forMoreButton.textContent = "Ətraflı";
      }
    });
  });
}
