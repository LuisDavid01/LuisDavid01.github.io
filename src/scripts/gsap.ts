import { gsap } from "gsap";

import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export function animateText(selector: string, type: 'lines' | 'words' | 'chars') {
	const tl = gsap.timeline();
	const splitText = new SplitText(`.${selector}`, { type: type as string });
	tl.from(splitText.chars, {
		duration: 0.5,
		y: 15,
		stagger: 0.1,
		autoAlpha: 0,
		filter: "blur(5px)"
	})
		.from('.top-socials', {
			duration: 1,
			x: 20,
			autoAlpha: 0,
			ease: "circ.inOut",
			filter: "blur(5px)"
		}, "<")
		.from('.top-nav', {
			duration: 1,
			y: -20,
			autoAlpha: 0,
			ease: "circ.inOut",
			filter: "blur(5px)"
		}, ".3")
}
