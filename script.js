const newConfirmed = document.getElementById("newConfirmed");
const newDeaths = document.getElementById("newDeaths");
const newRecovered = document.getElementById("newRecovered");
const totalConfirmed = document.getElementById("totalConfirmed");
const totalDeaths = document.getElementById("totalDeaths");
const totalRecovered = document.getElementById("totalRecovered");
const tableBody = document.getElementById("tableBody");

// fech data from covid-19 api

const fetchData = () => {
  fetch("https://api.covid19api.com/summary")
    .then((res) => res.json())
    .then((data) => appendData(data));
};

fetchData();

// 
const appendData = (data) => {
  newConfirmed.innerText = data.Global.NewConfirmed;
  newDeaths.innerText = data.Global.NewDeaths;
  newRecovered.innerText = data.Global.NewRecovered;
  totalConfirmed.innerText = data.Global.TotalConfirmed;
  totalDeaths.innerText = data.Global.TotalDeaths;
  totalRecovered.innerText = data.Global.TotalRecovered;
  data.Countries.forEach((country) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td class="px-6 py-4">${country.Country}</td>
        <td class="px-6 py-4">${country.TotalConfirmed}</td>
        <td class="px-6 py-4">${country.TotalDeaths}</td>
        <td class="px-6 py-4">${country.TotalRecovered}</td>
    `;
    tableBody.appendChild(tr);
  });
};