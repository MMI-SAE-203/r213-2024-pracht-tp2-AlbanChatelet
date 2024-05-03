<script setup lang="ts">
  import type { MaisonResponse } from '@/pocketbase-types'
  import ImgPb from './ImgPb.vue'

  const props = defineProps<MaisonResponse>()
</script>



<template>
  <div class="personne-card border-2 p-1">
    <p>nom : {{ nomMaison }}</p>
    <p>prix : {{ prix }}</p>
    <p>est-il favoris ? : {{ favori ? 'oui' : 'non' }}</p>
    <p>surface : {{ surface }}</p>
    <p>adresse : {{ adresse }}</p>
    <p>image : {{ image }}</p>
  </div>
  <div>
    <!-- ... Changez <img> en : -->
    <ImgPb :record="props" :filename="image" :width="387" :height="235" class="..." />
  </div>
</template>