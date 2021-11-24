<template>
	<a @click="show=!show" class="font-medium text-green-dark group cursor-pointer">
		<li class="py-4 group-hover:bg-green-light10 sm:rounded-md px-4 sm:px-8 md:px-4">
			<div class="flex items-center justify-between">
				<p class="text-lg">{{ title }}</p>
				<img src="~/assets/arrow.svg" alt="Seta pra direita" class="mr-4" />
			</div>
			<p v-if="show" class="font-normal mt-4 p-0 md:p-4">
				<slot />
			</p>
		</li>
	</a>
</template>

<script>
export default {
	data: function() {
		return {
			show: false,
		}
	},
	props: ['title']

};
</script>

<style>
</style>