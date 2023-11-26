const inputSearch = $("#inputSearch");
const buttonSearch = $("#buttonSearch");

buttonSearch.click(() => {
  fetch(`https://viacep.com.br/ws/${inputSearch.val()}/json/`)
    .then((response) => response.json())
    .then((data) => {
      $(".cep-container").css({ display: "flex" });

      $("#cepNumber").html(data.cep);
      $("#cepCity").html(data.localidade);
      $("#cepUf").html(data.uf);
      $("#cepDdd").html(data.ddd);
      $("#cepAddress").html(data.logradouro);
      $("#cepNeighborhood").html(data.bairro);
      $("#cepIbge").html(data.ibge);

      inputSearch.val("");
    });
});
