<script setup>
import loadingJSON from "@/assets/lottieFiles/loading-lottie-animation.json"
import { eventReport, purchaseReport, trafficSourceReport } from '@/bloc/services/analyticsService'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { hexToRgb } from '@layouts/utils'
import { LottieAnimation } from "lottie-web-vue"
import VueApexCharts from 'vue3-apexcharts'

import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()
const { theme } = useThemeConfig()

const events = ref([])
const purchases = ref([])
const trafficSources = ref([])
let anim = ref()

// cosmetic purposes only
const vuetifyUtilityColors = [
	"success",
	"primary",
	"warning",
	"error",
	"info",
	"secondary",
]

const chartOptions = {
	chart: {
		type: 'bar',
		parentHeightOffset: 0,
		toolbar: { show: false },
		sparkline: { enabled: true },
	},
	grid: { show: false },
	colors: ['rgba(var(--v-theme-primary))'],
	plotOptions: {
		bar: {
			horizontal: false,
			columnWidth: '30%',
			startingShape: 'rounded',
			endingShape: 'rounded',
			borderRadius: 4,
		},
	},
	legend: { show: false },
	dataLabels: { enabled: false },
	xaxis: {
		labels: { show: false },
		axisBorder: { show: false },
		axisTicks: { show: false },
	},
	yaxis: { show: false },
	tooltip: { enabled: false },
}

const series = [{
	name: '2020',
	data: [
		50,
		40,
		110,
		80,
		40,
		60,
		40,
	],
}]

const getEventReport = async () => {
	try {
		const response = await eventReport()

		// TODO: refactor this data mapping to service
		events.value = response?.rows.map(row => {
			return {
				name: row[0].value,
				count: row[1].value,
				avgEventPerUser: Math.floor(row[2].value * 100)/100,
			}
		})
	} catch (error) {
		console.log(error)
	}
}

const getPurchaseReport = async () => {
	try {
		const response = await purchaseReport()

		// TODO: refactor this data mapping to service
		purchases.value = response?.rows.map(row => {
			return {
				name: row[0].value,
				noAddedToCart: row[2].value,
				noPurchased: row[4].value,
			}
		})
	} catch (error) {
		console.log(error)
	}
}

const getTrafficSourceReport = async () => {
	try {
		const response = await trafficSourceReport()

		// TODO: refactor this data mapping to service
		trafficSources.value = response?.rows.map((row, index) => {
			return {
				sourceName: row[0].value,
				eventCount: parseInt(row[1].value),
				color: vuetifyUtilityColors[index],
			}
		})

		trafficSeries.value = trafficSources.value.map(it => it.eventCount)
	} catch (error) {
		console.log(error)
	}
}

const trafficOptions = controlledComputed(theme, () => {
	const currentTheme = ref(vuetifyTheme.current.value.colors)
	const variableTheme = ref(vuetifyTheme.current.value.variables)
	const secondaryTextColor = `rgba(${ hexToRgb(currentTheme.value['on-surface']) },${ variableTheme.value['medium-emphasis-opacity'] })`
	const primaryTextColor = `rgba(${ hexToRgb(currentTheme.value['on-surface']) },${ variableTheme.value['high-emphasis-opacity'] })`


	// should be dynamic
	const chartLabels = [
		"Direct",
		"Organic Social",
		"Unassigned",
		"Referral",
		"Organic Search",
		"Email",
	]

	return {
		chart: { sparkline: { enabled: true } },
		colors: [
			currentTheme.value.primary,
			`rgba(${ hexToRgb(currentTheme.value.primary) }, 0.7)`,
			`rgba(${ hexToRgb(currentTheme.value.primary) }, 0.5)`,
			currentTheme.value['grey-100'],
		],
		stroke: { width: 0 },
		legend: { show: false },
		dataLabels: { enabled: false },
		labels: chartLabels,
		states: {
			hover: { filter: { type: 'none' } },
			active: { filter: { type: 'none' } },
		},
		plotOptions: {
			pie: {
				customScale: 0.9,
				donut: {
					size: '70%',
					labels: {
						show: true,
						name: {
							offsetY: 25,
							color: secondaryTextColor,
						},
						value: {
							offsetY: -15,
							fontWeight: 600,
							fontSize: '24px',
							color: primaryTextColor,
							formatter: value => `${ value }`,
						},
						total: {
							show: true,
							label: 'Total Events',
							fontSize: '12px',
							color: secondaryTextColor,
							formatter: value => `${ value.globals.seriesTotals.reduce((total, num) => total + num) }`,
						},
					},
				},
			},
		},
	}
})

const trafficSeries = ref([])

const totalEvents = computed(() => {
	return trafficSources.value.map(it => it.eventCount).reduce((total, num) => total + num, 0)
})

const chartDataLoaded = ref(false)

