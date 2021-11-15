import AOS from "aos";

export default ({ app }, inject) => {
  app.AOS = new AOS.init({
		duration: 1000,
		once: true,
	}); // eslint-disable-line new-cap
};
