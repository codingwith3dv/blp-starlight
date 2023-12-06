<script lang="ts">
	// Call TO Action (CTA)
	import { clsx } from 'clsx';
	import Button from './Button.svelte';
</script>

<!-- Gradient border -->
<div
	class="w-full h-[1px] max-w-6xl mx-auto [background-image:linear-gradient(90deg,rgba(71,71,65,0),#474741_50%,rgba(71,71,65,0))]"
/>

<div class="relative px-5 py-20 md:py-36 overflow-hidden">
	<div
		class={clsx(
			'w-[748px] h-[248px] opacity-40 blur-[160px] rounded-full absolute top-0 bottom-auto left-[20%] -z-10',
			'[background:linear-gradient(312.23deg,#FABE65_-3.97%,rgba(251,131,160,0)_125.5%)]'
		)}
	/>
	<div class="max-w-6xl mx-auto flex flex-col gap-8 relative">
		<div class="grid lg:grid-cols-5 gap-y-12 md:gap-x-12 w-full items-start">
			<div class="max-w-md lg:max-w-2xl lg:col-span-3">
				<h2 class="text-4xl lg:text-5xl font-bold">Set Up In Minutes. <br /> Not Months.</h2>
				<p class="text-xl font-medium mt-5 text-neutral-400">
					Get access to state of the art financial stack to operate in the crypto economy.
				</p>
				<Button variant="outline" size="lg" class="mt-12">Sign up for early access</Button>
			</div>

			<img
				src="/images/cards.png"
				alt="Cards"
				loading="lazy"
				class="lg:col-span-2 scale-[1.1] lg:scale-[1.5] object-contain mix-blend-screen pointer-events-none [mask:radial-gradient(circle,black_20%,transparent_70%)]"
			/>
		</div>
	</div>
</div>
