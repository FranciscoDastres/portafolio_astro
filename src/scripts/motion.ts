import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
let media = gsap.matchMedia();
const toggle = document.querySelector<HTMLButtonElement>("#motion-toggle");
if (toggle) toggle.hidden = false;
const systemMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let userPaused = false;
try {
  userPaused = localStorage.getItem("portfolio-motion-paused") === "true";
} catch {
  /* Storage is optional. */
}

function updateControl() {
  const paused = userPaused || systemMotion.matches;
  if (toggle) toggle.disabled = systemMotion.matches;
  document.body.classList.toggle("motion-paused", paused);
  toggle?.setAttribute("aria-pressed", String(paused));
  toggle?.setAttribute(
    "aria-label",
    systemMotion.matches
      ? "Movimiento reducido por la configuración del sistema"
      : paused
        ? "Activar animaciones"
        : "Pausar animaciones",
  );
  const label = toggle?.querySelector("span");
  if (label)
    label.textContent = systemMotion.matches
      ? "Movimiento reducido del sistema"
      : paused
        ? "Animaciones pausadas"
        : "Animaciones activas";
  toggle
    ?.querySelector("path")
    ?.setAttribute("d", paused ? "M5 3l7 5-7 5z" : "M5 3v10M11 3v10");
}

function startMotion() {
  media.revert();
  media = gsap.matchMedia();
  updateControl();
  document.body.dataset.motion = "paused";
  if (userPaused) return;

  media.add(
    {
      motion: "(prefers-reduced-motion: no-preference)",
      desktop: "(min-width: 901px)",
      finePointer: "(hover: hover) and (pointer: fine)",
      reduced: "(prefers-reduced-motion: reduce)",
    },
    (context) => {
      if (context.conditions?.reduced) return;
      const desktop = context.conditions?.desktop;
      const events = new AbortController();
      const signal = events.signal;
      document.body.dataset.motion = "active";

      const entrance = gsap.timeline({
        defaults: { duration: 1, ease: "power3.out" },
      });
      entrance
        .from(".title-line > span", {
          yPercent: 110,
          rotation: 2,
          stagger: 0.12,
        })
        .from(".hero-bottom", { y: 18, opacity: 0, duration: 0.7 }, "-=0.65")
        .from(
          ".stage-screen",
          { y: 80, opacity: 0, stagger: 0.12, duration: 1.3 },
          "-=0.45",
        );

      const floaters = gsap.utils
        .toArray<HTMLElement>(".stage-screen img")
        .map((image, index) =>
          gsap.to(image, {
            y: index % 2 ? -9 : 9,
            scale: 1.09,
            duration: 3.5 + index * 0.7,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          }),
        );
      const rings = gsap.to(".code-orbit", {
        rotation: 18,
        y: 15,
        duration: 7,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
      const ambient = [...floaters, rings];
      const setAmbient = (visible: boolean) =>
        ambient.forEach((tween) =>
          visible && !document.hidden ? tween.resume() : tween.pause(),
        );
      const stageVisibility = ScrollTrigger.create({
        trigger: ".hero",
        start: "top bottom",
        end: "bottom top",
        onToggle: (self) => setAmbient(self.isActive),
      });
      setAmbient(stageVisibility.isActive);
      document.addEventListener(
        "visibilitychange",
        () => setAmbient(stageVisibility.isActive),
        { signal },
      );

      gsap.utils
        .toArray<HTMLElement>(".stage-screen")
        .forEach((screen, index) => {
          gsap.to(screen, {
            x: (index - 1) * (desktop ? 45 : 12),
            rotation: [-16, 2, 16][index],
            ease: "none",
            scrollTrigger: {
              trigger: ".project-stage",
              start: "top 65%",
              end: "bottom top",
              scrub: 1,
            },
          });
        });

      gsap.utils.toArray<HTMLElement>(".project-image").forEach((image) => {
        gsap.fromTo(
          image,
          { clipPath: "inset(12% 0% 12% 0% round 12px)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 12px)",
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top 95%",
              end: "top 45%",
              scrub: 0.6,
            },
          },
        );
      });
      if (desktop) {
        gsap.to(".project-1, .project-3", {
          y: -55,
          ease: "none",
          scrollTrigger: {
            trigger: ".project-grid",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
      gsap.utils
        .toArray<HTMLElement>(
          ".section-heading h2, .process-intro h2, .about h2, .music-copy h2, .contact-grid h2",
        )
        .forEach((heading) => {
          gsap.from(heading, {
            y: 25,
            opacity: 0.35,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: { trigger: heading, start: "top 90%", once: true },
          });
        });
      gsap.from(".skills-row > div", {
        y: 15,
        opacity: 0,
        duration: 0.65,
        stagger: 0.08,
        scrollTrigger: { trigger: ".skills-row", start: "top 92%", once: true },
      });

      if (context.conditions?.finePointer) {
        const stage = document.querySelector<HTMLElement>(".project-stage");
        if (stage) {
          const rotateX = gsap.quickTo(stage, "rotationX", {
            duration: 0.8,
            ease: "power2.out",
          });
          const rotateY = gsap.quickTo(stage, "rotationY", {
            duration: 0.8,
            ease: "power2.out",
          });
          stage.addEventListener(
            "pointermove",
            (event) => {
              const rect = stage.getBoundingClientRect();
              const x = (event.clientX - rect.left) / rect.width;
              const y = (event.clientY - rect.top) / rect.height;
              rotateX((0.5 - y) * 3);
              rotateY((x - 0.5) * 3);
              stage.style.setProperty("--pointer-x", `${x * 100}%`);
              stage.style.setProperty("--pointer-y", `${y * 100}%`);
            },
            { signal },
          );
          stage.addEventListener(
            "pointerleave",
            () => {
              rotateX(0);
              rotateY(0);
            },
            { signal },
          );
        }
        gsap.utils.toArray<HTMLElement>(".project-image").forEach((surface) => {
          const image = surface.querySelector("img");
          if (!image) return;
          const xTo = gsap.quickTo(image, "rotationY", {
            duration: 0.65,
            ease: "power2.out",
          });
          const yTo = gsap.quickTo(image, "rotationX", {
            duration: 0.65,
            ease: "power2.out",
          });
          const scaleTo = gsap.quickTo(image, "scale", {
            duration: 0.65,
            ease: "power2.out",
          });
          surface.addEventListener(
            "pointermove",
            (event) => {
              const rect = surface.getBoundingClientRect();
              const x = (event.clientX - rect.left) / rect.width;
              const y = (event.clientY - rect.top) / rect.height;
              xTo((x - 0.5) * 7);
              yTo((0.5 - y) * 7);
              scaleTo(1.025);
              surface.style.setProperty("--pointer-x", `${x * 100}%`);
              surface.style.setProperty("--pointer-y", `${y * 100}%`);
            },
            { signal },
          );
          surface.addEventListener(
            "pointerleave",
            () => {
              xTo(0);
              yTo(0);
              scaleTo(1);
            },
            { signal },
          );
        });
      }
      // Refresh after self-hosted fonts settle, without keeping stale callbacks after cleanup.
      document.querySelectorAll(".process-step").forEach((step) =>
        step.addEventListener("toggle", () => ScrollTrigger.refresh(), {
          signal,
        }),
      );
      document.fonts.ready.then(() => {
        if (!signal.aborted) ScrollTrigger.refresh();
      });
      return () => {
        events.abort();
        document.body.dataset.motion = "paused";
      };
    },
  );
}

toggle?.addEventListener("click", () => {
  // The OS preference remains authoritative; the button still records the user's choice.
  userPaused = !(userPaused || systemMotion.matches);
  try {
    localStorage.setItem("portfolio-motion-paused", String(userPaused));
  } catch {
    /* Storage is optional. */
  }
  startMotion();
});
systemMotion.addEventListener("change", startMotion);
window.addEventListener("pagehide", () => media.revert());
window.addEventListener("pageshow", (event) => {
  if (event.persisted) startMotion();
});
startMotion();
