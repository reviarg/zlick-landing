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

function openDemoModal() {
  if (!modal) return;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  const topic = modal.querySelector("select[name='topic']");
  if (topic) topic.value = "Demo request";
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

const revealItems = document.querySelectorAll("[data-reveal]");
if ("IntersectionObserver" in window && revealItems.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
