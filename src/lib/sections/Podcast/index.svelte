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
</script>
<section class="showcase-projects duration-[0.35s] translate-y-12 ease-in" bind:this={sectionRef}>
<div class="content">
<div class="w-[90%] md:w-full mx-auto">
<h3>My Podcasts</h3>
<div class="h-44 flex justify-center items-center">
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/show/7wNAoRcAzNzEf51JhNH3vo?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
</div>
</div>
</div>
</section>