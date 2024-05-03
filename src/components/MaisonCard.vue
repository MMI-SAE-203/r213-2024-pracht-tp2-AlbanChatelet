<script setup lang="ts">
  import type { MaisonRecord } from '@/types'

  defineProps<MaisonRecord>()
</script>
<template>
  <div class="personne-card border-2 p-1">
    <p>nom : {{ nomMaison }}</p>
    <p>prix : {{ prix }}</p>
    <p>est-il favoris ? : {{ favori ? 'oui' : 'non' }}</p>
    <p>surface : {{ surface }}</p>
    <p>adresse : {{ adresse }}</p>
    <p>image : {{ images }}</p>
  </div>
</template>