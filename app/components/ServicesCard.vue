<script lang="ts" setup>

defineProps<{
  title: string;
  content: string;
}>();

</script>

<template>
  <div>
    <div class="bg-blue-50 p-6 rounded-lg shadow hover:scale-105 transition">
      <h3 class="text-xl font-semibold mb-2">{{title}}</h3>
      <p>{{content}}</p>
    </div>
  </div>
</template>
