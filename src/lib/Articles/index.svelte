<script>
  import { animate, spring, stagger } from 'motion';
  import Github from '$lib/icons/Github.svelte';
  import Link from '$lib/icons/Link.svelte';
  import { onMount } from 'svelte';
  import { addObserver } from '$stores/cursor';

  let sectionRef;
  onMount(() => {
    addObserver(sectionRef);
  });

  export let articles = [
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
  ];
</script>

<style lang="scss">
.showcase-projects {
  transition-duration: 0.35s;
  transform: translateY(12px);
  transition-timing-function: ease-in;
  .content {
    width: 90%;
    margin: 0 auto;
    @media (min-width: 768px) {
      width: 100%;
    }
    h3 {
      text-align: center;
    }
    .article-card {
      border: 1px solid #e5e7eb;
      color: #374151;
      background-color: #ffffff;
      border-radius: 0.75rem;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      overflow: hidden;
      max-width: 30rem;
      display: flex;
      flex-direction: row;
      margin: 1rem;
      .image-container {
        max-width: 10rem;
        img {
          max-width: 100%;
          object-fit: cover;
        }
      }
      .content-container {
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        max-width: 19rem;
        .title {
          margin-top: 0.25rem;
          font-size: 1.125rem;
          font-weight: 500;
          color: #000000;
        }
        .description {
          color: #6b7280;
          font-size: 0.875rem;
          margin-top: 0.25rem;
          text-align: justify;
          margin-right: 0.5rem;
        }
        .read-more {
          width: 100%;
          text-align: right;
          margin-top: auto;
          .link {
            color: #3b82f6;
            font-size: 0.875rem;
            font-weight: 500;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}
</style>

<section class="showcase-projects" bind:this={sectionRef}>
  <div class="content">
    <h3>Articles & Blogs</h3><br><br>
    {#each articles as { title, description, image, link }}
      <div class="article-card">
        <div class="image-container">
          <img src={image} alt="Article thumbnail" />
        </div>
        <div class="content-container">
          <h2 class="title">{title}</h2>
          <p class="description">{description}</p>
          <div class="read-more">
            <a class="link" href={link} target="_blank">Read more</a>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
