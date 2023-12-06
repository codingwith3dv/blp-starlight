<script lang="ts">
	// Frequently Asked Questions
	import { clsx } from 'clsx';
	import FaqItem from './FaqItem.svelte';

	const faqs = [
		{
			question:
				'How does the platform ensure enterprise-grade security for financial transactions?',
			answer:
				'The platform employs robust security measures to ensure the highest level of protection for financial transactions and sensitive user information.'
		},
		{
			question: 'How are automated payments facilitated on the platform?',
			answer:
				'Automated payments on the platform are made easy through intuitive tools that allow users to set up and manage recurring payments and automate various financial tasks.'
		},
		{
			question:
				'Are there custom roles and permission settings available for different team members?',
			answer:
				'Yes, the platform provides flexible custom roles and permission settings, allowing businesses to tailor access levels for different team members based on their roles and responsibilities.'
		},
		{
			question: 'How does the platform handle automated gain and loss calculations?',
			answer:
				'The platform automates gain and loss calculations, providing users with accurate and up-to-date financial insights to track and analyze their financial performance.'
		},
		{
			question: 'What is meant by unified on and off-chain contacts?',
			answer:
				"Unified on and off-chain contacts refer to the platform's capability to manage contacts seamlessly across both blockchain and traditional financial networks."
		},
		{
			question: 'Can I use cards for both crypto and fiat transactions on the platform?',
			answer:
				'Yes, the platform supports cards for both crypto and fiat transactions, providing users with flexibility and convenience in their financial transactions.'
		},
		{
			question: 'How do powerful notifications work on the platform?',
			answer:
				'Powerful notifications on the platform keep users informed about important events, transactions, and updates, allowing for timely and informed decision-making.'
		}
	];
</script>

<!-- Gradient border -->
<div
	class="w-full h-[1px] max-w-6xl mx-auto [background-image:linear-gradient(90deg,rgba(71,71,65,0),#474741_50%,rgba(71,71,65,0))]"
/>

<div class="relative py-20 md:py-36 px-5 overflow-hidden">
	<div
		class={clsx(
			'w-[748px] h-[278px] opacity-40 blur-[160px] rounded-full absolute top-[175px] left-[15%] bottom-auto -z-10',
			'[background:linear-gradient(91.57deg,rgba(250,190,101,0.7)_-15.63%,rgba(190,127,107,0.7)_35.95%,rgba(131,155,251,0.7)_108.52%)]',
			'[grid-area:span_1/span_1/span_1/span_1]'
		)}
	/>
	<div class="max-w-6xl mx-auto gap-16 lg:gap-8 relative grid lg:grid-cols-[0.5fr_1fr]">
		<div class="max-w-5xl mx-auto w-full">
			<div class="max-w-2xl">
				<h2 class="text-4xl font-bold">Frequently Asked Questions</h2>
				<p class="text-xl font-medium mt-5 text-neutral-400">
					Have a question that is not answered? You can contact us at <a
						href="mailto:frontavo@gmail.com">our email</a
					>.
				</p>
			</div>
		</div>

		<div class="flex flex-col gap-3">
			{#each faqs as faq}
				<FaqItem {faq} />
			{/each}
		</div>
	</div>
</div>
