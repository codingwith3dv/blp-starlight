<script lang="ts">
	import { clsx } from 'clsx';

	export let faq: { question: string; answer: string };

	let open = false;
</script>

<div class={clsx('border border-neutral-700/60 rounded-xl overflow-hidden w-full')}>
	<button
		class={clsx(
			'px-8 py-6 font-semibold text-lg text-start bg-neutral-900/10 backdrop-blur-xl',
			'inline-flex gap-4 justify-between items-center w-full'
		)}
		on:click={() => (open = !open)}
	>
		<span>
			{faq.question}
		</span>
		<i
			class="ph ph-plus grid place-items-center align-middle text-lg transition-transform"
			class:rotate-45={open}
		/>
	</button>

	<!-- Nice little trick to transition between height 0 and height auto -->
	<div
		class={clsx('overflow-hidden grid grid-rows-[0fr] transition-all', open && 'grid-rows-[1fr]')}
	>
		<div
			class="px-8 text-base overflow-hidden transition-all text-neutral-400 font-medium"
			class:pb-6={open}
		>
			<p>{faq.answer}</p>
		</div>
	</div>
</div>
