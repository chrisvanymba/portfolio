window.onload = function () {
  emailjs.init("M3jD16scCdKfKyR9D"); // Remplacez par votre clé publique

  // Ajouter un écouteur d'événements au formulaire pour intercepter la soumission
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Empêche la soumission normale du formulaire

      // Envoi du formulaire via EmailJS en utilisant le bon Template ID
      emailjs.sendForm("service_63nqkaf", "template_0rz54ie", this).then(
        () => {
          console.log("SUCCESS!"); // Si l'envoi réussit
          alert("Message envoyé avec succès !");
        },
        (error) => {
          console.log("FAILED...", error); // Si une erreur se produit
          alert("Erreur lors de l'envoi du message.");
        }
      );
    });
};