<script setup>
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import poseM9 from '@images/cards/pose-m-9.png'
import triangleDark from '@images/misc/triangle-dark.png'
import triangleLight from '@images/misc/triangle-light.png'

const triangleBg = useGenerateImageVariant(triangleLight, triangleDark)
</script>

<template>
  <VCard
    title="Upgrade Account 👩🏻‍💻"
    subtitle="Add 15 team members"
    class="position-relative"
  >
    <VCardText>
      <h5 class="text-2xl font-weight-medium text-primary">
        $199
      </h5>
      <p>40% OFF 🤩</p>
      <VBtn size="small">
        Upgrade Plan
      </VBtn>
    </VCardText>

    <!-- Triangle Background -->
    <VImg
      :src="triangleBg"
      class="triangle-bg flip-in-rtl"
    />

    <!-- Trophy -->
    <VImg
      :src="poseM9"
      class="illustration flip-in-rtl"
    />
  </VCard>
</template>

<style lang="scss">
.v-card .triangle-bg {
  position: absolute;
  inline-size: 10.375rem;
  inset-block-end: 0;
  inset-inline-end: 0;
}

.v-card .illustration {
  position: absolute;
  inline-size: 3rem;
  inset-block-end: 1rem;
  inset-inline-end: 3rem;
}
</style>
