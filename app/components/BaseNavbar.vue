<script lang="ts" setup>
// No script logic needed for anchor scroll
</script>

<template>
<nav class="w-full bg-white/80 backdrop-blur shadow-sm fixed top-0 left-0 z-50">
	<div class="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
		<!-- Logo -->
		<a href="#" class="flex items-center gap-2">
			<!-- <img src="../assets/img/logo/nefa.svg" alt="Logo" class="h-8 w-auto"> -->
			<span class="font-bold text-xl text-blue-700">Entrümpelung SK</span>
		</a>
		<!-- Navigation Links -->
		<div class="flex gap-6">
			<a href="#leistungen" class="text-gray-700 hover:text-blue-700 font-medium transition">Leistungen</a>
			<a href="#standort" class="text-gray-700 hover:text-blue-700 font-medium transition">Standort</a>
			<a href="#kontakt" class="text-gray-700 hover:text-blue-700 font-medium transition">Kontakt</a>
		</div>
	</div>
</nav>
</template>

<style>
html {
	scroll-behavior: smooth;
}
</style>