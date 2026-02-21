/* ===== Scroll-triggered fade-in animations ===== */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

/* ===== Sticky nav background on scroll ===== */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ===== Smooth scroll for anchor links ===== */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ===== Waitlist form placeholder handler ===== */
document.querySelectorAll('#waitlist-form').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('.waitlist-input');
    const email = input.value.trim();
    if (!email) return;

    form.style.display = 'none';
    const success = document.createElement('p');
    success.className = 'waitlist-success show';
    success.textContent = "You're on the list. We'll be in touch.";
    form.parentNode.insertBefore(success, form.nextSibling);
  });
});

/* ===== Pricing page: billing toggle ===== */
document.querySelectorAll('.toggle-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.toggle-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const billing = btn.dataset.billing;

    document.querySelectorAll('.price[data-monthly]').forEach((el) => {
      el.textContent = el.dataset[billing];
    });
    document.querySelectorAll('.period[data-monthly]').forEach((el) => {
      el.textContent = el.dataset[billing];
    });
  });
});

/* ===== Hero canvas animation — cinematic waveform / timeline ===== */
(function () {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height, dpr;
  const lines = [];
  const lineCount = 5;

  function resize() {
    dpr = window.devicePixelRatio || 1;
    width = canvas.parentElement.clientWidth;
    height = canvas.parentElement.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
  }

  function initLines() {
    lines.length = 0;
    for (let i = 0; i < lineCount; i++) {
      lines.push({
        y: height * (0.3 + (i / lineCount) * 0.4),
        amplitude: 20 + Math.random() * 30,
        frequency: 0.002 + Math.random() * 0.003,
        speed: 0.3 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
        opacity: 0.06 + Math.random() * 0.08,
      });
    }
  }

  function draw(time) {
    ctx.clearRect(0, 0, width, height);

    // Radial gradient vignette — backlit ambience
    const grd = ctx.createRadialGradient(
      width / 2, height / 2, height * 0.1,
      width / 2, height / 2, height * 0.85
    );
    grd.addColorStop(0, 'rgba(43, 125, 233, 0.09)');
    grd.addColorStop(0.4, 'rgba(120, 130, 200, 0.04)');
    grd.addColorStop(1, 'rgba(10, 12, 16, 0)');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, width, height);

    // Secondary warm backlight source (off-center)
    const grd2 = ctx.createRadialGradient(
      width * 0.65, height * 0.4, 0,
      width * 0.65, height * 0.4, height * 0.5
    );
    grd2.addColorStop(0, 'rgba(242, 138, 46, 0.04)');
    grd2.addColorStop(1, 'rgba(10, 12, 16, 0)');
    ctx.fillStyle = grd2;
    ctx.fillRect(0, 0, width, height);

    // Draw waveform lines
    lines.forEach((line) => {
      ctx.beginPath();
      ctx.strokeStyle = `rgba(242, 138, 46, ${line.opacity})`;
      ctx.lineWidth = 1.5;

      for (let x = 0; x <= width; x += 3) {
        const t = time * 0.001 * line.speed;
        const y =
          line.y +
          Math.sin(x * line.frequency + t + line.phase) * line.amplitude +
          Math.sin(x * line.frequency * 2.3 + t * 1.4) * line.amplitude * 0.3;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    });

    // Draw subtle timeline blocks
    const blockY = height * 0.65;
    const blockHeight = 4;
    const blockGap = 3;
    const baseTime = time * 0.0003;

    for (let i = 0; i < 60; i++) {
      const blockWidth = 8 + Math.sin(i * 0.8 + baseTime) * 5;
      const x = (i * (blockWidth + blockGap) + baseTime * 100) % (width + 200) - 100;
      const opacity = 0.04 + Math.sin(i * 1.2 + baseTime * 2) * 0.03;

      ctx.fillStyle = `rgba(43, 125, 233, ${opacity})`;
      ctx.fillRect(x, blockY, blockWidth, blockHeight);
      ctx.fillRect(x, blockY + blockHeight + 2, blockWidth * 0.6, blockHeight * 0.6);
    }

    requestAnimationFrame(draw);
  }

  resize();
  initLines();
  requestAnimationFrame(draw);

  window.addEventListener('resize', () => {
    resize();
    initLines();
  });
})();
