<script lang="ts">
	import { clsx } from 'clsx';

	export let href: string | undefined = undefined;
	export let target: HTMLAnchorElement['target'] | undefined = undefined;
	export let variant: 'regular' | 'outline' = 'regular';
	export let size: 'sm' | 'base' | 'lg' = 'base';

	const element = href ? 'a' : 'button';
</script>

<svelte:element
	this={element}
	{href}
	{target}
	{...$$restProps}
	class={clsx(
		'appearance-none inline-flex gap-2 justify-center items-center text-center whitespace-nowrap',
		'transition-all duration-300',
		'rounded-lg font-medium',
		'disabled:cursor-not-allowed disabled:opacity-50',
		'hover:brightness-110 active:scale-[0.9875]',
		'border border-primary',
		variant === 'regular' && 'bg-primary text-black',
		variant === 'outline' && 'bg-primary/20 text-primary',
		size === 'sm' && 'px-2 py-1 text-sm',
		size === 'base' && 'px-4 py-2 text-base',
		size === 'lg' && 'px-5 py-3 text-lg',
		$$restProps.class
	)}
>
	<slot />
</svelte:element>
