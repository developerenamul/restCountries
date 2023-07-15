const loadApi = () => {
  fetch("https:restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((countriesList) => displayCountries(countriesList));
};

const displayCountries = (countries) => {
  const countriesContainer = document.getElementById("countriesContainer");
  //   console.log(countries);
  countries.forEach((country) => {
    const div = document.createElement("div");
    div.classList.add("country");

    div.innerHTML = `
        <p>Name : ${country.name.common}</p>
        <p>Area : ${country.area}</p>
        <button onclick="countryDetails('${country.name.common}')">Details</button>
    `;
    countriesContainer.appendChild(div);
  });
};

const countryDetails = (name) => {
  fetch(`https:restcountries.com/v3.1/name/${name}`)
    .then((res) => res.json())
    .then((country) => displayDetails(country[0]));
};

const displayDetails = (country) => {
  const div = document.getElementById("countryDetails");
  div.innerHTML = "";

  //   create element

  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${country.flags.png}" alt=""/>
    <p>independent status :${
      country.independent ? "independent" : "not independent"
    }</p>
    <p>population :${country.population}</p>
    <p>capital :${country.capital ? country.capital[0] : "no capital"}</p>
`;
  div.appendChild(card);
  //   console.log(country);
};

loadApi();
