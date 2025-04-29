// from html file covid-19 id
const tableBody = document.getElementById("covid19");

const apiUrl = "https://api.rootnet.in/covid19-in/stats/latest";

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const regionalData = data.data.regional;
    regionalData.forEach((stateData, index) => {
    const totalCases = stateData.confirmedCasesIndian + stateData.confirmedCasesForeign;
    const row = document.createElement("tr");

     

row.innerHTML = `
<td>${index + 1}</td> 

<td>${stateData.loc}</td> 

<td>${stateData.confirmedCasesIndian}</td>

<td>${stateData.confirmedCasesForeign}</td> 

<td>${stateData.discharged}</td> 

<td>${stateData.deaths}</td>

<td>${totalCases}</td>
`;
      tableBody.appendChild(row);
    });
  });