<script lang="ts">
	import { clsx } from 'clsx';
	import Button from './Button.svelte';
</script>

<div
	class="w-full h-[1px] max-w-6xl mx-auto [background-image:linear-gradient(90deg,rgba(71,71,65,0),#474741_50%,rgba(71,71,65,0))]"
/>

<div class="relative py-36 overflow-hidden">
	<div
		class={clsx(
			'w-[764px] h-[305px] opacity-40 blur-[160px] rounded-full absolute -top-[41px] left-[20%] -z-10',
			'[background:linear-gradient(267.56deg,#232428_22.11%,#5E7CF1_40.73%,#1E6BFF_54.78%,#133E04_69.88%,#9BCFF2_89.56%)]'
		)}
	/>
	<div class="max-w-6xl mx-auto flex flex-col gap-8 relative">
		<div class="grid grid-cols-5 w-full items-start">
			<div class="max-w-2xl col-span-3">
				<h2 class="text-5xl font-bold">Set Up In Minutes. <br /> Not Months.</h2>
				<p class="text-xl font-medium mt-5 text-neutral-400">
					Get access to state of the art financial stack to operate in the crypto economy.
				</p>
				<Button variant="outline" size="lg" class="mt-12">Sign up for early access</Button>
			</div>

			<img
				src="/images/cards.png"
				alt="Cards"
				class="col-span-2 scale-[1.5] object-contain mix-blend-screen pointer-events-none [mask:radial-gradient(circle,black_20%,transparent_70%)]"
			/>
		</div>
	</div>
</div>
