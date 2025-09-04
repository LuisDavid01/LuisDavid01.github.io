import { gsap } from "gsap";

import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export function animateText(selector: string, type: 'lines' | 'words' | 'chars') {
	const splitText = new SplitText(`.${selector}`, { type: type as string });
	gsap.from(splitText.chars, {
		duration: 0.4,
		y: 15,
		stagger: 0.1,
		autoAlpha: 0,
		filter: "blur(5px)"
	})
}
