export function guaranteeForm() {
  const formButton = document.querySelector(".question-form button");

  const input1 = document.querySelector(".question-form #input1").value;
  const input2 = document.querySelector(".question-form #input2").value;

  formButton.addEventListener("click", function () {
    console.log(!isNaN(input2));
    console.log(input1.trim());

    if (input1.trim() === "" && !isNaN(input2)) {
      const modal = document.getElementById("successModal");
      modal.style.display = "block";

      const closeBtn = modal.querySelector(".close");
      closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
      });
      alert("MURACIETINIZ NEZERE ALINDI!");
    } else {
      alert("DUZGUN DAXIL EDIN!");
    }
  });
}
