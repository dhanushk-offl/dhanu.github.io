import { c as create_ssr_component, d as add_attribute, v as validate_component, b as escape, e as each } from "../../chunks/index.js";
import { F as Footer } from "../../chunks/global.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { variant = "filled" } = $$props;
  let { padding = "rectangle" } = $$props;
  let { bindTarget = {} } = $$props;
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.bindTarget === void 0 && $$bindings.bindTarget && bindTarget !== void 0)
    $$bindings.bindTarget(bindTarget);
  return `<button${add_attribute("class", `${variant} button ${$$props.class || ""} ${padding}`, 0)}${add_attribute("this", bindTarget, 0)}>${slots.default ? slots.default({}) : ``}</button>`;
});
const Gmail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${add_attribute("class", $$props.class, 0)} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path></svg>`;
});
const Introduction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let paragraphText;
  let paragraphReveal;
  let animateBtn1BG;
  let animateBtn2BG;
  let animateBtn1;
  let animateBtn2;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<header class="introduction-section-wrapper"><div class="intro-content"><div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; margin-top: 10px; margin-bottom: 10px; position: relative;"><img style="width: 50%; height: 50%; border-radius: 50%; object-fit: cover;" src="https://res.cloudinary.com/dwir71gi2/image/upload/v1718483156/IMG-20240504-WA0003_pr_fkfwsm.jpg" alt="Profile Image"></div>
<br>
		<h1 class="my-short-intro"><p${add_attribute("this", paragraphText, 0)}>Hello! I’m <span class="text-[#62aeef]"><b>Dhanush Kandhan</b></span> 🌿✌️ — curious developer based in Tamil Nadu, India . Interested in

				<span class="text-[#e06b74]">AI Engineering</span>,
				<span class="text-[#98c379]">websites</span>,
				<span class="text-[#e5c07a]">science &amp; developer tools</span>
				<span class="text-[#62aeef]">human interactions</span>,
				<span class="text-[#c778dd]">Podcasts</span>. Currently learning Artificial Intelligence and looking for
				new opportunities as a AI Engineer.
			</p>
			<div class="reveal"${add_attribute("this", paragraphReveal, 0)}></div></h1>
		<div class="introduction-links"><a href="/about" class="w-full relative">${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: " opacity-0 ",
        variant: "filled",
        bindTarget: animateBtn1
      },
      {
        bindTarget: ($$value) => {
          animateBtn1 = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `About me`;
        }
      }
    )}
				<div class="reveal"${add_attribute("this", animateBtn1BG, 0)}></div></a>
			<a href="mailto:dhanushkandhan75@gmail.com" class="mt-6 w-full relative">${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: "outlined",
        class: " opacity-0",
        bindTarget: animateBtn2
      },
      {
        bindTarget: ($$value) => {
          animateBtn2 = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `Contact`;
        }
      }
    )}
				<div class="reveal"${add_attribute("this", animateBtn2BG, 0)}></div></a></div></div></header>`;
  } while (!$$settled);
  return $$rendered;
});
const ProjectWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sectionRef;
  return `<section class="project-section"${add_attribute("this", sectionRef, 0)}><div class="z-10 relative">${slots.default ? slots.default({}) : ``}</div></section>`;
});
const Github = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${add_attribute("class", $$props.class, 0)} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>`;
});
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${add_attribute("class", $$props.class, 0)}><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`;
});
const Revibeproj = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(ProjectWrapper, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="project-wrapper"><div class="lg:w-full"><div class="date">2024</div>
			<div class="title"><a href="https://revibe.in.net/" target="_blank" rel="noopener noreferrer">Revibe 2024</a></div></div>
		<div class="detail">In this website we create a <span class="highlight">event management website </span> and share
			data across <span class="highlight">multiple colleges and Universities</span>. 
			<br> Tools used: Svelte + Tailwind, Vercel, Serverless functions, &amp;
			Cron job.
			<br>
			<div class="flex items-center justify-start gap-4 my-3 mt-4 h-[22px]"><a href="https://github.com/dhanushk-offl/revibe-event.git" target="_blank" class="link h-full" rel="noopener noreferrer">${validate_component(Github, "Github").$$render(
        $$result,
        {
          class: "h-full fill-white hover:fill-teal-tint"
        },
        {},
        {}
      )}</a>
				<a href="https://revibe.in.net/" target="_blank" class="link h-full" rel="noopener noreferrer">${validate_component(Link, "Link").$$render(
        $$result,
        {
          class: "h-full text-white hover:text-teal-tint"
        },
        {},
        {}
      )}</a></div></div></div>
	<div class="project-showcase-images"><div class="w-fit h-full flex items-center justify-start gap-10 pointer-events-none"><img loading="lazy" src="https://res.cloudinary.com/dwir71gi2/image/upload/v1718482696/rev_wo0pyg.png" alt="">
			<img loading="lazy" src="https://res.cloudinary.com/dwir71gi2/video/upload/v1718482654/Recording_2024-06-16_014624.gif_b9blgj.gif" alt=""></div></div>`;
    }
  })}`;
});
const MainProjects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
${validate_component(Revibeproj, "Revibe").$$render($$result, {}, {}, {})}
<div class="mt-32 md:mt-36"></div>`;
});
const Project_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".project-item.svelte-ff4gnk h3.svelte-ff4gnk{font-size:1rem;font-weight:700;line-height:1.5rem;margin-bottom:.75rem}.project-item.svelte-ff4gnk p.svelte-ff4gnk{--tw-text-opacity:1;color:rgb(178 178 178/var(--tw-text-opacity));font-size:1rem;line-height:1.75rem;max-width:28rem;width:91.666667%}",
  map: null
};
const Project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { desc } = $$props;
  let { link } = $$props;
  let { select } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.select === void 0 && $$bindings.select && select !== void 0)
    $$bindings.select(select);
  $$result.css.add(css$4);
  return `<a${add_attribute("href", link, 0)} target="_blank" rel="noopener noreferrer" class="w-full"><div class="project-item group svelte-ff4gnk"><div class="flex items-start justify-start gap-2"><h3 class="svelte-ff4gnk">${escape(title)}</h3>
			${``}</div>
		<p class="svelte-ff4gnk">${escape(desc)}</p></div>
