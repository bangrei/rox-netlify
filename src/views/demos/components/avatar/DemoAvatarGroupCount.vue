<script setup>
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
</script>

<template>
  <div class="v-avatar-group">
    <VAvatar>
      <VImg :src="avatar3" />
      <VTooltip
        activator="parent"
        location="start"
      >
        Peter Harper
      </VTooltip>
    </VAvatar>

    <VAvatar>
      <VImg :src="avatar4" />
      <VTooltip
        activator="parent"
        location="start"
      >
        Vivian Padilla
      </VTooltip>
    </VAvatar>

    <VAvatar>
      <VImg :src="avatar5" />
      <VTooltip
        activator="parent"
        location="start"
      >
        Scott Wells
      </VTooltip>
    </VAvatar>

    <VAvatar color="grey-200">
      <span class="text-secondary"> +3</span>
      <VTooltip
        activator="parent"
        location="top"
      >
        3 and more
      </VTooltip>
    </VAvatar>
  </div>
</template>
