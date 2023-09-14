let data = 0;
let me = 0;

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const get = button.innerText;
    me = parseFloat(get);
    console.log(me);

    togglebutton(`.btn-${me}`);
  });
});

const submit = document.querySelector(".submit");
submit.addEventListener("click", () => {
  console.log(me);
  if (me === 0) {
    console.log(alert("please select a rating"));
  } else {
    document.querySelector(".container").innerHTML = `<div class="top-image">
  <img class="thank-you-img" src="images/illustration-thank-you.svg" />
</div>
<div class="selected-number">
  <p class="text-number">You selected ${me} out of 5</p>
</div>

<div class="thank-again">
  <p class="thank-you">Thank you!</p>
  <p class="thank-you-description">
    We appreciate you taking the time to give a rating. if you ever need
    more support, don't hesitate to get in touch!
  </p>
</div>`;
  }
});

function togglebutton(selector) {
  const buttonss = document.querySelector(selector);
  if (!buttonss.classList.contains("is-toggled")) {
    turnOffPreviousButton();

    buttonss.classList.add("is-toggled");
  } else {
    buttonss.classList.remove("is-toggled");
  }
}

function turnOffPreviousButton() {
  const previousButton = document.querySelector(".is-toggled");

  if (previousButton) {
    previousButton.classList.remove("is-toggled");
  }
}
