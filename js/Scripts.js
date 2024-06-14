document.addEventListener("DOMContentLoaded", function () {
  // Toggle mobile menu
  document.getElementById("mobile-menu").addEventListener("click", function () {
    var nav = document.querySelector("nav ul");
    nav.classList.toggle("nav-active");
  });

  // Calculate BMI (assuming this function is called somewhere in your HTML)
  function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    if (weight > 0 && height > 0) {
      var bmi = (weight / (height / 100) ** 2).toFixed(2);
      document.getElementById("bmiResult").innerText = "Your BMI is " + bmi;
    } else {
      document.getElementById("bmiResult").innerText =
        "Please enter valid values.";
    }
  }

  // Initialize carousel (assuming you have a carousel element in your HTML)
  $(".carousel").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
  });

  // Submit contact form
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      emailjs
        .sendForm("service_p99l3ko", "template_7zjptbn", "#contactForm")
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Email sent successfully");
            document.getElementById("contactForm").reset();
          },
          function (error) {
            console.log("FAILED...", error);
            alert("Failed to send email");
          }
        );
    });
});
