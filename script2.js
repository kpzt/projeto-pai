const params = new URLSearchParams(window.location.search);
const projeto = params.get("projeto");

const titulo = document.getElementById("titulo");
const descricao = document.getElementById("descricao");
const galeria = document.getElementById("galeria");

const dados = {
  telhado: {
    titulo: "Telhado de Madeira",
    descricao: "Projetos de telhados resistentes e duráveis com eucalipto tratado.",
    imagens: [
      "imagens/img1.jpeg",
      "imagens/img1.jpeg",
      "imagens/img1.jpeg"
    ]
  },

  playground: {
    titulo: "Playground",
    descricao: "Estruturas seguras e resistentes para crianças.",
    imagens: [
      "imagens/img2.jpeg",
      "imagens/img2.jpeg",
      "imagens/img2.jpeg"
    ]
  },

  pergolado: {
    titulo: "Pergolado",
    descricao: "Beleza e conforto para seu espaço externo.",
    imagens: [
      "imagens/img3.jpeg",
      "imagens/img3.jpeg",
      "imagens/img3.jpeg"
    ]
  },

  balanco: {
    titulo: "Balanço",
    descricao: "Estruturas fortes e ideais para lazer.",
    imagens: [
      "imagens/img5.jpeg",
      "imagens/img5.jpeg",
      "imagens/img5.jpeg"
    ]
  },

  personalizado: {
    titulo: "Projetos Personalizados",
    descricao: "Criamos qualquer estrutura sob medida.",
    imagens: [
      "imagens/img6.jpeg",
      "imagens/img6.jpeg",
      "imagens/img6.jpeg"
    ]
  }
};

if (dados[projeto]) {
  titulo.textContent = dados[projeto].titulo;
  descricao.textContent = dados[projeto].descricao;

  dados[projeto].imagens.forEach(img => {
    const imagem = document.createElement("img");
    imagem.src = img;
    galeria.appendChild(imagem);
  });
}