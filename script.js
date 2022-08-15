const fadeIn = document.querySelectorAll(".fade-in");

const slideIn = document.querySelectorAll(".from-right");

const cookiesButton = document.querySelector(".cookie_img");

cookiesButton.onclick = () => {
	cookiesButton.classList.add("hide");
};

const appearOptions = {
	threshold: 0.15,
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add("appear");
			appearOnScroll.unobserve(entry.target);
		}
	});
}, appearOptions);

fadeIn.forEach((fader) => {
	appearOnScroll.observe(fader);
});

slideIn.forEach((slider) => {
	appearOnScroll.observe(slider);
});
