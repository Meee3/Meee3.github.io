$(document).ready(function () {
  // Fazer uma chamada AJAX para obter a localização via IP
  $.get(
    "https://ipapi.co/json/",
    function (response) {
      console.log(response);

      // Verifica o país
      if (response.country_code === "BR") {
        // Altera o atributo lang para pt-br
        $("html").attr("lang", "pt-br");
      }
    },
    "json"
  );
});
