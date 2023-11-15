<script lang="ts">
	const features = [
		{
			title: 'Unified Crypto & <br/> Fiat Treasury',
			description:
				'An integrated, compliant, and secured custody solution for fiat and cryptocurrencies.'
		},
		{
			title: 'Instant Liquidity',
			description: 'Seamlessly convert your funds between fiat and crypto in a few seconds.',
			list: [
				'Buy & sell crypto directly from liquidity providers and get the best prices',
				'Automatic cost basis, gains, and losses calculations',
				'No daily or weekly transaction limits'
			]
		}
	];
</script>

<div class="pb-44 max-w-6xl mx-auto flex flex-col gap-16">
	{#each features as feature, i}
		<div
			class="{i === 0
				? 'z-10'
				: ''} shadow-2xl px-16 py-2 bg-surface border border-surface-light rounded-2xl sticky bottom-5 bg-[url(https://uploads-ssl.webflow.com/63281d362a9501fa6e9f6aae/6332be8adb492c05cbaff2ad_tunnel-bg.png)] bg-cover bg-[50%]"
		>
			<div class="grid grid-cols-5 items-center justify-between">
				<div class="col-span-2">
					<h2 class="text-5xl font-bold">{@html feature.title}</h2>
					<p class="text-xl font-medium {feature.list ? 'mt-5' : 'mt-10'} text-neutral-400">
						{feature.description}
					</p>

					{#if feature.list}
						<ul class="mt-10 text-neutral-400 font-medium space-y-5">
							{#each feature.list as item}
								<li
									class="flex items-start gap-4 before:content-[''] before:rounded-full before:border before:border-secondary before:w-3 before:h-3 before:min-w-[12px] before:relative before:top-1.5"
								>
									{item}
								</li>
							{/each}
						</ul>
					{/if}
				</div>

				<div class="col-span-3">
					<img
						src="https://uploads-ssl.webflow.com/63281d362a9501fa6e9f6aae/6389ba275e4c1946ffd9ca82_fund-stack-static.png"
						alt="Wallet"
					/>
				</div>
			</div>
		</div>
	{/each}
</div>
