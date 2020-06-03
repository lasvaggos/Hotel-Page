// Counter
const counters = document.querySelectorAll(".counter");
const speed = 500;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const inc = target / speed;

    // Check if target is reached
    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});

// Hamburger Menu
const burger = document.querySelector(".burger-menu");
const ul = document.querySelector(".bottom-header-links ul");

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});
