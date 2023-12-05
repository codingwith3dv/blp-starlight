<script lang="ts">
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
</script>

<header class="max-w-8xl mx-auto flex items-center justify-between gap-4 py-2">
	<a href="/" class="inline-block">
		<img src="/logo.svg" alt="Logo" class="w-28 pointer-events-none" />
	</a>

	<div class="flex items-center gap-10 top-1 relative">
		{#each links as link}
			<a
				href={link.href}
				class="text-neutral-400 hover:text-white transition-colors text-lg font-medium inline-block h-fit"
				>{link.name}</a
			>
		{/each}
		<a
			href="/#"
			class="text-primary/80 hover:text-primary transition-colors text-lg font-medium inline-block h-fit"
			>Request Access</a
		>
	</div>
</header>
