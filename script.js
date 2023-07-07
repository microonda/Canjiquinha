let valorElement = document.getElementById("valor");
let btnMais = document.getElementById("btn-mais");
let btnMenos = document.getElementById("btn-menos");

let valor = 1;

btnMais.addEventListener("click", function() {
  valor++;
  valorElement.textContent = valor;
  atualizarIngredientes(valor);
});

btnMenos.addEventListener("click", function() {
  if (valor > 1) {
    valor--;
    valorElement.textContent = valor;
    atualizarIngredientes(valor);
  }
});

function atualizarIngredientes(valor) {
  let ingredientesElement = document.getElementById("ingredientes-lista");
  let ingredientes = [
    `${500 * valor}g de Canjica Branca`,
    `${valor} Vidro de Leite de Coco`,
    `${valor} Litro de Leite`,
    `${valor} Canela em pó`,
    `${valor} Lata de Leite Condensado`,
    `${50 * valor}g de Coco Ralado Úmido e Adoçado`,
    `${8 * valor} Colheres (Sopa) de Açúcar`
  ];

  ingredientesElement.innerHTML = "";

  ingredientes.forEach(function(ingrediente) {
    let li = document.createElement("li");
    li.textContent = ingrediente;
    ingredientesElement.appendChild(li);
  });
}
