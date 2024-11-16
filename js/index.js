import { usedCars } from "./usedCars.js";

const results = document.getElementById("result");
const form = document.getElementById("search-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  applyFilters();
});

function applyFilters() {
  const minYear = parseInt(document.getElementById("min-year").value) || 0;
  const maxYear =
    parseInt(document.getElementById("max-year").value) || Infinity;

  const makes = [];
  document.querySelectorAll("#make input:checked").forEach((input) => {
    makes.push(input.id);
  });

  const maxMileage =
    parseInt(document.getElementById("max-mileage").value) || Infinity;

  const minPrice = parseInt(document.getElementById("min-price").value) || 0;
  const maxPrice =
    parseInt(document.getElementById("max-price").value) || Infinity;

  const colors = [];
  document.querySelectorAll("#color input:checked").forEach((input) => {
    colors.push(input.id);
  });

  // Filter cars based on conditions
  const filteredCars = usedCars.filter((car) => {
    return (
      car.year >= minYear &&
      car.year <= maxYear &&
      (makes.length === 0 || makes.includes(car.make)) &&
      car.mileage <= maxMileage &&
      car.price >= minPrice &&
      car.price <= maxPrice &&
      (colors.length === 0 || colors.includes(car.color))
    );
  });

  displayCars(filteredCars);
}

function displayCars(cars) {
  results.innerHTML = ""; // Clear previous results

  if (cars.length === 0) {
    results.innerHTML = "<p>No cars match the filter criteria.</p>";
    return;
  }

  cars.forEach((car) => {
    const { year, make, model, mileage, price, color, gasMileage } = car;

    const carCard = document.createElement("div");
    carCard.classList.add("car-card");

    carCard.innerHTML = `
      <div class="card">
        <div class="card-header">
          <h3>${year} ${make} ${model}</h3>
        </div>
        <div class="car-info">
          <p>Mileage: ${mileage}mi</p>
          <p>Price: $${price}</p>
          <p>Color: ${color}</p>
          <p>Gas Mileage: ${gasMileage}</p>
        </div>
      </div>
    `;
    results.appendChild(carCard);
  });
}

// Display all cars initially
displayCars(usedCars);
