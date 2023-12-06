<script lang="ts">
	// Handles the SEO 😉
	import { page } from '$app/stores';
	import { MetaTags } from 'svelte-meta-tags';

	const name = '3MoNeY';
	const url = 'https://starlight.buildlandingpage.frontavo.com';
	const descriptionDefault = 'The Financial OS for Web3 Teams';

	export let description = descriptionDefault;
	export let pageName: string | null = null;
	export let routeId: string | null = '';

	$: validRouteId = routeId ?? $page.url.pathname;
</script>

<MetaTags
	title={`${pageName ? `${pageName} | ` : ''}${name}`}
	{description}
	canonical={`${url}${validRouteId}`}
	openGraph={{
		url: `${url}${validRouteId}`,
		title: `${pageName ? `${pageName} | ` : ''}${name}`,
		description,
		siteName: name,
		images: [
			{
				url: `${url}/large_image.png`,
				alt: `${name} banner`
			}
		]
	}}
	twitter={{
		title: `${pageName ? `${pageName} | ` : ''}${name}`,
		description,
		cardType: 'summary_large_image',
		image: `${url}/large_image.png`,
		imageAlt: `${name} logo`,
		site: '@cw3dv'
	}}
/>
