export function businessVideo() {
  const queuePos = localStorage.getItem("queuePos");

  if (!queuePos) {
    queuePos = 1;
    localStorage.setItem("queuePos", queuePos);
  }

  if (queuePos == 1) {
    document.getElementById("first-customer").style.display = "flex";
    document.getElementById("second-customer").style.display = "none";
  } else {
    document.getElementById("first-customer").style.display = "none";
    document.getElementById("second-customer").style.display = "flex";
  }

  queuePos++;
  if (queuePos > 2) {
    queuePos = 1;
  }
  localStorage.setItem("queuePos", queuePos);
}
