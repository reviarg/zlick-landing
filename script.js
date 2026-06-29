const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelector("[data-nav-links]");
const modal = document.querySelector("[data-demo-modal]");
const demoButtons = document.querySelectorAll("[data-open-demo]");
const modalClose = document.querySelector("[data-close-demo]");
const demoForm = document.querySelector("[data-demo-form]");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    document.body.classList.toggle("nav-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  });
}

function openDemoModal(event) {
  if (!modal) return;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  const trigger = event && event.currentTarget;
  const wantTopic = (trigger && trigger.dataset.topic) || "Demo request";
  const topic = modal.querySelector("select[name='topic']");
  if (topic) {
    const exists = [...topic.options].some((o) => o.value === wantTopic || o.textContent === wantTopic);
    if (!exists) {
      const opt = document.createElement("option");
      opt.textContent = wantTopic;
      topic.appendChild(opt);
    }
    topic.value = wantTopic;
  }
  const msg = modal.querySelector("textarea[name='message']");
  if (msg && trigger && trigger.dataset.message && !msg.value.trim()) {
    msg.value = trigger.dataset.message;
  }
  const email = modal.querySelector("input[type='email']");
  window.setTimeout(() => email?.focus(), 80);
}

function closeDemoModal() {
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

demoButtons.forEach((button) => {
  button.addEventListener("click", openDemoModal);
});

modalClose?.addEventListener("click", closeDemoModal);

modal?.addEventListener("click", (event) => {
  if (event.target === modal) closeDemoModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeDemoModal();
});

if (demoForm) {
  demoForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const submit = demoForm.querySelector("button[type='submit']");
    const original = submit?.textContent || "Send";
    if (submit) submit.textContent = "Sending...";
    try {
      const response = await fetch(demoForm.action, {
        method: "POST",
        body: new FormData(demoForm),
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        demoForm.innerHTML = "<p class='hero-note'>Thank you. We will reach out shortly.</p>";
      } else if (submit) {
        submit.textContent = original;
      }
    } catch {
      if (submit) submit.textContent = original;
    }
  });
}

// Hero demo video: poster + custom play button
const heroFrame = document.querySelector("[data-video-frame]");
if (heroFrame) {
  const heroVideo = heroFrame.querySelector("[data-hero-video]");
  const playBtn = heroFrame.querySelector("[data-play-video]");
  playBtn?.addEventListener("click", () => {
    heroFrame.classList.add("is-playing");
    if (heroVideo) {
      heroVideo.controls = true;
      heroVideo.play().catch(() => {});
    }
  });
}

// Lightbox: enlarge a fanned image so it's readable
const lightbox = document.querySelector("[data-lightbox]");
const lightboxImg = document.querySelector("[data-lightbox-img]");
function openLightbox(src, alt) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxImg.alt = alt || "";
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}
function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
}
if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.hasAttribute("data-lightbox-close")) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
}

// Feature image fans: click a back card to bring it forward; click the front one to enlarge it
document.querySelectorAll("[data-card-fan]").forEach((fan) => {
  const cards = Array.from(fan.querySelectorAll("[data-fan-card]"));
  if (!cards.length) return;
  let front = 0;
  const render = () => {
    cards.forEach((card, i) => {
      const rel = (i - front + cards.length) % cards.length;
      card.classList.remove("is-front", "is-back-1", "is-back-2");
      card.classList.add(rel === 0 ? "is-front" : rel === 1 ? "is-back-1" : "is-back-2");
      card.style.zIndex = String(cards.length - rel);
      card.setAttribute("aria-pressed", rel === 0 ? "true" : "false");
    });
  };
  cards.forEach((card, i) => {
    card.addEventListener("click", () => {
      if (i === front) {
        const img = card.querySelector("img");
        if (img) openLightbox(img.currentSrc || img.src, img.alt);
      } else {
        front = i;
        render();
      }
    });
  });
  // "Click to enlarge" hint under the fan
  const host = fan.parentElement || fan;
  if (!host.querySelector(".fan-hint")) {
    const hint = document.createElement("p");
    hint.className = "fan-hint";
    hint.textContent = "Click to enlarge";
    host.appendChild(hint);
  }
  render();
});

