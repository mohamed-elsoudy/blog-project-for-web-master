window.onscroll = function () {
    let backToTopButton = document.getElementById("back-to-top");
    if (document.documentElement.scrollTop > 100) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  };

  document.getElementById("back-to-top").onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };