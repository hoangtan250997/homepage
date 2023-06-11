//   Euro Rate
function getExchangeRate() {
  fetch(
    "https://openexchangerates.org/api/latest.json?app_id=9c048b0aef0b435b9071e3ed2ea5e3a7"
  )
    .then((response) => response.json())
    .then((data) => {
      const EuroRate = data.rates.EUR / data.rates.USD;
      const EuroRateElement = document.getElementById("Euro");
      EuroRateElement.textContent = EuroRate.toFixed(2);

      const ChinaRate = data.rates.CNY / data.rates.USD;
      const ChinaRateElement = document.getElementById("China");
      ChinaRateElement.textContent = ChinaRate.toFixed(2);

      const JapanRate = data.rates.JPY / data.rates.USD;
      const JapanRateElement = document.getElementById("Japan");
      JapanRateElement.textContent = JapanRate.toFixed(2);

      const UKRate = data.rates.GBP / data.rates.USD;
      const UKRateElement = document.getElementById("UK");
      UKRateElement.textContent = UKRate.toFixed(2);

      const VietNamRate = data.rates.VND / data.rates.USD;
      const VietNamRateElement = document.getElementById("VietNam");
      VietNamRateElement.textContent = VietNamRate.toFixed(2);
    })
    .catch((error) => {
      console.error("Lỗi khi gọi API:", error);
    });
}

document.addEventListener("DOMContentLoaded", getExchangeRate);