// Use-case carousel (forward-looping)
const carousel = document.querySelector("[data-carousel]");
if (carousel) {
  const track = carousel.querySelector("[data-carousel-track]");
  const panes = Array.from(track.querySelectorAll(".carousel-pane"));
  const dotsWrap = carousel.querySelector("[data-carousel-dots]");
  const prevBtn = carousel.querySelector("[data-carousel-prev]");
  const nextBtn = carousel.querySelector("[data-carousel-next]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const INTERVAL = 6000;
  const cloneIndex = panes.length;
  let current = 0;
  let timer = null;
  let scrollRAF = null;
  let snapping = false;

  // Clone the first pane and append it so the loop can move forward past the last pane.
  const clone = panes[0].cloneNode(true);
  clone.setAttribute("aria-hidden", "true");
  track.appendChild(clone);
  const allPanes = [...panes, clone];

  const dots = panes.map((_, i) => {
    const dot = document.createElement("button");
    dot.className = "carousel-dot";
    dot.type = "button";
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", `Go to use case ${i + 1}`);
    dot.addEventListener("click", () => {
      goTo(i);
      restart();
    });
    dotsWrap.appendChild(dot);
    return dot;
  });

  function updatePadding() {
    const pad = Math.max(0, (track.clientWidth - panes[0].clientWidth) / 2);
    track.style.paddingLeft = `${pad}px`;
    track.style.paddingRight = `${pad}px`;
  }

  function centerOffset(pane) {
    return pane.offsetLeft - (track.clientWidth - pane.clientWidth) / 2;
  }

  function setActive(index) {
    dots.forEach((dot, i) => dot.classList.toggle("is-active", i === index % panes.length));
  }

  function scrollToPane(idx, instant) {
    track.scrollTo({
      left: centerOffset(allPanes[idx]),
      behavior: instant || reduceMotion ? "auto" : "smooth",
    });
  }

  // Run cb once the smooth scroll settles (scrollend), with a timeout fallback.
  function afterScrollSettle(cb) {
    let done = false;
    const fin = () => {
      if (done) return;
      done = true;
      track.removeEventListener("scrollend", fin);
      cb();
    };
    track.addEventListener("scrollend", fin);
    window.setTimeout(fin, 800);
  }

  // Only the visible pane's clip loads + plays; the rest stay paused (lazy).
  function setActiveVideo(idx) {
    allPanes.forEach((pane, i) => {
      const v = pane.querySelector(".carousel-video");
      if (!v) return;
      if (i === idx) {
        if (v.preload !== "auto") v.preload = "auto";
        const p = v.play();
        if (p && p.catch) p.catch(() => {});
      } else if (!v.paused) {
        v.pause();
      }
    });
  }

  function goTo(index, instant) {
    let target = index;
    if (target < 0) target = panes.length - 1;
    current = target;
    setActive(target);
    setActiveVideo(target);
    scrollToPane(target, instant);
    if (target === cloneIndex) {
      // forward-loop: after the slide into the clone settles, jump to the real first pane
      snapping = true;
      afterScrollSettle(() => {
        track.scrollTo({ left: centerOffset(allPanes[0]), behavior: "auto" });
        current = 0;
        setActive(0);
        setActiveVideo(0);
        snapping = false;
      });
    }
  }

  const AUTO_ADVANCE = false; // panes change manually via arrows/dots only
  function start() {
    if (!AUTO_ADVANCE || reduceMotion || timer) return;
    timer = window.setInterval(() => goTo(current + 1), INTERVAL);
  }

  function stop() {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
  }

  function restart() {
    stop();
    start();
  }

  nextBtn?.addEventListener("click", () => {
    goTo(current + 1);
    restart();
  });
  prevBtn?.addEventListener("click", () => {
    goTo(current - 1);
    restart();
  });

  track.addEventListener("scroll", () => {
    if (scrollRAF || snapping) return;
    scrollRAF = window.requestAnimationFrame(() => {
      scrollRAF = null;
      const center = track.scrollLeft + track.clientWidth / 2;
      let nearest = 0;
      let min = Infinity;
      allPanes.forEach((pane, i) => {
        const distance = Math.abs(pane.offsetLeft + pane.clientWidth / 2 - center);
        if (distance < min) {
          min = distance;
          nearest = i;
        }
      });
      current = nearest;
      setActive(nearest);
      setActiveVideo(nearest);
    });
  });

  carousel.addEventListener("pointerenter", stop);
  carousel.addEventListener("pointerleave", start);
  track.addEventListener("pointerdown", stop);
  track.addEventListener("touchend", restart);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else start();
  });

  window.addEventListener("resize", () => {
    updatePadding();
    goTo(current % panes.length, true);
  });

  updatePadding();
  goTo(0, true);
  start();
}

// Typewriter: cycle a word/phrase in place (type it, hold, erase it, type the next)
(function () {
  const el = document.querySelector(".type-rotate");
  if (!el) return;
  const words = (el.dataset.typeWords || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  if (!words.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.textContent = words[0];
    return;
  }
  const TYPE = 85; // ms per typed char
  const ERASE = 55; // ms per erased char
  const HOLD = 2900; // pause on a full word before erasing
  const GAP = 350; // pause before typing the next word
  let wi = 0;
  let ci = 0;
  let deleting = false;
  function tick() {
    const word = words[wi];
    if (!deleting) {
      ci += 1;
      el.textContent = word.slice(0, ci);
      if (ci === word.length) {
        deleting = true;
        window.setTimeout(tick, HOLD);
      } else {
        window.setTimeout(tick, TYPE);
      }
    } else {
      ci -= 1;
      el.textContent = word.slice(0, ci);
      if (ci === 0) {
        deleting = false;
        wi = (wi + 1) % words.length;
        window.setTimeout(tick, GAP);
      } else {
        window.setTimeout(tick, ERASE);
      }
    }
  }
  el.textContent = "";
  window.setTimeout(tick, 600);
})();

const revealItems = document.querySelectorAll("[data-reveal]");
if ("IntersectionObserver" in window && revealItems.length) {
  document.documentElement.classList.add("reveal-ready");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
