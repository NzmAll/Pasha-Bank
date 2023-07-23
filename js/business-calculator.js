export function businessCalculator() {
  const slideValues = document.querySelectorAll(".range-slider-text input");
  const inputSlides = document.querySelectorAll(".range-slider > input");
  const totalText = document.querySelector(
    ".calculator-result #monthly-paid-amount"
  );
  const percentText = document.querySelector(".calculator-result #interest-rate");
  const totalPercent = parseInt(percentText.textContent);

  const totalCost = 0;
  const totalMoney = 5000;
  const totalMonth = 3;

  inputSlides.forEach((inputSlide) => {
    const slideValue =
      inputSlide.parentElement.firstElementChild.querySelector("input");
    inputSlide.oninput = () => {
      const value1 = inputSlide.value;
      slideValue.value = value1;
      if (slideValue.value.length > 3) {
        totalMoney = parseInt(slideValue.value);
      }

      if (slideValue.value.length < 3) {
        totalMonth = parseInt(slideValue.value);
        switch (totalMonth) {
          case 3:
            totalPercent = 12;
            percentText.textContent = 12;
            break;
          case 4:
            totalPercent = 12;
            percentText.textContent = 12;
            break;
          case 5:
            totalPercent = 12;
            percentText.textContent = 12;
            break;
          case 6:
            totalPercent = 12;
            percentText.textContent = 12;
            break;
          case 7:
            totalPercent = 14;
            percentText.textContent = 14;
            break;
          case 8:
            totalPercent = 14;
            percentText.textContent = 14;
            break;
          case 9:
            totalPercent = 14;
            percentText.textContent = 14;
            break;
          case 10:
            totalPercent = 15.5;
            percentText.textContent = 15.5;
            break;
          case 11:
            totalPercent = 15.5;
            percentText.textContent = 15.5;
            break;
          case 12:
            totalPercent = 15.5;
            percentText.textContent = 15.5;
            break;
          case 13:
            totalPercent = 16.5;
            percentText.textContent = 16.5;
            break;
          case 14:
            totalPercent = 16.5;
            percentText.textContent = 16.5;
            break;
          case 15:
            totalPercent = 16.5;
            percentText.textContent = 16.5;
            break;
          case 16:
            totalPercent = 16.5;
            percentText.textContent = 16.5;
            break;
          case 17:
            totalPercent = 16.5;
            percentText.textContent = 16.5;
            break;
          case 18:
            totalPercent = 17;
            percentText.textContent = 16.5;
            break;
          case 19:
            totalPercent = 17;
            percentText.textContent = 17;
            break;
          case 20:
            totalPercent = 17;
            percentText.textContent = 17;
            break;
          case 21:
            totalPercent = 17;
            percentText.textContent = 17;
            break;
          case 22:
            totalPercent = 17;
            percentText.textContent = 17;
            break;
          case 23:
            totalPercent = 17;
            percentText.textContent = 17;
            break;
          case 24:
            totalPercent = 17;
            percentText.textContent = 17;
            break;
        }
      }

      totalCost =
        totalMoney / totalMonth + (totalMoney * (totalPercent / 12)) / 100;
      totalText.textContent = totalCost.toFixed(2);

      const inputSlideString = JSON.stringify(inputSlide);

      localStorage.setItem("inputSlide", inputSlideString);

      const retrievedDataString = localStorage.getItem("inputSlide");

      const retrievedData = JSON.parse(retrievedDataString);

      console.log(retrievedData);
    };
  });

  inputSlides.forEach(function (div) {
    const divHtml = div.innerHTML;
    localStorage.setItem(div.id, divHtml);
  });

  inputSlides.forEach(function (div) {
    const savedHtml = localStorage.getItem(div.id);
    div.innerHTML = savedHtml;
  });

  const totalTextHtml = totalText.innerHTML;
  localStorage.setItem(totalText.id, totalTextHtml);

  const savedHtml = localStorage.getItem(totalText.id);
  div.innerHTML = savedHtml;
}
