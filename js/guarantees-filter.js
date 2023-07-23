export function guaranteeFilter() {
  const buttons = document.querySelectorAll(".filter-buttons button");
  const divs = document.querySelectorAll(".options-list .items");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonId = button.id;

      if (buttonId === "show-all") {
        divs.forEach((div) => {
          div.style.display = "block";
        });
        return;
      }

      divs.forEach((div) => {
        if (div.id === buttonId.replace("button", "item")) {
          div.style.display = "block";
          button.style.color = "green";
        } else {
          div.style.display = "none";
          button.style.color = "#212529";
        }
      });
    });
  });
}
