const btnSubmit = document.querySelector("button[type='submit']");

// ERROR <<>>>>>>>>>>
const errorDay = document.querySelector(".error_day");
const errorMonth = document.querySelector(".error_month");
const errorYear = document.querySelector(".error_year");

// INPUTS <>>>>>>>>
const inputDay = document.getElementById("day");
const inputMonth = document.getElementById("month");
const inputYear = document.getElementById("year");

const currentDate = new Date();

console.log(currentDate);

const validateDay = () => {
  if (inputDay.value > 31) {
    errorDay.textContent = "Must be a valid day";
    inputDay.style.borderColor = "var(--lightred)";
  }
  if (inputDay.value === "") {
    errorDay.textContent = "This field is required";
    inputDay.style.borderColor = "var(--lightred)";
  }
  if (
    (inputMonth.value === 2 ||
      inputMonth.value === 4 ||
      inputMonth.value === 6 ||
      inputMonth.value === 9 ||
      inputMonth.value === 11) &&
    inputDay.value > 30
  ) {
    errorDay.textContent = "Must be a valid day";
    inputDay.style.borderColor = "var(--lightred)";
  }
};
const validateMonth = () => {
  if (inputMonth.value > 12) {
    errorMonth.textContent = "Must be a valid month";
    inputMonth.style.borderColor = "var(--lightred)";
  }
  if (inputMonth.value === "") {
    errorMonth.textContent = "This field is required";
    inputMonth.style.borderColor = "var(--lightred)";
  }
};
const validateYear = () => {
  if (inputYear.value > currentDate.getFullYear()) {
    errorYear.textContent = "Must be in the past";
    inputYear.style.borderColor = "var(--lightred)";
  }
  if (inputYear.value === "") {
    errorYear.textContent = "This field is required";
    inputYear.style.borderColor = "var(--lightred)";
  }
};

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  validateDay();
  validateMonth();
  validateYear();
});
