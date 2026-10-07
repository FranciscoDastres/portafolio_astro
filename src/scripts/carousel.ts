import EmblaCarousel from "embla-carousel";
import { gsap } from "gsap";
const root = document.querySelector<HTMLElement>(".project-showcase")!;
const viewport = root.querySelector<HTMLElement>(".carousel-viewport")!;
const controls = root.querySelector<HTMLElement>(".carousel-controls")!;
const thumbs = Array.from(
  root.querySelectorAll<HTMLButtonElement>("[data-slide]"),
);
const panels = Array.from(root.querySelectorAll<HTMLElement>("[data-panel]"));
const slides = Array.from(
  root.querySelectorAll<HTMLElement>(".carousel-slide"),
);
const play = root.querySelector<HTMLButtonElement>(".carousel-play")!;
const announcement = root.querySelector<HTMLElement>(".carousel-announcement")!;
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
root.classList.add("carousel-enhanced");
controls.hidden = false;
const carousel = EmblaCarousel(viewport, {
  loop: true,
  duration: reduced.matches ? 0 : 30,
});
let playing = false,
  hovered = false,
  visible = false;
let timer: ReturnType<typeof setTimeout> | undefined;
function pausedMotion() {
  return reduced.matches || document.body.classList.contains("motion-paused");
}
function stop() {
  playing = false;
  schedule();
}
function schedule() {
  clearTimeout(timer);
  play.setAttribute("aria-pressed", String(playing));
  play.setAttribute(
    "aria-label",
    playing
      ? "Pausar cambio automático de proyectos"
      : "Activar cambio automático de proyectos",
  );
  play.textContent = playing ? "Ⅱ" : "▷";
  play.disabled = pausedMotion();
  if (
    playing &&
    !hovered &&
    visible &&
    !document.hidden &&
    !pausedMotion() &&
    !document.body.classList.contains("menu-is-open")
  )
    timer = setTimeout(() => carousel.scrollNext(), 6500);
}
function update(announce = false) {
  const index = carousel.selectedScrollSnap();
  thumbs.forEach((button, i) =>
    button.setAttribute("aria-current", String(i === index)),
  );
  slides.forEach((slide, i) =>
    slide.setAttribute("aria-hidden", String(i !== index)),
  );
  panels.forEach((panel, i) => (panel.hidden = i !== index));
  if (announce)
    announcement.textContent = slides[index].getAttribute("aria-label")!;
  if (!pausedMotion() && announce)
    gsap.fromTo(
      panels[index],
      { opacity: 0.2, y: 12 },
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: "power2.out",
        clearProps: "all",
        overwrite: true,
      },
    );
  schedule();
}
thumbs.forEach((button, i) =>
  button.addEventListener("click", () => {
    stop();
    carousel.scrollTo(i, pausedMotion());
  }),
);
root.querySelector(".slide-prev")?.addEventListener("click", () => {
  stop();
  carousel.scrollPrev(pausedMotion());
});
root.querySelector(".slide-next")?.addEventListener("click", () => {
  stop();
  carousel.scrollNext(pausedMotion());
});
play.addEventListener("click", () => {
  playing = !playing;
  schedule();
});
root.addEventListener("keydown", (event) => {
  if ((event.target as HTMLElement).closest("a")) return;
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
    stop();
    event.key === "ArrowLeft"
      ? carousel.scrollPrev(pausedMotion())
      : carousel.scrollNext(pausedMotion());
  }
});
root.addEventListener("pointerenter", () => {
  hovered = true;
  schedule();
});
root.addEventListener("pointerleave", () => {
  hovered = false;
  schedule();
});
root.addEventListener("focusin", (event) => {
  if (event.target !== play) stop();
});
carousel.on("select", () => update(!playing));
carousel.on("pointerDown", stop);
carousel.on("reInit", () => update());
new IntersectionObserver(
  ([entry]) => {
    visible = entry.isIntersecting;
    schedule();
  },
  { threshold: 0.15 },
).observe(root);
new MutationObserver(() => {
  if (pausedMotion()) playing = false;
  schedule();
}).observe(document.body, { attributes: true, attributeFilter: ["class"] });
document.addEventListener("visibilitychange", schedule);
reduced.addEventListener("change", () => {
  stop();
  carousel.reInit({ duration: reduced.matches ? 0 : 30 });
});
window.addEventListener("pagehide", () => clearTimeout(timer));
window.addEventListener("pageshow", schedule);
update();
