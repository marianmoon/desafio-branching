$(function () {
  $('[data-bs-toggle="tooltip" ]').tooltip();

  $('#enviarCorreo').click(function(){
      alert("El correo fue enviado correctamente")
  });

  $(".texto-receta").on("dblclick", "h3", function(){
    $(this).css("color", "#DC3545");
  });

  $(".card-title").click(function(){
      $(".card-text").toggle(
        speed = 300
      );
  });
});