<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

<div class="grid place-items-center py-44 hero">
	<div class="max-w-3xl flex flex-col justify-center items-center mb-32">
		<h1 class="text-8xl text-center font-head inline-block mb-5">
			The Financial OS<br /> for Web3 Teams
		</h1>
		<p class="text-xl text-center inline-block mb-14">
			Finances built for the future. Meet the fastest, most secure, and compliant platform to manage
			your team's money and digital assets.
		</p>
		<Button variant="outline" size="lg">Sign up for early access</Button>
	</div>

	<div class="w-full max-w-5xl shadow-[0px_20px_200px_10px_#f4ad4420]">
		<img
			src="https://uploads-ssl.webflow.com/63281d362a9501fa6e9f6aae/64a86dc193be72508a56f9e9_hero%20screenshot%202.png"
			loading="eager"
			class="w-full h-full"
			alt=""
		/>
	</div>
</div>

<style lang="postcss">
	.hero {
		opacity: 0.8;
		--w: 1px;
		--s: 70px;
		background-image: linear-gradient(#303134 var(--w), transparent var(--w)),
			linear-gradient(to right, #303134 var(--w), transparent var(--w));
		background-size: var(--s) var(--s);
	}
</style>
