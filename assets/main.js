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

const inputMonthValue = parseInt(inputMonth.value);

const birthDay = new Date(
  `${inputYear.value}, ${inputMonth.value}, ${inputDay.value}`
);

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
    (inputMonthValue === 2 ||
      inputMonthValue === 4 ||
      inputMonthValue === 6 ||
      inputMonthValue === 9 ||
      inputMonthValue === 11) &&
    inputDay.value > 30
  ) {
    errorDay.textContent = "Must be a valid day";
    inputDay.style.borderColor = "var(--lightred)";
  }
};
const validateMonth = () => {
  if (inputMonthValue > 12) {
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

  //   Getting current age in seconds
  const ageInSeconds =
    Math.round(Date.now() / 1000) - birthDay.getTime() / 1000;

  // Calculating age in years / months / days
  const ageYear = Math.floor(ageInSeconds / 31536000);
  const ageMonth = Math.floor((ageInSeconds % 31536000) / 2628000);
  const ageDay = Math.floor(((ageInSeconds % 31536000) % 2628000) / 86400);

  //   const ageYear = currentYear - parseInt(inputYear.value);
  //   const ageMonth = 12 - inputMonthValue;

  //   let ageDay = 31 - inputDay.value;
  //   if (
  //     inputMonthValue === 4 ||
  //     inputMonthValue === 6 ||
  //     inputMonthValue === 9 ||
  //     inputMonthValue === 11
  //   ) {
  //     ageDay = 30 - inputDay.value;
  //   } else if (inputMonthValue === 2 && inputYear % 2 === 0) {
  //     ageDay = 29 - inputDay.value;
  //   } else if (inputMonthValue === 2 && inputYear % 2 != 0) {
  //     ageDay = 28 - inputDay.value;
  //   }

  console.log(ageYear, ageMonth, ageDay);
});
