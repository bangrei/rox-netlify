<script setup>
import { getRadialBarChartConfig } from '@core/libs/apex-chart/apexCharConfig'
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'
import { deviceReport } from '@/bloc/services/analyticsService'
import { hexToRgb } from '@layouts/utils'

const vuetifyTheme = useTheme()

const colorVariables = themeColors => {
	const themeSecondaryTextColor = `rgba(${hexToRgb(themeColors.colors['on-surface'])},${themeColors.variables['medium-emphasis-opacity']})`
	const themeDisabledTextColor = `rgba(${hexToRgb(themeColors.colors['on-surface'])},${themeColors.variables['disabled-opacity']})`
	const themeBorderColor = `rgba(${hexToRgb(String(themeColors.variables['border-color']))},${themeColors.variables['border-opacity']})`
	const themePrimaryTextColor = `rgba(${hexToRgb(themeColors.colors['on-surface'])},${themeColors.variables['high-emphasis-opacity']})`

	return { themeSecondaryTextColor, themeDisabledTextColor, themeBorderColor, themePrimaryTextColor }
}

const chartConfig = (themeColors, chartLabels) => {
	const radialBarColors = {
		series1: '#fdd835',
		series2: '#32baff',
		series3: '#00d4bd',
		series4: '#7367f0',
		series5: '#FFA1A1',
	}

	const { themeSecondaryTextColor, themePrimaryTextColor } = colorVariables(themeColors)

	return {
		stroke: { lineCap: 'round' },

		// labels: ['Comments', 'Replies', 'Shares'],
		labels: chartLabels,
		legend: {
			show: true,
			position: 'bottom',
			labels: {
				colors: themeSecondaryTextColor,
			},
			markers: {
				offsetX: -3,
			},
			itemMargin: {
				vertical: 3,
				horizontal: 10,
			},
		},
		colors: [radialBarColors.series1, radialBarColors.series2, radialBarColors.series3, radialBarColors.series4, radialBarColors.series5],
		plotOptions: {
			radialBar: {
				hollow: { size: '30%' },
				track: {
					margin: 15,
					background: themeColors.colors['grey-100'],
				},
				dataLabels: {
					name: {
						fontSize: '1.25rem',
					},
					value: {
						fontSize: '1rem',
						color: themeSecondaryTextColor,
					},

					total: {
						show: true,
						fontWeight: 400,
						label: 'Total Events',
						fontSize: '1.125rem',
						color: themePrimaryTextColor,
						formatter(w) {
							const totalValue = w.globals.seriesTotals.reduce((a, b) => {
								return a + b
							}, 0) / w.globals.series.length

							if (totalValue % 1 === 0)
								return `${totalValue}`
							else
								return `${totalValue.toFixed(2)}`
						},
					},
				},
			},
		},
		grid: {
			// padding: {
			// 	top: -30,
			// 	bottom: -25,
			// },
		},
	}
}

// const series = [
// 	80,
// 	50,
// 	35,
// ]

const statisticsChartConfig = computed(() => chartConfig(vuetifyTheme.current.value, deviceLabels.value))

const deviceLabels = ref([])

const series = ref([])

const getDeviceReport = async () => {
	try {
		const response = await deviceReport()

		console.log(response)

		// take top 5
		const formattedResponse = response?.rows.slice(0, 5).map(row => {
			return {
				name: row[0].value,
				count: parseInt(row[1].value),
			}
		})

		series.value = formattedResponse.map(it=> it.count)
		deviceLabels.value = formattedResponse.map(it=> it.name)
	} catch (error) {
		console.log(error)
	}
}

onMounted(async () => {
	await getDeviceReport()
})
</script>

<template>
  <!-- Only render Apex chart once the response from API is resolved -->
  <p v-if="series.length < 1">
    loading ..
  </p>
  <VueApexCharts
    v-else
    type="pie"
    height="350"
    :options="statisticsChartConfig"
    :series="series"
  />
</template>
