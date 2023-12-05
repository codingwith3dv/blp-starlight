<script lang="ts">
	const links = [
		{
			name: 'Product',
			links: [
				{
					name: 'Changelog',
					href: '#'
				},
				{
					name: 'Log In',
					href: '#'
				},
				{
					name: 'Sign Up',
					href: '#'
				}
			]
		},
		{
			name: 'Company',
			links: [
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
					name: 'Contact Us',
					href: 'https://frontavo.com/contact'
				}
			]
		},
		{
			name: 'Resources',
			links: [
				{
					name: 'Terms of Service',
					href: '#'
				},
				{
					name: 'Privacy Policy',
					href: '#'
				},
				{
					name: 'Legal',
					href: '#'
				},
				{
					name: 'FAQ',
					href: '#'
				}
			]
		},
		{
			name: 'Follow Us',
			links: [
				{
					name: 'Twitter',
					href: 'https://x.com/cw3dv'
				}
			]
		}
	];
</script>

<div class="w-full h-[1px] mx-auto bg-[#474741]" />

<footer class="py-16 max-w-6xl mx-auto grid grid-cols-5 gap-8">
	<div class="col-span-2">
		<img src="/logo.svg" alt="Logo" class="w-36 pointer-events-none" />
	</div>
	<div class="col-span-3 grid grid-cols-4 gap-4">
		{#each links as linkGroup}
			<div class="flex flex-col gap-4 text-lg">
				<span class="font-semibold">{linkGroup.name}</span>
				{#each linkGroup.links as link}
					<a
						href={link.href}
						class="inline-block text-neutral-400 hover:text-white transition-all w-fit"
						>{link.name}</a
					>
				{/each}
			</div>
		{/each}
	</div>
</footer>
