export function accAccordion() {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((accordionItem, index) => {
    const header = accordionItem.querySelector(".accordion-header");
    header.addEventListener("click", function () {
      accordionItem.classList.toggle("open");

      const description = accordionItem.querySelector(".accordion-content");
      if (accordionItem.classList.contains("open")) {
        description.style.display = "block";
        header.querySelector("i").classList.replace("fa-plus", "fa-minus");
        header.style.color = "green";
      } else {
        description.style.display = "none";
        header.querySelector("i").classList.replace("fa-minus", "fa-plus");
      }
      removeOpen(index);
    });
  });

  function removeOpen(index1) {
    accordionItems.forEach((item2, index2) => {
      if (index1 !== index2) {
        item2.classList.remove("open");

        const des = item2.querySelector(".accordion-content");
        des.style.display = "none";
        item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
      }
    });
  }
}
