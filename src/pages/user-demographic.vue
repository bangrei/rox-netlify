<script setup>
import loadingJSON from "@/assets/lottieFiles/loading-lottie-animation.json"
import CityInsightChart from '@/views/aeroworx-dashboard/CityInsightChart.vue'
import CountryInsightChart from '@/views/aeroworx-dashboard/CountryInsightChart.vue'
import DeviceInsightChart from '@/views/aeroworx-dashboard/DeviceInsightChart.vue'
import { LottieAnimation } from "lottie-web-vue"

let anim = ref()

const chartDataLoaded = ref(false)

onMounted(async () => {
	// setTimeout(() => {
	// 	console.log(anim.value.goToAndPlay(150, true))
	// 	anim.value
	// }, 500)
	chartDataLoaded.value = true
})
</script>

<template>
  <VRow
    v-if="!chartDataLoaded"
    class="parent-row d-flex justify-center"
  >
    <VCol
      cols="12"
      sm="6"
    >
      <LottieAnimation
        ref="anim"
        :animation-data="loadingJSON"
        auto-play
        loop
        speed="0.6"
      />
      <p class="text-center">
        Loading chart ...
      </p>
    </VCol>
  </VRow>

  <VRow
    v-else
    class="parent-row"
  >
    <!-- <VRow> -->
    <VCol
      cols="12"
      md="6"
    >
      <VCard title="Traffic by City">
        <VCardText>
          <CityInsightChart />
        </VCardText>
      </VCard>
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VCard title="Traffic by Country">
        <VCardText>
          <CountryInsightChart />
        </VCardText>
      </VCard>
    </VCol>
    <!-- </VRow> -->

    <!-- <VRow> -->
    <VCol cols="12">
      <VCard title="Traffic by Device">
        <VCardText>
          <DeviceInsightChart />
        </VCardText>
      </VCard>
    </VCol>
    <!-- </VRow> -->
  </VRow>
</template>

<style lang="scss">
</style>