</a>`;
});
const index_svelte_svelte_type_style_lang$3 = "";
const css$3 = {
  code: ".showcase-projects.svelte-1rc828r.svelte-1rc828r{transform:translateY(12px);transition-duration:.35s;transition-timing-function:ease-in}.content.svelte-1rc828r.svelte-1rc828r{margin:0 auto;width:90%}@media(min-width:768px){.content.svelte-1rc828r.svelte-1rc828r{width:100%}}.projects-list.svelte-1rc828r.svelte-1rc828r{display:flex;flex-direction:column}.right-showcase-image.svelte-1rc828r.svelte-1rc828r{position:relative}.right-showcase-image.svelte-1rc828r img.svelte-1rc828r{height:auto;width:100%}.right-showcase-image.svelte-1rc828r a.svelte-1rc828r{align-items:center;bottom:-15%;display:flex;gap:3.5px;justify-content:center;position:absolute;right:5%}",
  map: null
};
const Experience = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let projectsData = [
    {
      title: "Developer Technology AI Intern @Nvidia",
      desc: "Working as a Dev Tech AI Intern at Nvidia, I focus on optimizing GPU usage to enhance performance. By predicting future FPS based on current FPS through image generation techniques, we aim to reduce GPU consumption.",
      link: "https://nvidia.com",
      image: "https://res.cloudinary.com/dwir71gi2/image/upload/v1718481198/NVIDIA-logo-BL_5cdf5705-821f-4c4c-9c14-371e4d10457d-prv_y73oey.jpg"
    },
    {
      title: "Research Fellow in AI & Computer Ethics @University of Cambridge",
      desc: "I am conducting research in AI and computational ethics, focusing on prompt image generation and various sorting and abstraction techniques to make image generation faster and more precise. I am currently pursuing this research at the School of Technology, University of Cambridge. Initially, I started my research independently, but this opportunity has now become my primary focus.",
      link: "https://www.cambridge.org/engage/coe/article-details/655373de2c3c11ed715fa8bd",
      image: "https://res.cloudinary.com/dwir71gi2/image/upload/v1718483848/Cam_bhlafm.png"
    },
    {
      title: "Software Engineering Intern @Google (Completed)",
      desc: "Completed my first internship at a multinational corporation (MNC) with Google, where I worked on two of Google's emerging projects: Google AI Studio and Project IDX. My focus was on enhancing user experience and productivity, making the tools more intuitive and user-friendly for clients.",
      link: "https://about.google/",
      image: "https://res.cloudinary.com/dwir71gi2/image/upload/v1718483971/Google__G__logo.svg_khufzc.png"
    }
  ];
  let externalLinkIcon = null;
  let selectedProject = 0;
  const showProject = (id) => {
    selectedProject = id;
  };
  let sectionRef = null;
  $$result.css.add(css$3);
  return `<section class="showcase-projects duration-[0.35s] translate-y-12 ease-in svelte-1rc828r"${add_attribute("this", sectionRef, 0)}><div class="content svelte-1rc828r"><div class="w-[90%] md:w-full mx-auto"><h2>Some things I’ve worked on</h2>

      <div class="projects-list svelte-1rc828r">${each(projectsData, (item, id) => {
    return `${validate_component(Project, "Project").$$render($$result, Object.assign({}, item, { select: () => showProject(id) }), {}, {})}`;
  })}</div></div>

    <div class="right-showcase-image svelte-1rc828r"><img loading="lazy"${add_attribute("src", projectsData[selectedProject].image, 0)}${add_attribute("alt", projectsData[selectedProject].title, 0)} class="svelte-1rc828r">
      <div class="absolute bottom-[-15%] right-5 flex items-center justify-center gap-3.5"><a target="_blank" rel="noopener noreferrer"${add_attribute("href", projectsData[selectedProject].link, 0)} class="svelte-1rc828r"${add_attribute("this", externalLinkIcon, 0)}>${validate_component(Link, "Link").$$render(
    $$result,
    {
      class: "h-[1.3rem] w-[1.3rem] text-white hover:text-teal-tint"
    },
    {},
    {}
  )}</a></div></div></div>
