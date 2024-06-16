<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import { partytownSnippet } from '@builder.io/partytown/integration';
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	 
	inject({ mode: dev ? 'development' : 'production' });

	// Add the Partytown script to the DOM head
	let scriptEl: any;
	onMount(() => {
		if (scriptEl) {
			scriptEl.textContent = partytownSnippet();
		}
	});
</script>



<svelte:head>
	<!-- Google tag (gtag.js) -->
	<script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=GTM-5KXDHGNX">
	</script>

	<script type="text/partytown">
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('event', 'page_visit');

		gtag('config', 'GTM-5KXDHGNX', {
			page_path: window.location.pathname
		});
	</script>

	<!-- `partytownSnippet` is inserted here -->
	<script bind:this={scriptEl}></script>
	
</svelte:head>

<slot />

<SvelteSeo
	title="Dhanush Kandhan"
	description="Dhanush Kandhan is a AI engineer who specializes in building (and occasionally designing) exceptional digital experiences and web apps."
	openGraph={{
		type: 'website',
		title: 'Dhanush Kandhan | AI Engineer',
		description:
			'Dhanush Kandhan is a AI engineer who specializes in building (and occasionally designing) exceptional digital experiences and web apps.',
		url: '',
		images: [{ url: 'https://res.cloudinary.com/dwir71gi2/image/upload/v1718515255/Webpage_uxhafg.png' }]
	}}
	twitter={{
		card: 'summary_large_image',
		site: '@dhanushk_offl',
		title: 'Dhanush Kandhan | AI Engineer',
		description:
			'Dhanush Kandhan is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences in AI and web apps.',
		image: 'https://res.cloudinary.com/dwir71gi2/image/upload/v1718515255/Webpage_uxhafg.png',
		imageAlt: 'Dhanush Kandhan | Software Engineer'
	}}
/>
