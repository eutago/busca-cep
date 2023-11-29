const inputSearch = $("#inputSearch");
const buttonSearch = $("#buttonSearch");

function createLine(tag, data) {
  const line = document.createElement(tag);
  let text = document.createTextNode(data);

  line.append(text);
  $(".cep-details").append(line);
}

buttonSearch.click((event) => {
  event.preventDefault();

  $(".cep-details").empty();

  let zipCode = inputSearch.val();

  zipCode = zipCode.replace(" ", "");
  zipCode = zipCode.replace(".", "");
  zipCode = zipCode.replace("-", "");
  zipCode = zipCode.replace(" ", "");
  zipCode = zipCode.trim();

  fetch(`https://viacep.com.br/ws/${zipCode}/json/`)
    .then((response) => response.json())
    .then((data) => {
      if (data.erro) {
        throw new Error("CEP inválido");
      }

      $(".cep-container").css({
        display: "flex",
        "justify-content": "space-between",
      });

      $(".cep-view").show();
      $("#cepNumber").html(data.cep);
      createLine("span", `${data.localidade} / ${data.uf}`);
      createLine("span", data.ddd);
      createLine("span", data.logradouro);
      createLine("span", data.bairro);
    })
    .catch((error) => {
      $(".cep-container").css({ "justify-content": "center" });
      $(".cep-view").hide();
      createLine("Ops, algo deu errado!");
    });

  inputSearch.val("");
});
