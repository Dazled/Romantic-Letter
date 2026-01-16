const envelope = document.getElementById("envelope");
let isOpen = false;

/* CHANGE YOUR PASSWORD HERE */
const PASSWORD = "10-10-2021";

/* Ask password on click */
envelope.addEventListener("click", () => {
  if (!isOpen) {
    const input = prompt("Enter our anniversary date (dd-mm-yyyy) 💌");

    if (input === null) return;

    if (input === PASSWORD) {
      isOpen = true;
      envelope.classList.add("open");
      startHearts();
    } else {
      shakeEnvelope();
      alert("Wrong password 💔");
    }
  } else {
    isOpen = false;
    envelope.classList.remove("open");
  }
});

/* Floating hearts */
function startHearts() {
  for (let i = 0; i < 12; i++) {
    setTimeout(createHeart, i * 300);
  }
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("floating-heart");
  heart.innerHTML = "❤";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 16 + Math.random() * 24 + "px";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

/* Shake animation on wrong password */
function shakeEnvelope() {
  envelope.classList.add("shake");
  setTimeout(() => envelope.classList.remove("shake"), 500);
}
