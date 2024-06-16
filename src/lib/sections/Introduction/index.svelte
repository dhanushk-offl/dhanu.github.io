<script lang="ts">
	import Button from '$components/Button/index.svelte';
	import DocumentIcon from '$lib/icons/DocumentIcon.svelte';
	import Gmail from '$lib/icons/Gmail.svelte';
	import { animate } from 'motion';
	import { onMount } from 'svelte';

	let paragraphText;
	let paragraphReveal;
	let animateBtn1BG;
	let animateBtn2BG;

	let animateBtn1;
	let animateBtn2;

	onMount(async () => {
		await animate(
			[paragraphReveal, animateBtn1BG, animateBtn2BG],
			{
				width: [0, '100%'],
				left: [0, 0]
			},
			{
				duration: 0.4,
				delay: 1,
				easing: 'ease-in-out'
			}
		).finished;
		await animate(
			[paragraphText, animateBtn1, animateBtn2],
			{
				opacity: 1
			},
			{
				duration: 0
			}
		).finished;
		animate(
			[paragraphReveal, animateBtn1BG, animateBtn2BG],
			{
				width: ['100%', 0],
				left: '100%'
			},
			{
				duration: 0.4,
				easing: 'ease-in-out'
			}
		);
	});
</script>

<header class="introduction-section-wrapper">
	<div class="intro-content">
<div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; margin-top: 10px; margin-bottom: 10px; position: relative;">
  <img style="width: 50%; height: 50%; border-radius: 50%; object-fit: cover;" src="https://res.cloudinary.com/dwir71gi2/image/upload/v1718483156/IMG-20240504-WA0003_pr_fkfwsm.jpg" alt="Profile Image" />
</div>
<br>
		<h1 class="my-short-intro">
			<p bind:this={paragraphText}>
				Hello! I’m <span class="text-[#62aeef]"> <b>Dhanush Kandhan</b></span> 🌿✌️ — curious developer based in Tamil Nadu, India . Interested in

				<span class="text-[#e06b74]"> AI Engineering</span>,
				<span class="text-[#98c379]"> websites</span>,
				<span class="text-[#e5c07a]"> science & developer tools</span>
				<span class="text-[#62aeef]"> human interactions</span>,
				<span class="text-[#c778dd]"> Podcasts</span>. Currently learning Artificial Intelligence and looking for
				new opportunities as a AI Engineer.
			</p>
			<div class="reveal" bind:this={paragraphReveal} />
		</h1>
		<div class="introduction-links">
			<a href="/about" class="w-full relative">
				<Button bind:bindTarget={animateBtn1} class=" opacity-0 " variant="filled">About me</Button>
				<div class="reveal" bind:this={animateBtn1BG} />
			</a>
			<a href="mailto:dhanushkandhan75@gmail.com" class="mt-6 w-full relative">
				<Button bind:bindTarget={animateBtn2} variant="outlined" class=" opacity-0">Contact</Button>
				<div class="reveal" bind:this={animateBtn2BG} />
			</a>
		</div>
	</div>
</header>