onMounted(async () => {
	setTimeout(() => {
		console.log(anim.value.goToAndPlay(150, true))
		anim.value
	}, 500)
	await getEventReport()
	await getPurchaseReport()
	await getTrafficSourceReport()
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
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <!-- Event Names -->
        <VCard class="mt-6">
          <VCardItem>
            <VCardTitle>Event Names</VCardTitle>
            <template #append>
              <div class="me-n3">
                <MoreBtn />
              </div>
            </template>
          </VCardItem>

          <VCardText>
            <VList class="card-list">
              <VListItem
                v-for="event in events"
                :key="event.name"
              >
                <VListItemTitle class="mb-1">
                  <span class="text-sm font-weight-medium">{{ event.name }}</span>
                </VListItemTitle>

                <VListItemSubtitle>
                  <span class="text-xs">
                    {{ event.count }} times
                  </span>
                </VListItemSubtitle>

                <template #append>
                  <div>
                    <h4 class="font-weight-medium">
                      {{ event.avgEventPerUser }}
                    </h4>
                    <span class="text-xs text-medium-emphasis">Avg Event Count / User</span>
                  </div>
                </template>
              </VListItem>
            </VList>
          </VCardText>
        </VCard>
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <!-- Top Purchases -->
        <VCard class="mt-6">
          <VCardItem>
            <VCardTitle>Top Purchases</VCardTitle>
            <template #append>
              <div class="me-n3">
                <MoreBtn />
              </div>
            </template>
          </VCardItem>

          <VCardText>
            <VList class="card-list">
              <VListItem
                v-for="purchase in purchases"
                :key="purchase.name"
              >
                <VListItemTitle class="mb-1">
                  <span class="text-sm font-weight-medium">{{ purchase.name }}</span>
                </VListItemTitle>

                <VListItemSubtitle>
                  <span class="text-xs">
                    Added to cart {{ purchase.noAddedToCart }} times
                  </span>
                </VListItemSubtitle>

                <template #append>
                  <div class="d-flex">
                    <h4 class="font-weight-medium">
                      No. sold {{ purchase.noPurchased }} item/s
                    </h4>
                  </div>
                </template>
              </VListItem>
            </VList>
          </VCardText>
        </VCard>
        <VCard class="mt-6">
          <VCardItem>
            <VCardTitle>Traffic Statistics</VCardTitle>

            <template #append>
              <div class="me-n3">
                <MoreBtn />
              </div>
            </template>
          </VCardItem>

          <VCardText class="pt-4">
            <div class="d-flex align-center justify-space-between mb-6">
              <div>
                <h3 class="text-h3">
                  {{ totalEvents }}
                </h3>
                <span class="text-xs">Total Events</span>
              </div>
              <div style="max-width: 7.5rem; height: 5rem;">
                <VueApexCharts
                  :options="chartOptions"
                  :series="series"
                />
              </div>
            </div>

            <div
              v-for="data in trafficSources"
              :key="data.sourceName"
              class="statistics-table d-flex align-center"
            >
              <VBadge
                :color="data.color"
                variant="elevated"
                class="badge-size"
              />

              <h6 class="text-sm font-weight-regular">
                {{ data.sourceName }}
              </h6>
              <VSpacer />
              <h6 class="text-sm font-weight-medium me-6">
                {{ data.eventCount }}
              </h6>
              <!--
                <h6 class="text-sm font-weight-medium me-1">
                {{ data.percentage.slice(1) }}%
                </h6>
                <VIcon
                :size="24"
                :color="data.percentage.charAt(0) === '+' ? 'success' : 'error'"
                >
                {{ data.percentage.charAt(0) === '+' ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                </VIcon>
              -->
            </div>
          </VCardText>
        </VCard>
      </Vcol>
    </VRow>
  </VRow>
</template>

<style lang="scss">
// for popular area
.chart-wrapper {
  max-inline-size: 130px;
}

.statistics-table {
  border-block-start: solid 1px rgba(var(--v-border-color), var(--v-border-opacity));
  padding-block: 0.7rem;

  .badge-size {
    block-size: 0.4375rem;
    inline-size: 0.75rem;
    margin-inline-end: 0.8rem;

    .v-badge__badge {
      block-size: 0.8125rem;
      min-inline-size: 0.8125rem;
    }
  }
}

// for ticket and event
.card-list {
  --v-card-list-gap: 2.5rem;
}

// website statistic
.chart-wrapper {
  max-inline-size: 130px;
}

.statistics-table {
  border-block-start: solid 1px rgba(var(--v-border-color), var(--v-border-opacity));
  padding-block: 0.7rem;

  .badge-size {
    block-size: 0.4375rem;
    inline-size: 0.75rem;
    margin-inline-end: 0.8rem;

    .v-badge__badge {
      block-size: 0.8125rem;
      min-inline-size: 0.8125rem;
    }
  }
}
</style>