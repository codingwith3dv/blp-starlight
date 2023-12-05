<script lang="ts">
	import { clsx } from 'clsx';
	import debounce from 'debounce';

	const financialFeatures = [
		{
			name: 'Wires & ACH',
			description: 'Same/next day transfer to bank accounts',
			icon: 'ph ph-bank',
			image: '/images/f-2-001.jpg'
		},
		{
			name: 'Checks',
			description: 'Send and receive physical checks',
			icon: 'ph ph-money',
			image: '/images/f-2-002.jpg'
		},
		{
			name: 'Cards',
			description: 'Spend your funds in the real world',
			icon: 'ph ph-credit-card',
			image: '/images/f-2-003.jpg'
		},
		{
			name: 'On-chain',
			description: 'Move your funds across chains in a few clicks',
			icon: 'ph-fill ph-cube',
			image: '/images/f-2-004.jpg'
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

<div class="relative px-5 py-20 md:py-36 overflow-hidden">
	<div
		class={clsx(
			'w-[764px] h-[305px] opacity-40 blur-[160px] rounded-full absolute -top-[41px] left-[20%] -z-10',
			'[background:linear-gradient(267.56deg,#232428_22.11%,#5E7CF1_40.73%,#1E6BFF_54.78%,#133E04_69.88%,#9BCFF2_89.56%)]'
		)}
	/>
	<div class="max-w-6xl mx-auto flex flex-col gap-8 relative">
		<div class="max-w-5xl mx-auto w-full">
			<div class="max-w-2xl">
				<h2 class="text-4xl lg:text-5xl font-bold">Payments For Every Use Case</h2>
				<p class="text-xl font-medium mt-5 text-neutral-400">
					Starlight allows you to move money seamlessly from cold wallets, to hot wallets, to bank
					accounts — in minutes.
				</p>
			</div>
		</div>

		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-3 group/cards pt-8 md:pb-8 px-8 -mx-8"
			on:mousemove={debounce(mouseMove, 15)}
		>
			{#each financialFeatures as feature, i}
				<div
					class={clsx(
						'w-full h-full rounded-3xl flex flex-col bg-neutral-600 cursor-pointer relative',
						"before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:rounded-[inherit] before:z-[3]",
						'before:[background:radial-gradient(800px_circle_at_var(--cursor-x)_var(--cursor-y),_rgba(255,255,255,0.06),_transparent_40%)]',
						'before:opacity-0 before:transition-opacity before:duration-500',
						'before:hover:opacity-100 group/card'
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
						class="p-6 flex flex-col gap-3 h-[calc(100%-2px)] w-[calc(100%-2px)] bg-surface rounded-[inherit] m-[1px] z-[2] relative"
					>
						<div class="rounded-[calc(theme(borderRadius.3xl)-theme(spacing.4))] overflow-hidden">
							<img
								src={feature.image}
								alt={feature.name}
								class={clsx(
									'aspect-[4/3] w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all delay-150',
									'pointer-events-none'
								)}
							/>
						</div>
						<div class="flex flex-row items-start gap-4 grow">
							<i
								class="{feature.icon} grid place-items-center align-middle text-xl top-1.5 relative"
							/>
							<div class="space-y-1">
								<h3 class="text-xl font-bold">
									{feature.name}
								</h3>
								<p class="text-neutral-400 text-base/[1.2rem]">{feature.description}</p>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
