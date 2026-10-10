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
