<script lang="ts">
	import Introduction from '$sections/Introduction/index.svelte';
	import Projects from '$lib/sections/MainProjects/index.svelte';
	import Experience from '$lib/sections/Experience/index.svelte';
	import Podcasts from '$lib/sections/Podcast/index.svelte';
	import Badges from '$lib/sections/Badges/index.svelte';
	import Contact from '$sections/Contact/index.svelte';
	import Articles from '$lib/Articles/index.svelte';
</script>

<Introduction />
<Experience /><br>
<Projects />
<Podcasts />
<Articles />
<Badges />
<Contact />
