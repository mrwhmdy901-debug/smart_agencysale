// ===== Smart Agency - Main Script =====

// تحديث سنة الحقوق في الفوتر تلقائيًا
document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelectorAll("#year, #year2, #year3, #year4");
  year.forEach(y => y.textContent = new Date().getFullYear());
});

// ===== Scroll Reveal Animation =====
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll("[data-animate]");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach((el) => {
      const boxTop = el.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        el.classList.add("visible");
      }
    });
  };

  // أول تشغيل + عند التمرير
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

// ===== تأثير بسيط على الأزرار =====
document.querySelectorAll(".btn, button").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});
