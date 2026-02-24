const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

if (burger && mobileMenu) {
  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });
}

// active nav based on file
const path = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("[data-nav]").forEach(a => {
  if (a.getAttribute("href") === path) a.classList.add("active");
});

// WhatsApp form handler (contact page)
const waForm = document.getElementById("waForm");
if (waForm) {
  waForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(waForm);
    const name = (fd.get("name") || "").toString().trim();
    const phone = (fd.get("phone") || "").toString().trim();
    const msg = (fd.get("msg") || "").toString().trim();

    const text =
      `Hi, I want to join your gym.%0A` +
      `Name: ${encodeURIComponent(name)}%0A` +
      `Phone: ${encodeURIComponent(phone)}%0A` +
      `Message: ${encodeURIComponent(msg)}`;

    // CHANGE NUMBER:
    window.open(`https://wa.me/94700000000?text=${text}`, "_blank", "noopener");
    waForm.reset();
  });
}
