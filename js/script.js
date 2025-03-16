console.log("script chargé !");

$(document).ready(function() {
  const backToTopButton = $('#btn-back-to-top');

  // Cache le bouton au départ
  backToTopButton.hide();

  // Écoute le scroll sur <body> au lieu de window
  $("body").on("scroll", function() {
    let scrollPosition = $(this).scrollTop();
    console.log("Scroll détecté :", scrollPosition);

    if (scrollPosition > 300) {
      console.log("Affichage du bouton !");
      backToTopButton.fadeIn();
    } else {
      backToTopButton.fadeOut();
    }
  });

  // Smooth scroll vers le haut
  backToTopButton.on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, 800);
  });
});
