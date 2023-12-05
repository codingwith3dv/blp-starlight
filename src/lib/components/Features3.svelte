<script lang="ts">
	import { clsx } from 'clsx';
	import debounce from 'debounce';

	const businessFeatures = [
		{
			name: 'Enterprise Grade Security',
			image: '/images/f-3-001.jpg',
			gridClass: 'md:col-span-3 lg:col-span-3'
		},
		{
			name: 'Automated Payments',
			image: '/images/f-3-002.jpg',
			gridClass: 'md:col-span-5 lg:col-span-5'
		},
		{
			name: 'Custom Roles & Permissions',
			image: '/images/f-3-003.jpg',
			gridClass: 'md:col-span-2 md:row-span-2 lg:col-span-4 lg:row-span-2'
		},
		{
			name: 'Automated Gain & Loss Calculations',
			image: '/images/f-3-004.jpg',
			gridClass: 'md:col-span-3 lg:col-span-2'
		},
		{
			name: 'Cards for Crypto & Finance',
			image: '/images/f-3-005.jpg',
			gridClass: 'md:col-span-3 lg:col-span-4'
		},
		{
			name: 'Extensive Notifications',
			image: '/images/f-3-006.jpg',
			gridClass: 'md:col-span-6 lg:col-span-2'
		}
	];

	let cards: (HTMLElement | null)[] = [];
	const mouseMove = (event: MouseEvent & { currentTarget: EventTarget }) => {
		for (const card of cards) {
			if (card) {
				const rect = card.getBoundingClientRect(),
					x = event.clientX - rect.left,
					y = event.clientY - rect.top;

				card.style.setProperty('--cursor-x', `${x}px`);
				card.style.setProperty('--cursor-y', `${y}px`);
			}
		}
	};
</script>

<div
	class="w-full h-[1px] max-w-6xl mx-auto [background-image:linear-gradient(90deg,rgba(71,71,65,0),#474741_50%,rgba(71,71,65,0))]"
/>

<div class="px-5 py-20 md:py-36 max-w-6xl mx-auto flex flex-col gap-8">
	<div class="max-w-5xl mx-auto w-full">
		<h2 class="text-4xl lg:text-5xl font-bold">A Few More Things You’re Going To Love</h2>
		<p class="text-xl font-medium mt-5 text-neutral-400">
			Starlight is built from the ground up for organizations to operate in both crypto and fiat.
		</p>
	</div>

	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="grid md:grid-cols-8 lg:grid-cols-12 gap-4 group/cards pt-8 md:pb-8 px-5 -mx-5"
		on:mousemove={debounce(mouseMove, 15)}
	>
		{#each businessFeatures as feature, i}
			<div
				class={clsx(
					'w-full h-full rounded-3xl flex flex-col bg-neutral-600 cursor-pointer relative',
					"before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:rounded-[inherit] before:z-[3]",
					'before:[background:radial-gradient(800px_circle_at_var(--cursor-x)_var(--cursor-y),_rgba(255,255,255,0.1),_transparent_40%)]',
					'before:opacity-0 before:transition-opacity before:duration-500',
					'before:hover:opacity-100 group/card',
					feature.gridClass
				)}
				bind:this={cards[i]}
			>
				<div
					class={clsx(
						"content-[''] absolute w-full h-full top-0 left-0 rounded-[inherit] z-[1]",
						'[background:radial-gradient(300px_circle_at_var(--cursor-x)_var(--cursor-y),_theme(colors.primary),_transparent_40%)]',
						'opacity-0 transition-opacity duration-500',
						'group-hover/cards:opacity-100'
					)}
				/>
				<div
					class="flex flex-col gap-3 h-[calc(100%-2px)] w-[calc(100%-2px)] bg-surface rounded-[inherit] overflow-hidden m-[1px] z-[2] relative"
				>
					<img
						src={feature.image}
						alt={feature.name}
						class={clsx(
							'aspect-[4/3] w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all delay-150',
							'opacity-50 pointer-events-none'
						)}
					/>

					<div class="space-y-1 absolute w-full h-fit bottom-0 p-6">
						<h3 class="text-xl font-bold">
							{feature.name}
						</h3>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
