/* MK Rank: optional fade-in on scroll. The site works fully without this file. */
(function () {
  if (!("IntersectionObserver" in window) || !window.matchMedia) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var sel = ".section .card, .steps li, .points li, .faq details, .section h2, .cta-band .wrap";
  var els = document.querySelectorAll(sel);
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      io.unobserve(el);
      el.classList.remove("reveal-pending");
      setTimeout(function () { el.classList.remove("reveal"); el.style.transitionDelay = ""; }, 900);
    });
  }, { rootMargin: "0px 0px -6% 0px" });
  var fold = window.innerHeight;
  for (var i = 0; i < els.length; i++) {
    var el = els[i];
    if (el.getBoundingClientRect().top < fold) continue; /* never hide what is already on screen */
    var idx = Array.prototype.indexOf.call(el.parentNode.children, el);
    el.style.transitionDelay = (idx % 4) * 70 + "ms";
    el.classList.add("reveal", "reveal-pending");
    io.observe(el);
  }
})();

/* Mobile menu toggle. Without JS the .js class is never set, so the links stay visible. */
(function () {
  var btn = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");
  if (!btn || !nav) return;
  function set(open) {
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    nav.classList.toggle("is-open", open);
  }
  btn.addEventListener("click", function () { set(btn.getAttribute("aria-expanded") !== "true"); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && btn.getAttribute("aria-expanded") === "true") { set(false); btn.focus(); }
  });
  document.addEventListener("click", function (e) {
    if (btn.getAttribute("aria-expanded") === "true" && !nav.contains(e.target) && !btn.contains(e.target)) set(false);
  });
  window.addEventListener("resize", function () { if (window.innerWidth >= 760) set(false); });
})();
