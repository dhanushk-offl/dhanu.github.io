<script lang="ts">
  import Project from './components/Project.svelte';
  import { animate, spring, stagger } from 'motion';
  import Github from '$lib/icons/Github.svelte';
  import Link from '$lib/icons/Link.svelte';
  import { onMount } from 'svelte';
  import { addObserver } from '$stores/cursor';

  let projectsData = [
    {
      title: 'Developer Technology AI Intern @Nvidia',
      desc: 'Working as a Dev Tech AI Intern at Nvidia, I focus on optimizing GPU usage to enhance performance. By predicting future FPS based on current FPS through image generation techniques, we aim to reduce GPU consumption.',
      link: 'https://nvidia.com',
      image: 'https://res.cloudinary.com/dwir71gi2/image/upload/v1718481198/NVIDIA-logo-BL_5cdf5705-821f-4c4c-9c14-371e4d10457d-prv_y73oey.jpg'
    },
    {
      title: 'Research Fellow in AI & Computer Ethics @University of Cambridge',
      desc: 'I am conducting research in AI and computational ethics, focusing on prompt image generation and various sorting and abstraction techniques to make image generation faster and more precise. I am currently pursuing this research at the School of Technology, University of Cambridge. Initially, I started my research independently, but this opportunity has now become my primary focus.',
      link: 'https://www.cambridge.org/engage/coe/article-details/655373de2c3c11ed715fa8bd',
      image: 'https://res.cloudinary.com/dwir71gi2/image/upload/v1718483848/Cam_bhlafm.png'
    },
    {
      title: 'Software Engineering Intern @Google (Completed)',
      desc: 'Completed my first internship at a multinational corporation (MNC) with Google, where I worked on two of Google\'s emerging projects: Google AI Studio and Project IDX. My focus was on enhancing user experience and productivity, making the tools more intuitive and user-friendly for clients.',
      link: 'https://about.google/',
      image: 'https://res.cloudinary.com/dwir71gi2/image/upload/v1718483971/Google__G__logo.svg_khufzc.png'
    }
  ];

  let externalLinkIcon: HTMLElement | null = null;

  let selectedProject: number = 0;
  const showProject = (id: number) => {
    selectedProject = id;
  };

  const removeIcons = () => {
    animate(
      externalLinkIcon,
      { opacity: 0, y: 0 },
      { duration: 0.05, delay: stagger(0.04), easing: spring() }
    );
  };

  const showIcons = () => {
    animate(
      externalLinkIcon,
      { opacity: 1, y: -80 },
      { duration: 0.05, delay: stagger(0.04), easing: spring() }
    );
  };

  let sectionRef: HTMLElement | null = null;
  onMount(() => {
    addObserver(sectionRef);
  });
</script>

<section class="showcase-projects duration-[0.35s] translate-y-12 ease-in" bind:this={sectionRef}>
  <div class="content">
    <div class="w-[90%] md:w-full mx-auto">
      <h2>Some things I’ve worked on</h2>

      <div class="projects-list">
        {#each projectsData as item, id}
          <Project {...item} select={() => showProject(id)} />
        {/each}
      </div>
    </div>

    <div class="right-showcase-image" on:mouseleave={removeIcons} on:mouseenter={showIcons}>
      <img loading="lazy" src={projectsData[selectedProject].image} alt={projectsData[selectedProject].title} />
      <div class="absolute bottom-[-15%] right-5 flex items-center justify-center gap-3.5">
        <a target="_blank" rel="noopener noreferrer" href={projectsData[selectedProject].link} bind:this={externalLinkIcon}>
          <Link class="h-[1.3rem] w-[1.3rem] text-white hover:text-teal-tint" />
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .showcase-projects {
    transition-duration: 0.35s;
    transform: translateY(12px);
    transition-timing-function: ease-in;
  }
  .content {
    width: 90%;
    margin: 0 auto;
  }
  @media (min-width: 768px) {
    .content {
      width: 100%;
    }
  }
  .projects-list {
    display: flex;
    flex-direction: column;
  }
  .right-showcase-image {
    position: relative;
  }
  .right-showcase-image img {
    width: 100%;
    height: auto;
  }
  .right-showcase-image a {
    position: absolute;
    bottom: -15%;
    right: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.5px;
  }
</style>
