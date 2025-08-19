
      document.addEventListener("DOMContentLoaded", () => {
        const btn = document.querySelector("#goCalculPrice");
        const resultDiv = document.getElementById("result");

        btn.addEventListener("click", (e) => {
          e.preventDefault();

          const size = parseFloat(document.querySelector("#size").value);

          const frequency = document.querySelector(
            'input[name="frequency"]:checked'
          ).value;

          const windowsOption = document.querySelector(
            'input[name="windowsOption"]:checked'
          ).value;

          if (isNaN(size) || size <= 0) {
            resultDiv.style.display = "block";
            resultDiv.textContent =
              "Veuillez entrer une surface valide (un nombre supérieur à 0).";
            resultDiv.style.backgroundColor = "#d9534f";
            return;
          }

          const priceHT = calculPriceHT(size, frequency, windowsOption);
          const tva = priceHT * 0.2;
          const priceTTC = priceHT + tva;

          resultDiv.style.display = "block";
          resultDiv.style.backgroundColor = "#00a8e8";
          resultDiv.textContent = `Le prix estimé par mois.`;
          resultDiv.innerHTML += `<br>Le prix HT : ${priceHT.toFixed(2)} €`;
          resultDiv.innerHTML += `<br>La TVA : ${tva.toFixed(2)} €`;
          resultDiv.innerHTML += `<br>Le prix TTC: ${priceTTC.toFixed(2)} €`;
        });

        function calculPriceHT(size, frequency, windowsOption) {
          let priceHT = frequency * size * 15;

          if (windowsOption === "yes") {
            priceHT += priceHT * 0.1;
          }

          return priceHT;
        }
      });
    

