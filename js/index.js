import { usedCars } from "./usedCars.js";

const results = document.getElementById("result");
const form = document.getElementById("form");
form.addEventListener("submit", setSearch());

function setSearch() {
  let minYear = document.getElementById("min-year");
  let maxYear = document.getElementById("max-year");
  let Toyota = document.getElementById("Toyota");
  let Ford = document.getElementById("Ford");
  let minMileage = document.getElementById("min-mileage");
  let maxMileage = document.getElementById("max-mileage");
  let minPrice = document.getElementById("min-price");
  let maxPrice = document.getElementById("max-price");
  let silver = document.getElementById("Silver");
  let gold = document.getElementById("Gold");

  const userEntries = [
    minYear,
    maxYear,
    Toyota,
    Ford,
    minMileage,
    maxMileage,
    minPrice,
    maxPrice,
    silver,
    gold,
  ];

  displayCars(userEntries);
}

function displayCars(entries) {
  results.innerHTML = ""; // Clear previous cars

  usedCars.forEach((car) => {
    // Create and insert HTML elements to show car information

    const carCard = document.createElement("div");
    carCard.classList.add("car-card");

    const { year, make, model, mileage, price, color, gasMileage } = car;
    const carType = year + " " + make + " " + model;

    if (price < 20000 && price > 5000) {
      carCard.innerHTML = `
      <div class="column">
      <div class="card">
        <div class="card-content">
          <div class="card-header">
            <h3 style="font-weight: 600">${carType}</h3>
          </div>
          <div class="car-info">
            <p>Mileage: ${mileage}mi</p>
            <p>Price: $${price}</p>
            <p>Color: ${color}</p>
            <p>Mileage: ${gasMileage}</p>
          </div>
        </div>
      </div>
    </div>
    `;
      results.appendChild(carCard);
    } else {
      return null;
    }
  });
}

// Display all cars initially
displayCars();
