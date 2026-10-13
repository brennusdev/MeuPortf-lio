// Revela os elementos com a classe "reveal" conforme a pessoa rola a página
const observer = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("ativo");
        observer.unobserve(entrada.target); // anima apenas uma vez
      }
    });
  },
  { threshold: 0.2 }, // ativa quando 20% do elemento estiver visível
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Scroll suave ao clicar nos links da navbar
document.querySelectorAll('.nav-links a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const destino = document.querySelector(link.getAttribute("href"));
    if (destino) destino.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Robôzinho: some após 5s ou na primeira interação (clique, tecla ou scroll)
const bot = document.getElementById("bot");

function sumirBot() {
  if (!bot || bot.classList.contains("saindo")) return;
  bot.classList.add("saindo");
  bot.addEventListener("animationend", () => bot.remove());
  ["click", "keydown", "scroll", "touchstart"].forEach((ev) =>
    window.removeEventListener(ev, sumirBot)
  );
}

if (bot) {
  setTimeout(sumirBot, 5000); // some automaticamente após 5 segundos
  ["click", "keydown", "scroll", "touchstart"].forEach((ev) =>
    window.addEventListener(ev, sumirBot, { once: true })
  );
}
