(function () {
	window.onload = function () {
		window.setTimeout(fadeout, 0);
	};
  function fadeout() {
		document.querySelector(".page-loader").style.opacity = "0";
		document.querySelector(".page-loader").style.display = "none";
	}
	window.onscroll = function () {
		var header_navbar = document.querySelector(".navbar-area");
		var sticky = header_navbar.offsetTop;
		if (window.pageYOffset > sticky) {
			header_navbar.classList.add("sticky");
		} else {
			header_navbar.classList.remove("sticky");
		}
		var backToTo = document.querySelector(".scroll-top");
		if (
			document.body.scrollTop > 50 ||
			document.documentElement.scrollTop > 50
		) {
			backToTo.style.display = "flex";
		} else {
			backToTo.style.display = "none";
		}
	};



  let navbarToggler = document.querySelector(".navbar-toggler");
	navbarToggler.addEventListener("click", function () {
		navbarToggler.classList.toggle("active");
  });



  var toggle = document.getElementById("theme-toggle");

var storedTheme =
	localStorage.getItem("theme") ||
	(window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light");
if (storedTheme)
	document.documentElement.setAttribute("data-theme", storedTheme);

toggle.onclick = function () {
	var currentTheme = document.documentElement.getAttribute("data-theme");
	var targetTheme = "light";

	if (currentTheme === "light") {
		targetTheme = "dark";
	}
	document.documentElement.setAttribute("data-theme", targetTheme);
	localStorage.setItem("theme", targetTheme);
};





})();
