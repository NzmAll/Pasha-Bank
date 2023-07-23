export function subModal() {
  const modalButtons = document.querySelectorAll(
    "#subscription .subscription-product button"
  );
  const modal = document.getElementById("simpleModal");
  const closeBtn = document.getElementsByClassName("closeBtn")[0];

  modalButtons.forEach((modalButton) => {
    modalButton.addEventListener("click", function () {
      const modalButtonId = modalButton.id;
      console.log(modalButtonId);
      modal.style.display = "block";
      if (modalButtonId === "help-button") {
        modal.innerHTML = `
            <div class="modal-content" style="width: 800px; bottom: 220px;">
                <div class="modal-header" style="border:none!important;">
                    <h5 class="modal-title">"Dəstək" tarif paketi</h5>
                    <span class="closeBtn">&times;</span>
                </div>

                <div class="modal-body">
                    <table class="table">
                        <tbody>
                            <tr>
                                <td>Aylıq ödəniş</td>
                                <td>
                                    <h4 class="color-green-500">0 AZN</h4>
                                </td>
                            </tr>
                            <tr>
                                <td>Hesabın açılması</td>
                                <td>
                                    <span class="color-green-500">
                                        Pulsuz
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>Korporativ / Gömrük / Tacir kartı </td>
                                <td>32 AZN və ya 16 USD/EUR/GBP (Lokal 15 AZN)</td>
                            </tr>
                            <tr>
                                <td>Nağdlaşdırma</td>
                                <td>0.7%</td>
                            </tr>
                            <tr>
                                <td>Bankdaxili köçürmə</td>
                                <td>
                                    <div>
                                        <span>Onlayn Bankdan pulsuz</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Milli valyutada ölkə daxili köçürmələr (təcili icra olunma)</td>
                                <td>0.21% (min. 3 AZN – maks. 300 AZN)</td>
                            </tr>
                            <tr>
                                <td>Milli valyutada ölkə daxili köçürmələr (adi icra olunma)</td>
                                <td>
                                    <div class="margin-bottom-1">
                                        0.18% (min. 2AZN- maks. 200 AZN)
                                    </div>
                                    <div>
                                        Bankın Biznes Mərkəzlərində – 0.15%
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Xarici valyutada ödənişlər </td>
                                <td>
                                    <div>
                                        <span>
                                            0.35% (min. 35 USD/EUR – maks. 400 USD/EUR)
                                        </span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Valyuta mübadiləsi</td>
                                <td>
                                    <span>
                                        0.35%–dək (fərdi qaydada baxıla bilər)
                                        <br />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td class="">
                                    POS-terminal
                                </td>
                                <td>
                                    <div class="margin-bottom-1">
                                        2.2% – Xarici bankların kartları,
                                    </div>
                                    <div>
                                        2% – Yerli bankların kartları
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Elektron ticarət / Linklə ödəniş</td>
                                <td>
                                    <div class="margin-bottom-1">
                                        2% – Xarici bankların kartları,
                                    </div>
                                    <div>
                                        2% – Yerli bankların kartları
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="modal-footer" style="border:none!important;">
                    <a style="background-color: #058d66; color: white;" class="btn d-inline-block text-center"
                        href="#" target="_blank">
                        Hesab aç
                    </a>
                </div>
            </div>`;
      } else if (modalButtonId === "rise-button") {
        modal.innerHTML = `<div class="modal-content" style="width: 800px; bottom: 220px;">
            <div class="modal-header" style="border:none!important;">
                <h5 class="modal-title">Biznesinizi inkişaf etdirmək istəyirsiniz?</h5>
                <span class="closeBtn">&times;</span>
            </div>

            <div class="modal-body">
                <table class="table">
                    <tbody>
                        <tr>
                            <td>Aylıq ödəniş</td>
                            <td>
                                <h4 class="color-green-500">40 AZN</h4>
                            </td>
                        </tr>
                        <tr>
                            <td>Hesabın açılması</td>
                            <td>
                                <span class="color-green-500">
                                    32 AZN və ya 16 USD/EUR/GBP
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>Korporativ / Gömrük / Tacir kartı </td>
                            <td>Pulsuz</td>
                        </tr>
                        <tr>
                            <td>Nağdlaşdırma</td>
                            <td>Korporativ kartdan – 1 000. AZN (ekv.) pulsuz.
                                Limitdən yuxarı - 0.3%</td>
                        </tr>
                        <tr>
                            <td>Bankdaxili köçürmə</td>
                            <td>
                                <div>
                                    <span>Onlayn Bankdan — pulsuz</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Milli valyutada ölkə daxili köçürmələr (təcili icra olunma)</td>
                            <td>0.15% (min. 2.3 AZN - maks. 250 AZN)</td>
                        </tr>
                        <tr>
                            <td>Milli valyutada ölkə daxili köçürmələr (adi icra olunma)</td>
                            <td>
                                <div class="margin-bottom-1">
                                    Toplam 15 000. AZN-dək 5 pulsuz köçürmə.
                                </div>
                                <div>
                                    Limitdən yuxarı 0.12% (min. 1.3 AZN - maks. 150 AZN)
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Xarici valyutada ödənişlər </td>
                            <td>
                                <div>
                                    <span>
                                        0.28% (min. 35 USD/EUR - maks. 400 USD/EUR)
                                    </span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Valyuta mübadiləsi</td>
                            <td>
                                <span>
                                    0.2%
                                    <br />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td class="">
                                POS-terminal
                            </td>
                            <td>
                                <div class="margin-bottom-1">
                                    2.2% - Xarici bankların kartları,
                                </div>
                                <div>
                                    2% – Yerli bankların kartları
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Elektron ticarət / Linklə ödəniş</td>
                            <td>
                                <div class="margin-bottom-1">
                                    1.9% – Xarici bankların kartları,
                                </div>
                                <div>
                                    1.6% – Yerli bankların kartları
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="modal-footer" style="border:none!important;">
                <a style="background-color: #058d66; color: white;" class="btn d-inline-block text-center"
                    href="#" target="_blank">
                    Hesab aç
                </a>
            </div>
        </div>`;
      } else if (modalButtonId === "shine-button") {
        modal.innerHTML = `<div class="modal-content" style="width: 800px; bottom: 220px;">
            <div class="modal-header" style="border:none!important;">
                <h5 class="modal-title">"Dəstək" tarif paketi</h5>
                <span class="closeBtn">&times;</span>
            </div>

            <div class="modal-body">
                <table class="table">
                    <tbody>
                        <tr>
                            <td>Aylıq ödəniş</td>
                            <td>
                                <h4 class="color-green-500">110 AZN</h4>
                            </td>
                        </tr>
                        <tr>
                            <td>Hesabın açılması</td>
                            <td>
                                <span class="color-green-500">
                                    Pulsuz
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>Korporativ / Gömrük / Tacir kartı </td>
                            <td>32 AZN və ya 16 USD/EUR/GBP</td>
                        </tr>
                        <tr>
                            <td>Nağdlaşdırma</td>
                            <td>0.5%</td>
                        </tr>
                        <tr>
                            <td>Bankdaxili köçürmə</td>
                            <td>
                                <div>
                                    <span>Onlayn Bankdan pulsuz</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Milli valyutada ölkə daxili köçürmələr (təcili icra olunma)</td>
                            <td>0.14% (min. 2 AZN - maks. 225 AZN)</td>
                        </tr>
                        <tr>
                            <td>Milli valyutada ölkə daxili köçürmələr (adi icra olunma)</td>
                            <td>
                                <div class="margin-bottom-1">
                                    Toplam 30 000. AZN-dək 10 pulsuz köçürmə.
                                </div>
                                <div>
                                    Limitdən yuxarı 0.11% (min. 1 AZN - maks. 125 AZN)
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Xarici valyutada ödənişlər </td>
                            <td>
                                <div>
                                    <span>
                                        Toplam 10 000. USD-dək (ekv.) 1 pulsuz ödəniş.
                                    </span>
                                </div>

                                <div>
                                    <span>
                                        Limitdən yuxarı 0.25% (min. 30 USD/EUR - maks. 350 USD/EUR)
                                    </span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Valyuta mübadiləsi</td>
                            <td>
                                <span>
                                    Pulsuz
                                    <br />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td class="">
                                POS-terminal
                            </td>
                            <td>
                                <div class="margin-bottom-1">
                                    2.2% - Xarici bankların kartları,
                                </div>
                                <div>
                                    2% – Yerli bankların kartları
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Elektron ticarət / Linklə ödəniş</td>
                            <td>
                                <div class="margin-bottom-1">
                                    1.9% – Xarici bankların kartları,
                                </div>
                                <div>
                                    1.7% – Yerli bankların kartları
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="modal-footer" style="border:none!important;">
                <a style="background-color: #058d66; color: white;" class="btn d-inline-block text-center"
                    href="#" target="_blank">
                    Hesab aç
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
