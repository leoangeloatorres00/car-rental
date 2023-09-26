let badges = document.querySelectorAll(".badge");
let carItems = document.querySelectorAll(".car-item");
let navIcons = document.querySelectorAll("#nav-icon3");
let navIcon = document.getElementById("#nav-icon3");
let backToSelection = document.getElementById("back-to-selection");
let backToDetails = document.querySelectorAll(".back-to-details");
let carSelectionContainer = document.getElementById("car-selection-container");
let carDetailContainer = document.getElementById("car-detail-container");

let carBrand = document.getElementById("car-brand");
let carName = document.getElementById("car-name");
let carTransmission = document.getElementById("car-transmission");
let carFuel = document.getElementById("car-fuel");
let carCapacity = document.getElementById("car-capacity");
let carColor = document.getElementById("car-color");
let carImage = document.getElementById("car-image");

let navLinks = document.querySelectorAll(".nav-link");

let carDetails = [
  {
    name: "Vios",
    brand: "Toyota",
    transmission: "CVT A/T",
    fuel: "DSL (42)",
    capacity: "5",
    color: "White",
  },
  {
    name: "Xpander",
    brand: "Mitsubishi",
    transmission: "M/T",
    fuel: "GAS (45)",
    capacity: "7",
    color: "Black",
  },
  {
    name: "Emgrand",
    brand: "Geely",
    transmission: "M/T",
    fuel: "GAS (50)",
    capacity: "5",
    color: "Blue",
  },
  {
    name: "Grandia",
    brand: "Toyota",
    transmission: "CVT A/T",
    fuel: "DSL (70)",
    capacity: "13",
    color: "White",
  },
  {
    name: "Accent",
    brand: "Hyundai",
    transmission: "A/T",
    fuel: "GAS (11)",
    capacity: "5",
    color: "Gray",
  },
  {
    name: "ZS",
    brand: "MG",
    transmission: "A/T",
    fuel: "DSL (48)",
    capacity: "5",
    color: "White",
  },
  {
    name: "Montero",
    brand: "Mitsubishi",
    transmission: "A/T",
    fuel: "DSL (68)",
    capacity: "7",
    color: "Silver",
  },
  {
    name: "Picanto",
    brand: "Kia",
    transmission: "M/T",
    fuel: "GAS (35)",
    capacity: "5",
    color: "White",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  scrollFunction();
  navLinksActivation();
});

window.onscroll = function () {
  scrollFunction();
  navLinksActivation();
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.backgroundColor =
      "rgba(73, 97, 139, 0.95)";
  } else {
    if (navIcons.classList.contains("open")) {
      document.getElementById("header").style.backgroundColor =
        "rgba(73, 97, 139, 0.95)";
    } else {
      document.getElementById("header").style.backgroundColor = "";
    }
  }
}

navIcons.forEach((navIcon) => {
  navIcon.addEventListener("click", function () {
    navIcon.classList.toggle("open");
    if (navIcon.classList.contains("open")) {
      document.getElementById("header").style.backgroundColor =
        "rgba(73, 97, 139, 0.95)";
    } else {
      document.getElementById("header").style.backgroundColor = "";
    }
  });
});

badges.forEach((badge) => {
  badge.addEventListener("click", function handleClick(event) {
    removeBadgeActivation();
    badge.classList.add("active");

    const badgeText = badge.innerText.toLowerCase();
    hideCarItems(badgeText);
  });
});

backToSelection.addEventListener("click", function () {
  carDetailContainer.classList.add("d-none");
  carSelectionContainer.classList.remove("d-none");
});

backToDetails.forEach((backToDetail, index) => {
  backToDetail.addEventListener("click", function () {
    carDetailContainer.classList.remove("d-none");
    carSelectionContainer.classList.add("d-none");

    carBrand.innerText = carDetails[index].brand;
    carName.innerText = carDetails[index].name;
    carTransmission.innerText = carDetails[index].transmission;
    carFuel.innerText = carDetails[index].fuel;
    carCapacity.innerText = carDetails[index].capacity;
    carColor.innerText = carDetails[index].color;

    const extension = carDetails[index].name == "Accent" ? ".png" : ".jpg";
    const file = carDetails[index].name;
    carImage.src = "./assets/images/unit/" + file + extension;
  });
});

function navLinksActivation() {
  let sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    if (isElementInViewPort(section)) {
      let id = section.id;
      removeNavLinksActivation();
      document.querySelector(`[href="#${id}"]`).classList.add("active");
      return;
    }
  });
}

function removeNavLinksActivation() {
  navLinks.forEach((navLink) => {
    navLink.classList.remove("active");
  });
}

function removeBadgeActivation() {
  badges.forEach((badge) => {
    badge.classList.remove("active");
  });
}

function hideCarItems(item) {
  carItems.forEach((carItem) => {
    carItem.classList.remove("d-none");
    if (!carItem.classList.contains(item) && item != "all") {
      carItem.classList.add("d-none");
    }
  });
}

function isElementInViewPort(element) {
  let rect = element.getBoundingClientRect();
  return rect.top < 100;
}

/**
 * Animation on scroll
 */
window.addEventListener("load", () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
});
