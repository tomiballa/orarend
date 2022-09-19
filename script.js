const $cards = document.querySelectorAll('.b');
let bounds, selcard;

function rotateToMouse(e) {
  const leftX = e.clientX - bounds.left;
  const topY = e.clientY - bounds.top;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2
  }

  let glow = selcard.querySelector('.glow');
  if (glow != null)
    glow.style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x + bounds.width / 2}px
        ${center.y + bounds.height / 2}px,
        #3d6ab615, #0000000f
      )
    `;
}

for (let i = 0; i < $cards.length; i++) {
  if ($cards[i].classList.contains("ignore-hover")) {
    continue;
  }

  $cards[i].addEventListener('mouseenter', () => {
    bounds = $cards[i].getBoundingClientRect();
    selcard = $cards[i];
    document.addEventListener('mousemove', rotateToMouse);
  });

  $cards[i].addEventListener('mouseleave', () => {
    document.removeEventListener('mousemove', rotateToMouse);

    let glow = $cards[i].querySelector('.glow');
    if (glow != null)
      glow.style.backgroundImage = `
        radial-gradient(circle at 50% 50%, #3d6ab805, #00000005)
      `;
  });
}