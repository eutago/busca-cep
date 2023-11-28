const inputSearch = $("#inputSearch");
const buttonSearch = $("#buttonSearch");

buttonSearch.click((event) => {
  event.preventDefault();

  let zipCode = inputSearch.val();

  zipCode = zipCode.replace(" ", "");
  zipCode = zipCode.replace(".", "");
  zipCode = zipCode.replace("-", "");
  zipCode = zipCode.replace(" ", "");
  zipCode = zipCode.trim();

  fetch(`https://viacep.com.br/ws/${zipCode}/json/`)
    .then((response) => response.json())
    .then((data) => {
      $(".cep-container").css({ display: "flex" });

      $("#cepNumber").html(data.cep);
      $("#cepCity").html(data.localidade);
      $("#cepUf").html(data.uf);
      $("#cepDdd").html(data.ddd);
      $("#cepAddress").html(data.logradouro);
      $("#cepNeighborhood").html(data.bairro);

      inputSearch.val("");
    });
});
