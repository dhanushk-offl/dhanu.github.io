import { c as create_ssr_component, d as add_attribute, e as each, v as validate_component, b as escape } from "../../../chunks/index.js";
import { F as Footer } from "../../../chunks/global.js";
const Close = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${add_attribute("class", $$props.class, 0)} width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="#161616"></circle><path d="M29 28L53 52" stroke="white" stroke-width="2"></path><path d="M53 28L29 52" stroke="white" stroke-width="2"></path></svg>`;
});
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-l0z0ra{position:relative}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="about-section-wrapper"><div class="intro-content text-bright-secondary"><div class="text"><div class="relative mt-7"><div class="relative"><p class="svelte-l0z0ra">Hey There! It&#39;s me <span class="highlight">Dhanush Kandhan</span> aka <span class="highlight">Dhanu</span> and I enjoy creating
						things that live on the internet. I am a
						<span class="highlight">Self-taught Technologist</span> and currently working as a Developer Technology AI Intern @Nvidia, Research Fellow @Cambridge University and Ex - SWE Intern @Google.
					</p>
					<div class="reveal"></div></div>
				<div class="mt-4 relative"><p class="svelte-l0z0ra">I started my journey back in 2020, I was in school, and the school had just installed a
						new computer lab, I didn’t have a computer at my home but I was already really
						interested in computers and new technologies. I learned a lot of things in that lab
						including Python, and my interest got even bigger, Now focusing on AI Image Generation Algorithms.
						<span class="reveal"></span></p>
					<div class="reveal"></div></div></div>

			<div class="relative mt-7"><p class="svelte-l0z0ra">Recently I <a href="https://www.cambridge.org/engage/coe/article-details/655373de2c3c11ed715fa8bd" class="highlight highlight-name flex items-center gap-2" target="_blank" rel="noopener noreferrer">published a research paper
					</a> that lets you have the knowledge of new innovation approuch of Easier and Faster Image Generation where you can explore in serveral platforms.
				</p>
				<div class="reveal"></div></div>

			<div class="relative mt-7"><p class="svelte-l0z0ra">Here are a few tools I’ve been working with recently:</p>
				<div class="reveal"></div></div>

			<div class="grid grid-cols-2 pb-10 md:pb-0"><ul class="mt-4 flex flex-col gap-2">${each(
    [
      "Python",
      "PHP",
      "Google Cloud & Firebase",
      "Image Generation",
      "C",
      "Machine Learning"
    ],
    (item) => {
      return `<li class="relative w-fit"><p class="svelte-l0z0ra">▹ ${escape(item)}</p>
							<div class="reveal"></div>
						</li>`;
    }
  )}</ul>

				<ul class="mt-4 flex flex-col gap-2">${each(["Svelte", "Tailwind", "Github Actions", "MongoDB", "MySQL", "SCSS", "React"], (item) => {
    return `<li class="relative w-fit"><p class="svelte-l0z0ra">▹ ${escape(item)}</p>
							<div class="reveal"></div>
						</li>`;
  })}</ul></div></div>

		<div class="w-full mt-10 lg:my-10 max-w-sm md:max-w-md relative"><p class="svelte-l0z0ra"><img class="rounded-md w-full" src="https://res.cloudinary.com/dwir71gi2/image/upload/v1718483156/IMG-20240504-WA0003_pr_fkfwsm.jpg" alt=""></p>
			<div class="reveal"></div></div></div></section>

<a href="/" class="absolute top-5 left-5 h-12 w-12 cursor-pointer">${validate_component(Close, "Close").$$render($$result, { class: "w-full h-full" }, {}, {})}
</a>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(About, "About").$$render($$result, {}, {}, {})}</main>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
