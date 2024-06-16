<script lang="ts">
	import Container from '$lib/components/ProjectWrapper/index.svelte';
	import Github from '$lib/icons/Github.svelte';
	import Link from '$lib/icons/Link.svelte';
	import { mouseDownHandler } from '$utils/GrabToMove';
</script>

<Container>
	<div class="project-wrapper">
		<div class="lg:w-full">
			<div class="date">2024</div>
			<div class="title">
				<a href="https://revibe.in.net/" target="_blank" rel="noopener noreferrer">Revibe 2024</a>
			</div>
		</div>
		<div class="detail">
			In this website we create a <span class="highlight">event management website </span> and share
			data across <span class="highlight"> multiple colleges and Universities</span>. 
			<br /> Tools used: Svelte + Tailwind, Vercel, Serverless functions, &
			Cron job.
			<br />
			<div class="flex items-center justify-start gap-4 my-3 mt-4 h-[22px]">
				<a
					href="https://github.com/dhanushk-offl/revibe-event.git"
					target="_blank"
					class="link h-full"
					rel="noopener noreferrer"
				>
					<Github class="h-full fill-white hover:fill-teal-tint" />
				</a>
				<a
					href="https://revibe.in.net/"
					target="_blank"
					class="link h-full"
					rel="noopener noreferrer"
				>
					<Link class="h-full text-white hover:text-teal-tint" />
				</a>
			</div>
		</div>
	</div>
	<div class="project-showcase-images" on:mousedown={mouseDownHandler}>
		<div class="w-fit h-full flex items-center justify-start gap-10 pointer-events-none">
			<img
				loading="lazy"
				src="https://res.cloudinary.com/dwir71gi2/image/upload/v1718482696/rev_wo0pyg.png"
				alt=""
			/>
			<img
				loading="lazy"
				src="https://res.cloudinary.com/dwir71gi2/video/upload/v1718482654/Recording_2024-06-16_014624.gif_b9blgj.gif"
				alt=""
			/>
		</div>
	</div>
</Container>
