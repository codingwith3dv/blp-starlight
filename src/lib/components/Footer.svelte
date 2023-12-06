<script lang="ts">
	// Footer links
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

<footer class="py-16 px-5 max-w-6xl mx-auto">
	<div class="grid lg:grid-cols-5 gap-16 lg:gap-8">
		<div class="col-span-2">
			<img src="/logo.svg" alt="Logo" class="w-32 pointer-events-none" />
		</div>
		<div class="col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
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
	</div>

	<span
		class="mt-12 inline-block text-sm text-neutral-400 [&>a]:underline hover:[&>a]:text-white [&>a]:transition-colors"
	>
		Built by <a target="_blank" href="https://x.com/cw3dv">Devesh Das</a>. Website based on
		<a target="_blank" href="https://starlight.money">Starlight</a> ( All copy is copied from the
		Starlight website 😅 ). <br /><br />
		<a
			target="_blank"
			href="https://buildlandingpage.frontavo.com"
			class="text-[175%] brightness-125">Want a landing page website like this?</a
		>
	</span>
</footer>
