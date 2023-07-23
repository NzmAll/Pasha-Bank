export function posTerminalModal() {
  const modalButtons = document.querySelectorAll(
    "#subscription .subscription-product button"
  );
  console.log(modalButtons);

  let modal = document.getElementById("simpleModal");
  let closeBtn = document.getElementsByClassName("closeBtn")[0];

  modalButtons.forEach((modalButton) => {
    modalButton.addEventListener("click", function () {
      let modalButtonId = modalButton.id;
      console.log(modalButtonId);
      modal.style.display = "block";
      if (modalButtonId === "simple-pos-button") {
        modal.innerHTML = `<div class="modal-content" style="width: 600px; bottom: 220px;">
            <div class="modal-header" style="border:none!important;">
                <h5 class="modal-title">POS–terminal</h5>
                <span class="closeBtn">&times;</span>
            </div>

            <div class="modal-body">
                <table class="table">
                    <tbody>
                        <tr>
                            <td class="color-gray">
                                <i style="margin-right: 10px; font-size: 20px; color: #058D66;" class="fa-solid fa-check"></i>
                                Təmassız ödənişlərin qəbulu
                            </td>
                        </tr>
                        <tr>
                            <td class="color-gray">
                                <i style="margin-right: 10px; font-size: 20px; color: #058D66;" class="fa-solid fa-check"></i>
                                Rahat və sürətli əməliyyat sistemi
                            </td>
                        </tr>
                        <tr>
                            <td class="color-gray">
                                <i style="margin-right: 10px; font-size: 20px; color: #058D66;" class="fa-solid fa-check"></i>
                                4G və WiFi dəstəyi
                            </td>
                        </tr>
                        <tr>
                            <td class="color-gray">
                                <i style="margin-right: 10px; font-size: 20px; color: #058D66;" class="fa-solid fa-check"></i>
                                5.5 sensorlu ekran
                            </td>
                        </tr>
                        <tr>
                            <td class="color-gray">
                                <i style="margin-right: 10px; font-size: 20px; color: #058D66;" class="fa-solid fa-check"></i>
                                Uzun ömürlü enerji saxlama qabiliyyəti
                            </td>
                        </tr>
                        <tr>
                            <td class="color-gray">
                                <i style="margin-right: 10px; font-size: 20px; color: #058D66;" class="fa-solid fa-check"></i>
                                3G şəbəkə dəstəyi
                            </td>
                        </tr>                                                                                                      
                    </tbody>
                </table>
            </div>

            <div class="modal-footer" style="border:none!important;">
                <a style="background-color: #058d66; color: white;" class="btn d-inline-block text-center"
                    href="#" target="_blank">
                    Sifariş et
                </a>
            </div>
        </div>`;
      } else if (modalButtonId === "department-pos-button") {
        modal.innerHTML = `<div class="modal-content" style="width: 600px; bottom: 220px;">
            <div class="modal-header" style="border:none!important;">
                <h5 class="modal-title">POS–terminal</h5>
                <span class="closeBtn">&times;</span>
            </div>

            <div class="modal-body">
                <table class="table">
                    <tbody>
                        <tr>
                            <td class="color-gray">
                                <i style="margin-right: 10px; font-size: 20px; color: #058D66;" class="fa-solid fa-check"></i>
                                E-kassa imkanları
                            </td>
                        </tr>
                        <tr>
                            <td class="color-gray">
                                <i style="margin-right: 10px; font-size: 20px; color: #058D66;" class="fa-solid fa-check"></i>
                                POS–terminal funksiyası
                            </td>
                        </tr>
                        <tr>
                            <td class="color-gray">
                                <i style="margin-right: 10px; font-size: 20px; color: #058D66;" class="fa-solid fa-check"></i>
                                Dövlət vergi xidməti ilə inteqrasiya
                            </td>
                        </tr>
                        <tr>
                            <td class="color-gray">
                                <i style="margin-right: 10px; font-size: 20px; color: #058D66;" class="fa-solid fa-check"></i>
                                Anbar uçot sistemi funksiyası
                            </td>
                        </tr>
                        <tr>
                            <td class="color-gray">
                                <i style="margin-right: 10px; font-size: 20px; color: #058D66;" class="fa-solid fa-check"></i>
                                Fiskal çek printeri
                            </td>
                        </tr>
                        <tr>
                            <td class="color-gray">
                                <i style="margin-right: 10px; font-size: 20px; color: #058D66;" class="fa-solid fa-check"></i>
                                QR kodla çeklərin çapı
                            </td>
                        </tr>
                        <tr>
                            <td class="color-gray">
                                <i style="margin-right: 10px; font-size: 20px; color: #058D66;" class="fa-solid fa-check"></i>
                                Təmassız ödənişlərin qəbulu
                            </td>
                        </tr>
                        <tr>
                            <td class="color-gray">
                                <i style="margin-right: 10px; font-size: 20px; color: #058D66;" class="fa-solid fa-check"></i>
                                Rahat interfeys
                            </td>
                        </tr>
                        <tr>
                            <td class="color-gray">
                                <i style="margin-right: 10px; font-size: 20px; color: #058D66;" class="fa-solid fa-check"></i>
                                5.5 sensorlu ekran
                            </td>
                        </tr>
                        <tr>
                            <td class="color-gray">
                                <i style="margin-right: 10px; font-size: 20px; color: #058D66;" class="fa-solid fa-check"></i>
                                Android proqram təminatı
                            </td>
                        </tr>
                        <tr>
                            <td class="color-gray">
                                <i style="margin-right: 10px; font-size: 20px; color: #058D66;" class="fa-solid fa-check"></i>
                                Yüksək keyfiyyətli kamera
                            </td>
                        </tr>   
                        <tr>
                            <td class="color-gray">
                                <i style="margin-right: 10px; font-size: 20px; color: #058D66;" class="fa-solid fa-check"></i>
                                4G və WiFi dəstəyi
                            </td>
                        </tr>   
                        <tr>
                            <td class="color-gray">
                                <i style="margin-right: 10px; font-size: 20px; color: #058D66;" class="fa-solid fa-check"></i>
                                Kassa proqram təminatlı cihaz
                            </td>
                        </tr>                                                                                                 
                    </tbody>
                </table>
            </div>

            <div class="modal-footer" style="border:none!important;">
                <a style="background-color: #058d66; color: white;" class="btn d-inline-block text-center"
                    href="#" target="_blank">
                    Sifariş et
                </a>
            </div>
        </div>`;
      }
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });
}