</section>`;
});
const Podcast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sectionRef;
  return `<section class="showcase-projects duration-[0.35s] translate-y-12 ease-in"${add_attribute("this", sectionRef, 0)}><div class="content"><div class="w-[90%] md:w-full mx-auto"><h3>My Podcasts</h3>
<div class="h-44 flex justify-center items-center"><iframe style="border-radius:12px" src="https://open.spotify.com/embed/show/7wNAoRcAzNzEf51JhNH3vo?utm_source=generator&theme=0" width="100%" height="152" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div></div></div></section>`;
});
const index_svelte_svelte_type_style_lang$2 = "";
const css$2 = {
  code: ".showcase-projects.svelte-7pzzq4.svelte-7pzzq4{transform:translateY(12px);transition-duration:.35s;transition-timing-function:ease-in}.showcase-projects.svelte-7pzzq4 .content.svelte-7pzzq4{margin:0 auto;width:90%}@media(min-width:768px){.showcase-projects.svelte-7pzzq4 .content.svelte-7pzzq4{width:100%}}.showcase-projects.svelte-7pzzq4 .content h2.svelte-7pzzq4{text-align:center}.showcase-projects.svelte-7pzzq4 .content .credentials-container.svelte-7pzzq4{display:flex;flex-wrap:wrap;justify-content:center}.showcase-projects.svelte-7pzzq4 .content .credentials-container a .credential-img.svelte-7pzzq4{height:13rem;margin:0 auto;padding:1.25rem;width:13rem}.showcase-projects.svelte-7pzzq4 .content .credentials-container a .credential-img.svelte-7pzzq4:hover{box-shadow:0 0 10px rgba(0,0,0,.3);transition:box-shadow .3s}",
  map: null
};
const Badges = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sectionRef;
  $$result.css.add(css$2);
  return `<section class="showcase-projects svelte-7pzzq4"${add_attribute("this", sectionRef, 0)}><div class="content svelte-7pzzq4"><h2 class="svelte-7pzzq4">My credentials</h2>
    <div class="credentials-container svelte-7pzzq4"><a href="https://www.credly.com/badges/" target="_blank"><img src="https://res.cloudinary.com/dwir71gi2/image/upload/v1718481305/gcp-ace_mnuzpx.png" alt="Associate Cloud Engineer - Google Cloud" class="credential-img svelte-7pzzq4"></a>
      <a href="https://www.credly.com/badges/" target="_blank"><img src="https://res.cloudinary.com/dwir71gi2/image/upload/v1718481305/cks_vm3dfm.png" alt="Certified Kubernetes Security Specialist" class="credential-img svelte-7pzzq4"></a>
      <a href="https://developers.google.com/profile/badges/playlists/tensorflow" target="_blank"><img src="https://res.cloudinary.com/dwir71gi2/image/upload/v1718480952/badge_z62meq.png" alt="Tensor Flow Expert Badge " class="credential-img svelte-7pzzq4"></a>
            <a href="https://university.atlassian.com/student/award/2QwYsBfznMDum9Fhb5TQ4GXN" target="_blank"><img src="https://res.cloudinary.com/dwir71gi2/image/upload/v1718481141/atlassian-university-badge-removebg-preview_gcag6y.png" alt="Atlassian University - Technical Marketing Strategy - Badge" class="credential-img svelte-7pzzq4"></a>
     <a href="https://www.credential.net/f1e18112-5b64-4db8-be31-40b43331c3a7" target="_blank"><img src="https://res.cloudinary.com/dwir71gi2/image/upload/v1718480816/94a50324-e1bc-4460-8980-94d97208000c_ll9n8z.png" alt="Google Play Academy - Store Listing Certification Badge" class="credential-img svelte-7pzzq4"></a></div></div></section>`;
});
const CalLogo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${add_attribute("class", $$props.class, 0)} width="35" height="18" viewBox="0 0 35 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8.517 17.337C11.363 17.337 13.463 16.241 14.7 14.747L12.32 12.717C11.363 13.767 10.173 14.304 8.587 14.304C5.367 14.304 3.383 11.877 3.383 8.891C3.383 5.904 5.367 3.431 8.517 3.431C9.987 3.431 11.2 3.944 12.18 4.971L14.49 2.964C13.02 1.214 11.177 0.396999 8.517 0.396999C3.477 0.396999 0 4.2 0 8.89C0 13.557 3.663 17.337 8.517 17.337ZM21.579 17.337C23.749 17.337 24.846 16.427 25.499 15.051V17.034H28.556V4.9H25.429V6.814C24.776 5.507 23.679 4.644 21.579 4.644C18.242 4.644 15.582 7.514 15.582 11.014C15.582 14.514 18.242 17.337 21.579 17.337ZM18.732 10.991C18.732 9.101 20.086 7.491 22.092 7.491C24.169 7.491 25.499 9.124 25.499 11.014C25.499 12.904 24.169 14.491 22.092 14.491C20.086 14.491 18.732 12.834 18.732 10.991ZM31.361 17.034H34.511V0H31.361V17.034Z"></path></svg>`;
});
const ExternalLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${add_attribute("class", $$props.class, 0)} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.25 2.75h-5.5v10.5h10.5v-5.5m0-5l-5.5 5.5m3-6.5h3.5v3.5"></path></svg>`;
});
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sectionRef;
  return `<section class="contact-wrapper opacity-0 duration-[0.35s] translate-y-12 ease-in" id="contact"${add_attribute("this", sectionRef, 0)}><div class="content"><div class="get-in-touch"><h2>Get in touch</h2>
			<h3>I’m currently looking for new opportunities as a Software Engineer. If you have anything for
				me or just want to say hi, feel free to message me, my inbox is always open. I’ll try my
				best to get back to you!
			</h3></div>

		<div class="contact-links"><a href="https://read.cv/itzmedhanu" target="_blank" rel="noopener noreferrer" class="w-full">${validate_component(Button, "Button").$$render($$result, { variant: "filled" }, {}, {
    default: () => {
      return `My Resume

					${validate_component(ExternalLink, "ExternalLink").$$render($$result, { class: "ml-2" }, {}, {})}`;
    }
  })}</a>
			<div class="flex items-center justify-around gap-4 mt-4 w-full"><a href="https://cal.com/itzmedhanu" target="_blank" rel="noopener noreferrer" class="group">${validate_component(Button, "Button").$$render($$result, { variant: "outlined", padding: "square" }, {}, {
    default: () => {
      return `${validate_component(CalLogo, "CalLogo").$$render(
        $$result,
        {
          class: "block fill-bright-secondary duration-150 group-hover:fill-white w-[30px]"
        },
        {},
        {}
      )}`;
    }
  })}</a>
				<a href="mailto:dhanushkandhan75@gmail.com" target="_blank" rel="noopener noreferrer" class="group">${validate_component(Button, "Button").$$render($$result, { variant: "outlined", padding: "square" }, {}, {
    default: () => {
      return `${validate_component(Gmail, "Gmail").$$render(
        $$result,
        {
          class: "block fill-bright-secondary duration-150 group-hover:fill-[#EA4335] w-[20px] h-[20px]"
        },
        {},
        {}
      )}`;
    }
  })}</a>
				
				
				</div></div></div></section>`;
});
const index_svelte_svelte_type_style_lang$1 = "";
const css$1 = {
  code: ".showcase-projects.svelte-1a7c4tu.svelte-1a7c4tu{transform:translateY(12px);transition-duration:.35s;transition-timing-function:ease-in}.showcase-projects.svelte-1a7c4tu .content.svelte-1a7c4tu{margin:0 auto;width:90%}@media(min-width:768px){.showcase-projects.svelte-1a7c4tu .content.svelte-1a7c4tu{width:100%}}.showcase-projects.svelte-1a7c4tu .content h3.svelte-1a7c4tu{text-align:center}.showcase-projects.svelte-1a7c4tu .content .article-card.svelte-1a7c4tu{background-color:#fff;border:1px solid #e5e7eb;border-radius:.75rem;box-shadow:0 1px 2px 0 rgba(0,0,0,.05);color:#374151;display:flex;flex-direction:row;margin:1rem;max-width:30rem;overflow:hidden}.showcase-projects.svelte-1a7c4tu .content .article-card .image-container.svelte-1a7c4tu{max-width:10rem}.showcase-projects.svelte-1a7c4tu .content .article-card .image-container img.svelte-1a7c4tu{max-width:100%;-o-object-fit:cover;object-fit:cover}.showcase-projects.svelte-1a7c4tu .content .article-card .content-container.svelte-1a7c4tu{display:flex;flex-direction:column;max-width:19rem;padding:.5rem}.showcase-projects.svelte-1a7c4tu .content .article-card .content-container .title.svelte-1a7c4tu{color:#000;font-size:1.125rem;font-weight:500;margin-top:.25rem}.showcase-projects.svelte-1a7c4tu .content .article-card .content-container .description.svelte-1a7c4tu{color:#6b7280;font-size:.875rem;margin-right:.5rem;margin-top:.25rem;text-align:justify}.showcase-projects.svelte-1a7c4tu .content .article-card .content-container .read-more.svelte-1a7c4tu{margin-top:auto;text-align:right;width:100%}.showcase-projects.svelte-1a7c4tu .content .article-card .content-container .read-more .link.svelte-1a7c4tu{color:#3b82f6;font-size:.875rem;font-weight:500}.showcase-projects.svelte-1a7c4tu .content .article-card .content-container .read-more .link.svelte-1a7c4tu:hover{text-decoration:underline}",
  map: null
};
const Articles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sectionRef;
  let { articles = [
    {
      title: "From Bots to Bosses: Embracing the AI Revolution in the New Era of Work",
      description: "In this article, we will explore how we can adapt to this new era, shaping the future of work while infusing it with entertainment, humor, and valuable information",
      image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Do09g0tbpRlObtdOmYwZIA.jpeg",
      link: "https://medium.com/@itzmedhanu/from-bots-to-bosses-embracing-the-ai-revolution-in-the-new-era-of-work-57ea2d27dbc1"
    },
    {
      title: "Deploying a Basic Image Generation Model with NVIDIA Triton Inference Server: A Fun and Friendly Guide",
      description: " Today, we’re going to deploy a basic image generation model using the NVIDIA AI Triton Inference Server (NTIS). ",
      image: "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*9F4ehCHYe7vKO_MifVMwyw.png",
      link: "https://medium.com/@itzmedhanu/deploying-a-basic-image-generation-model-with-nvidia-triton-inference-server-a-fun-and-friendly-797ff10c421f"
    },
    {
      title: "My Brush with OpenVINO: From Laggy Laptops to Real-Time Superhero",
      description: "So, here’s the story of a tech researcher stuck in a rut, also known as me. My days were a delightful mix of chasing AI breakthroughs and battling the eternal foe — my laptop’s processing power (or lack thereof). ",
      image: "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*hNwfXzYtArY20zXOFqeJtw.jpeg",
      link: "https://medium.com/@itzmedhanu/my-brush-with-openvino-from-laggy-laptops-to-real-time-superhero-030030643452"
    },
    {
      title: "AI in Finance: Unleashing the Intelligence of Money’s Best Friend",
      description: "From outsmarting fraudsters to providing personalized financial advice, AI has become the ultimate sidekick of the financial industry. Join me on this exciting journey as we explore the hilarious and informative ways in which AI has revolutionized finance.",
      image: "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*mE3RYaA9dBtZnzNIcjd-6Q.png",
      link: "https://medium.com/@itzmedhanu/ai-in-finance-unleashing-the-intelligence-of-moneys-best-friend-76274f469ae0"
    }
  ] } = $$props;
  if ($$props.articles === void 0 && $$bindings.articles && articles !== void 0)
    $$bindings.articles(articles);
  $$result.css.add(css$1);
  return `<section class="showcase-projects svelte-1a7c4tu"${add_attribute("this", sectionRef, 0)}><div class="content svelte-1a7c4tu"><h3 class="svelte-1a7c4tu">Articles &amp; Blogs</h3><br><br>
    ${each(articles, ({ title, description, image, link }) => {
    return `<div class="article-card svelte-1a7c4tu"><div class="image-container svelte-1a7c4tu"><img${add_attribute("src", image, 0)} alt="Article thumbnail" class="svelte-1a7c4tu"></div>
        <div class="content-container svelte-1a7c4tu"><h2 class="title svelte-1a7c4tu">${escape(title)}</h2>
          <p class="description svelte-1a7c4tu">${escape(description)}</p>
          <div class="read-more svelte-1a7c4tu"><a class="link svelte-1a7c4tu"${add_attribute("href", link, 0)} target="_blank">Read more</a>
          </div></div>
      </div>`;
  })}</div></section>`;
});
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Introduction, "Introduction").$$render($$result, {}, {}, {})}
${validate_component(Experience, "Experience").$$render($$result, {}, {}, {})}<br>
${validate_component(MainProjects, "Projects").$$render($$result, {}, {}, {})}
${validate_component(Podcast, "Podcasts").$$render($$result, {}, {}, {})}
${validate_component(Articles, "Articles").$$render($$result, {}, {}, {})}
${validate_component(Badges, "Badges").$$render($$result, {}, {}, {})}
${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}`;
});
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".loading.svelte-z1adsz{align-items:center;display:flex;height:100vh;inset:0;justify-content:center;position:fixed;width:100vw;z-index:50}",
  map: null
};
const LoadingScreen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let loadingScreen2;
  $$result.css.add(css);
  return `<div class="loading !bg-black opacity-100 !z-40 svelte-z1adsz"${add_attribute("this", loadingScreen2, 0)}></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LoadingScreen, "LoadingScreen").$$render($$result, {}, {}, {})}

<main>${validate_component(Main, "Main").$$render($$result, {}, {}, {})}</main>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
