for (let i = 1; i <= 100; i++) {
  let box = document.createElement("div");
  box.classList.add("textBox");
  box.innerHTML = "I <span>❤</span> Code";
  document.querySelector(".text").appendChild(box);
}

document.body.addEventListener("mousemove", (e) => {
  gsap.to(".textBox", {
    x: e.clientX,
    y: e.clientY,
    stagger: -0.01,
    rotate: (i, target) => {
      return (i + 1) * 0.1;
    },
  });
});
