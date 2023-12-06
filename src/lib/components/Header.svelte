<script lang="ts">
	// Header
	import { onMount } from 'svelte';
	import { Hamburger } from 'svelte-hamburgers';
	import { writable } from 'svelte/store';
	import { fade } from 'svelte/transition';

	const drawerOpen = writable<boolean>(false);

	const links = [
		{
			name: 'About',
			href: '#'
		},
		{
			name: 'Careers',
			href: '#'
		},
		{
			name: 'Blog',
			href: '#'
		},
		{
			name: 'Sign In',
			href: '#'
		}
	];

	onMount(() => {
		const unsubscribe = drawerOpen.subscribe((v) => {
			// For stopping scroll when menu is open on mobile
			if (v) document.body.style.overflowY = 'hidden';
			else document.body.style.overflowY = 'auto';
		});

		return () => unsubscribe();
	});
</script>

{#if $drawerOpen}
	<div
		transition:fade={{ duration: 200 }}
		class="absolute w-full h-full bg-surface/80 backdrop-blur-xl z-40 py-20 px-5"
	>
		<div class="flex lg:hidden flex-col items-end gap-4 relative text-2xl font-medium">
			{#each links as link}
				<a
					href={link.href}
					on:click={() => ($drawerOpen = false)}
					class="text-neutral-400 hover:text-white transition-colors">{link.name}</a
				>
			{/each}
			<a
				href="/#"
				on:click={() => ($drawerOpen = false)}
				class="text-primary/80 hover:text-primary transition-colors">Request Access</a
			>
		</div>
	</div>
{/if}

<header class="max-w-8xl mx-auto flex items-center justify-between gap-4 py-3 px-4">
	<a href="/" class="inline-block z-40">
		<img src="/logo.svg" alt="Logo" class="w-28 pointer-events-none" />
	</a>

	<div class="hidden lg:flex items-center gap-10 top-1 relative text-lg font-medium">
		{#each links as link}
			<a href={link.href} class="text-neutral-400 hover:text-white transition-colors">{link.name}</a
			>
		{/each}
		<a href="/#" class="text-primary/80 hover:text-primary transition-colors">Request Access</a>
	</div>

	<div class="top-1 relative z-40 lg:hidden">
		<Hamburger
			bind:open={$drawerOpen}
			--layer-width="1.5rem"
			--layer-spacing="5px"
			--layer-height="2px"
			--padding="5px"
		/>
	</div>
</header>

<style lang="postcss">
	:global(.hamburger-inner),
	:global(.hamburger-inner::before),
	:global(.hamburger-inner::after) {
		@apply !bg-neutral-200;
	}
</style>
