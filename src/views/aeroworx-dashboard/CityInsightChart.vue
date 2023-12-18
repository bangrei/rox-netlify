<script setup>
import { getDonutChartConfig } from '@core/libs/apex-chart/apexCharConfig'
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'
import { hexToRgb } from '@layouts/utils'
import { cityReport } from '@/bloc/services/analyticsService'

const vuetifyTheme = useTheme()

const colorVariables = themeColors => {
	const themeSecondaryTextColor = `rgba(${hexToRgb(themeColors.colors['on-surface'])},${themeColors.variables['medium-emphasis-opacity']})`
	const themeDisabledTextColor = `rgba(${hexToRgb(themeColors.colors['on-surface'])},${themeColors.variables['disabled-opacity']})`
	const themeBorderColor = `rgba(${hexToRgb(String(themeColors.variables['border-color']))},${themeColors.variables['border-opacity']})`
	const themePrimaryTextColor = `rgba(${hexToRgb(themeColors.colors['on-surface'])},${themeColors.variables['high-emphasis-opacity']})`

	return { themeSecondaryTextColor, themeDisabledTextColor, themeBorderColor, themePrimaryTextColor }
}

const series = ref([])

const chartConfig = (themeColors, chartLabels) => {
	const donutColors = {
		series1: '#fdd835',
		series2: '#00d4bd',
		series3: '#826bf8',
		series4: '#32baff',
		series5: '#ffa1a1',
	}

	const { themeSecondaryTextColor, themePrimaryTextColor } = colorVariables(themeColors)

	return {
		stroke: { width: 0 },
		labels: chartLabels,
		colors: [donutColors.series1, donutColors.series5, donutColors.series3, donutColors.series2],
		dataLabels: {
			enabled: true,
			formatter: val => `${parseInt(val, 10)}%`,
		},
		legend: {
			position: 'bottom',
			markers: { offsetX: -3 },
			labels: { colors: themeSecondaryTextColor },
			itemMargin: {
				vertical: 3,
				horizontal: 10,
			},
		},
		plotOptions: {
			pie: {
				donut: {
					labels: {
						show: true,
						name: {
							fontSize: '1.5rem',
						},
						value: {
							fontSize: '1.5rem',
							color: themeSecondaryTextColor,
							formatter: val => `${parseInt(val, 10)}`,
						},
					},
				},
			},
		},
		responsive: [
			{
				breakpoint: 992,
				options: {
					chart: {
						height: 380,
					},
					legend: {
						position: 'bottom',
					},
				},
			},
			{
				breakpoint: 576,
				options: {
					chart: {
						height: 320,
					},
					plotOptions: {
						pie: {
							donut: {
								labels: {
									show: true,
									name: {
										fontSize: '1rem',
									},
									value: {
										fontSize: '1rem',
									},
									total: {
										fontSize: '1rem',
									},
								},
							},
						},
					},
				},
			},
		],
	}
}

const cityChartConfig = computed(() => chartConfig(vuetifyTheme.current.value, cityLabels.value))

const cityLabels = ref([])

const getCityReport = async () => {
	try {
		const response = await cityReport()

		// take top 5
		const formattedResponse = response?.rows.slice(0, 5).map(row => {
			return {
				name: row[0].value,
				count: parseInt(row[1].value),
			}
		})

		series.value = formattedResponse.map(it=> it.count)
		cityLabels.value = formattedResponse.map(it=> it.name)
	} catch (error) {
		console.log(error)
	}
}

onMounted(async () => {
	await getCityReport()
})
</script>

<template>
  <!-- Only render Apex chart once the response from API is resolved -->
  <p v-if="series.length < 1">
    loading ..
  </p>
  <VueApexCharts
    v-else
    type="donut"
    height="410"
    :options="cityChartConfig"
    :series="series"
  />
</template>
