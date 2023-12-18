<script setup>
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { hexToRgb } from '@layouts/utils'
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()
const { theme } = useThemeConfig()

// Birthday Chart
const options = controlledComputed(theme, () => {
	const currentTheme = ref(vuetifyTheme.current.value.colors)
	const variableTheme = ref(vuetifyTheme.current.value.variables)
	const disabledColor = `rgba(${ hexToRgb(currentTheme.value['on-surface']) },${ variableTheme.value['disabled-opacity'] })`

	return {
		chart: {
			parentHeightOffset: 0,
			toolbar: { show: false },
		},
		plotOptions: {
			bar: {
				borderRadius: 4,
				distributed: true,
				columnWidth: '60%',
				endingShape: 'rounded',
				startingShape: 'rounded',
			},
		},
		legend: { show: false },
		dataLabels: { enabled: false },
		colors: [
			`rgba(${ hexToRgb(currentTheme.value.primary) }, 0.1)`,
			`rgba(${ hexToRgb(currentTheme.value.primary) }, 0.1)`,
			`rgba(${ hexToRgb(currentTheme.value.primary) }, 0.1)`,
			`rgba(${ hexToRgb(currentTheme.value.primary) }, 0.1)`,
			currentTheme.value.primary,
			`rgba(${ hexToRgb(currentTheme.value.primary) }, 0.1)`,
			`rgba(${ hexToRgb(currentTheme.value.primary) }, 0.1)`,
		],
		states: {
			hover: { filter: { type: 'none' } },
			active: { filter: { type: 'none' } },
		},
		xaxis: {
			categories: [
				'JAN',
				'FEB',
				'MAR',
				'APR',
				'MAY',
				'JUN',
				'JUL',
				'AUG',
				'SEP',
				'OCT',
				'NOV',
			],
			axisTicks: { show: false },
			crosshairs: { opacity: 0 },
			axisBorder: { show: false },
			tickPlacement: 'on',
			labels: {
				style: {
					fontSize: '12px',
					colors: disabledColor,
				},
			},
		},
		yaxis: { show: false },
		grid: {
			show: false,
			padding: {
				top: -15,
				left: -10,
				right: -10,
			},
		},
		tooltip: { enabled: false },
	}
})

const series = [{
	data: [
		40,
		60,
		50,
		60,
		90,
		40,
		50,
		100,
		90,
		30,
		110,
	],
}]

const birthdayDatas = [
	{
		avatar: {
			icon: 'mdi-fire',
			color: 'primary',
		},
		title: '350',
		subtitle: 'Birthday This month',
	},
]

// Page View
const pageViewsByUrl = [
	{
		abbr: 'US',
		amount: 'Homepage',
		url: 'www.frasersexperience/loremipsum/...',
		change: '+25.8%',
		views: '894k',
		color: 'success',
	},
	{
		abbr: 'UK',
		amount: 'Event',
		url: 'www.frasersexperience/loremipsum/...',
		change: '-6.2%',
		views: '645k',
		color: 'error',
	},
	{
		abbr: 'IN',
		amount: 'Shop',
		url: 'www.frasersexperience/loremipsum/...',
		change: '+12.4%',
		views: '148k',
		color: 'warning',
	},
	{
		abbr: 'JA',
		amount: 'Voucher',
		url: 'www.frasersexperience/loremipsum/...',
		change: '-11.9%',
		views: '86k',
		color: 'secondary',
	},
	{
		abbr: 'KO',
		amount: 'Cart',
		url: 'www.frasersexperience/loremipsum/...',
		change: '+16.2%',
		views: '42k',
		color: 'error',
	},
	{
		abbr: 'Ch',
		amount: 'Payment',
		url: 'www.frasersexperience/loremipsum/...',
		change: '+14.8%',
		views: '8k',
		color: 'error',
	},
]

const topOccupations = [
	{
		abbr: 'U',
		amount: '86',
		url: 'Unemployed',
		change: '+25.8%',
		views: '894k',
		color: 'success',
	},
	{
		abbr: 'D',
		amount: '70',
		url: 'Doctor',
		change: '+25.8%',
		views: '894k',
		color: 'error',
	},
	{
		abbr: 'A',
		amount: '60',
		url: 'Architect',
		change: '+25.8%',
		views: '894k',
		color: 'warning',
	},
	{
		abbr: 'D',
		amount: '55',
		url: 'Designer',
		change: '-11.9%',
		views: '86k',
		color: 'secondary',
	},
	{
		abbr: 'B',
		amount: '45',
		url: 'Businessman',
		change: '+16.2%',
		views: '42k',
		color: 'error',
	},
	{
		abbr: 'O',
		amount: '34',
		url: 'Others',
		change: '+14.8%',
		views: '8k',
		color: 'error',
	},
]

// Top purchases
const topPurchases = [
	{
		abbr: 'U',
		amount: 'Patagonia',
		url: 'Shirt',
		change: '+25.8%',
		views: '+$24,820',
		color: 'success',
	},
	{
		abbr: 'D',
		amount: 'Deuter',
		url: 'Jacket',
		change: '+25.8%',
		views: '-$1,250',
		color: 'error',
	},
	{
		abbr: 'A',
		amount: 'Quicksilver',
		url: 'Jacket',
		change: '+25.8%',
		views: '-$99',
		color: 'warning',
	},
	{
		abbr: 'D',
		amount: 'Poler',
		url: 'Jacket',
		change: '-11.9%',
		views: '-$82',
		color: 'secondary',
	},
	{
		abbr: 'B',
		amount: 'North Face',
		url: 'Jacket',
		change: '+16.2%',
		views: '+$8,934',
		color: 'error',
	},
	{
		abbr: 'O',
		amount: 'Deuter',
		url: 'Jackets',
		change: '+14.8%',
		views: '-$399',
		color: 'error',
	},
]

const eventNames = [
	{
		amount: 'page_view',
		change: '+25.8%',
		views: '894k',
		color: 'success',
	},
	{
		amount: 'session_start',
		change: '+25.8%',
		views: '894k',
		color: 'error',
	},
	{
		amount: 'user_engagement',
		change: '+25.8%',
		views: '894k',
		color: 'warning',
	},
	{
		amount: 'first_visit',
		change: '-11.9%',
		views: '86k',
		color: 'secondary',
	},
	{
		amount: 'scroll',
		change: '+16.2%',
		views: '42k',
		color: 'error',
	},
]

// Popular Area
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

const chartSeries = [{
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

const websiteStatistics = [
	{
		title: 'Frasers Exp',
		color: 'success',
		traffic: '86,471',
		percentage: '-15',
	},
	{
		title: 'Causeway Point',
		color: 'primary',
		traffic: '57,484',
		percentage: '+85',
	},
	{
		title: 'Northpoint City',
		color: 'warning',
		traffic: '2,534',
		percentage: '+48',
	},
	{
		title: 'Waterway Point',
		color: 'error',
		traffic: '977',
		percentage: '-36',
	},
]

// Ticket and Event
const earnings = [
	{
		title: 'Gudetama',
		subtitle: 'Vuejs, React & HTML',
		amount: '$24,895.65',
		progress: 'primary',
	},
	{
		title: 'We Bare Bears',
		subtitle: 'Sketch, Figma & XD',
		amount: '$8,6500.20',
		progress: 'info',
	},
	{
		title: 'Christmas Xprerience',
		subtitle: 'HTML & Anguler',
		amount: '$1,2450.80',
		progress: 'secondary',
	},
]

// Interest Overview
const interestOptions = controlledComputed(theme, () => {
	const currentTheme = ref(vuetifyTheme.current.value.colors)
	const variableTheme = ref(vuetifyTheme.current.value.variables)
	const secondaryTextColor = `rgba(${ hexToRgb(currentTheme.value['on-surface']) },${ variableTheme.value['medium-emphasis-opacity'] })`
	const primaryTextColor = `rgba(${ hexToRgb(currentTheme.value['on-surface']) },${ variableTheme.value['high-emphasis-opacity'] })`

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
		labels: [
			'Apparel',
			'Electronics',
			'FMCG',
			'Other Sales',
		],
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
							formatter: value => `${ value }k`,
						},
						total: {
							show: true,
							label: 'Weekly Sales',
							fontSize: '12px',
							color: secondaryTextColor,
							formatter: value => `${ value.globals.seriesTotals.reduce((total, num) => total + num) }k`,
						},
					},
				},
			},
		},
	}
})

const interestSeries = [
	12,
	25,
	13,
	50,
]

const interestOverview = [
	{
		product: 'Apparel',
		sales: '$1,840',
	},
	{
		product: 'Electronic',
		sales: '$11,420',
	},
	{
		product: 'FMCG',
		sales: '$1,840',
	},
	{
		product: 'Other Sales',
		sales: '$11,420',
	},
]

// gender
const genderOptions = controlledComputed(theme, () => {
	const currentTheme = ref(vuetifyTheme.current.value.colors)
	const variableTheme = ref(vuetifyTheme.current.value.variables)
	const secondaryTextColor = `rgba(${ hexToRgb(currentTheme.value['on-surface']) },${ variableTheme.value['medium-emphasis-opacity'] })`
	const primaryTextColor = `rgba(${ hexToRgb(currentTheme.value['on-surface']) },${ variableTheme.value['high-emphasis-opacity'] })`

	return {
		chart: { sparkline: { enabled: true } },
		labels: [
			'Male',
			'Female',
		],
		legend: { show: false },
		stroke: { lineCap: 'round' },
		colors: [
			currentTheme.value.primary,
			currentTheme.value.success,
			currentTheme.value.warning,
		],
		states: {
			hover: { filter: { type: 'none' } },
			active: { filter: { type: 'none' } },
		},
		plotOptions: {
			radialBar: {
				hollow: { size: '40%' },
				track: {
					background: 'transparent',
					margin: 10,
				},
				dataLabels: {
					name: {
						offsetY: 28,
						color: secondaryTextColor,
					},
					value: {
						fontSize: '2.125rem',
						offsetY: -12,
						color: primaryTextColor,
						formatter(value) {
							return `${ value }k`
						},
					},
					total: {
						show: true,
						label: `Total in ${ new Date().getFullYear() }`,
						color: secondaryTextColor,
						fontSize: '12px',
						formatter(value) {
							return `${ value.globals.seriesTotals.reduce((total, num) => total + num) }`
						},
					},
				},
			},
		},
	}
})

const genderSeries = [
	856,
	345,
]
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="3"
      sm="6"
    >
      <VCard>
        <VCardItem>
          <VCardTitle>Birthday</VCardTitle>
          <VCardSubtitle>Total 854 members</VCardSubtitle>

          <template #append>
            <div class="mt-n7 me-n3">
              <MoreBtn />
            </div>
          </template>
        </VCardItem>

        <VCardText>
          <VueApexCharts
            type="bar"
            :options="options"
            :series="series"
            :height="240"
          />
        </VCardText>

        <VCardText class="d-flex justify-space-around">
          <div
            v-for="data in birthdayDatas"
            :key="data.title"
            class="d-flex align-center me-3"
          >
            <div>
              <VAvatar
                rounded
                :color="data.avatar.color"
                variant="tonal"
                class="me-4"
              >
                <VIcon :icon="data.avatar.icon" />
              </VAvatar>
            </div>

            <div>
              <h6 class="text-base font-weight-medium">
                {{ data.title }}
              </h6>
              <span class="text-xs text-no-wrap">{{ data.subtitle }}</span>
            </div>
          </div>
        </VCardText>
      </VCard>

      <!-- Top Occupations -->
      <VCard class="mt-6">
        <VCardItem>
          <VCardTitle>Top Occupations</VCardTitle>

          <template #append>
            <a
              href="javascript:void(0)"
              class="text-sm font-weight-medium"
            >View All</a>
          </template>
        </VCardItem>

        <VCardText>
          <VList class="card-list">
            <VListItem
              v-for="data in topOccupations"
              :key="data.url"
            >
              <template #prepend>
                <VAvatar
                  size="40"
                  variant="tonal"
                  :color="data.color"
                  class="me-3"
                >
                  {{ data.abbr }}
                </VAvatar>
              </template>


              <VListItemTitle class="mb-1">
                <span class="text-sm font-weight-medium">{{ data.amount }}</span>
                <VIcon
                  size="24"
                  :color="data.change.charAt(0) === '+' ? 'success' : 'error'"
                  class="mx-1"
                >
                  {{ data.change.charAt(0) === '+' ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                </VIcon>
                <span :class="`text-xs ${data.change.charAt(0) === '+' ? 'text-success' : 'text-error'}`">
                  {{ data.change.slice(1) }}
                </span>
              </VListItemTitle>

              <VListItemSubtitle>
                <span class="text-xs">
                  {{ data.url }}
                </span>
              </VListItemSubtitle>

              <template #append>
                <div>
                  <h4 class="font-weight-medium">
                    {{ data.views }}
                  </h4>
                  <span class="text-xs text-medium-emphasis">Members</span>
                </div>
              </template>
            </VListItem>
          </VList>
        </VCardText>
      </VCard>
    </VCol>

    <VCol
      cols="12"
      md="3"
      sm="6"
    >
      <VCard>
        <VCardItem>
          <VCardTitle>Page View</VCardTitle>

          <template #append>
            <a
              href="javascript:void(0)"
              class="text-sm font-weight-medium"
            >View All</a>
          </template>
        </VCardItem>

        <VCardText>
          <VList class="card-list">
            <VListItem
              v-for="data in pageViewsByUrl"
              :key="data.url"
            >
              <!--
                <template #prepend>
                <VAvatar
                size="40"
                variant="tonal"
                :color="data.color"
                class="me-3"
                >
                {{ data.abbr }}
                </VAvatar>
                </template>
              -->

              <VListItemTitle class="mb-1">
                <span class="text-sm font-weight-medium">{{ data.amount }}</span>
                <VIcon
                  size="24"
                  :color="data.change.charAt(0) === '+' ? 'success' : 'error'"
                  class="mx-1"
                >
                  {{ data.change.charAt(0) === '+' ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                </VIcon>
                <span :class="`text-xs ${data.change.charAt(0) === '+' ? 'text-success' : 'text-error'}`">
                  {{ data.change.slice(1) }}
                </span>
              </VListItemTitle>

              <VListItemSubtitle>
                <span class="text-xs">
                  {{ data.url }}
                </span>
              </VListItemSubtitle>

              <template #append>
                <div>
                  <h4 class="font-weight-medium">
                    {{ data.views }}
                  </h4>
                  <span class="text-xs text-medium-emphasis">Views</span>
                </div>
              </template>
            </VListItem>
          </VList>
        </VCardText>
      </VCard>

      <!-- Event Names -->
      <VCard class="mt-6">
        <VCardItem>
          <VCardTitle>Event Names</VCardTitle>

          <template #append>
            <a
              href="javascript:void(0)"
              class="text-sm font-weight-medium"
            >View All</a>
          </template>
        </VCardItem>

        <VCardText>
          <VList class="card-list">
            <VListItem
              v-for="data in eventNames"
              :key="data.url"
            >
              <!--
                <template #prepend>
                <VAvatar
                size="40"
                variant="tonal"
                :color="data.color"
                class="me-3"
                >
                {{ data.abbr }}
                </VAvatar>
                </template>
              -->


              <VListItemTitle class="mb-1">
                <span class="text-sm font-weight-medium">{{ data.amount }}</span>
                <VIcon
                  size="24"
                  :color="data.change.charAt(0) === '+' ? 'success' : 'error'"
                  class="mx-1"
                >
                  {{ data.change.charAt(0) === '+' ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                </VIcon>
                <span :class="`text-xs ${data.change.charAt(0) === '+' ? 'text-success' : 'text-error'}`">
                  {{ data.change.slice(1) }}
                </span>
              </VListItemTitle>

              <!--
                <VListItemSubtitle>
                <span class="text-xs">
                {{ data.url }}
                </span>
                </VListItemSubtitle>
              -->

              <template #append>
                <div>
                  <h4 class="font-weight-medium">
                    1.68%
                  </h4>
                  <span class="text-xs text-medium-emphasis">Avg Event Count</span>
                </div>
              </template>
            </VListItem>
          </VList>
        </VCardText>
      </VCard>
    </VCol>

    <VCol
      cols="12"
      md="3"
      sm="6"
    >
      <VCard>
        <VCardItem>
          <VCardTitle>Popular Area</VCardTitle>

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
                4,590
              </h3>
              <span class="text-xs">Total Purchase</span>
            </div>
            <div style="max-width: 7.5rem; height: 5rem;">
              <VueApexCharts
                :options="chartOptions"
                :series="chartSeries"
              />
            </div>
          </div>

          <div
            v-for="data in websiteStatistics"
            :key="data.title"
            class="statistics-table d-flex align-center"
          >
            <VBadge
              :color="data.color"
              variant="elevated"
              class="badge-size"
            />

            <h6 class="text-sm font-weight-regular">
              {{ data.title }}
            </h6>
            <VSpacer />
            <h6 class="text-sm font-weight-medium me-6">
              {{ data.traffic }}
            </h6>
            <h6 class="text-sm font-weight-medium me-1">
              {{ data.percentage.slice(1) }}%
            </h6>
            <VIcon
              :size="24"
              :color="data.percentage.charAt(0) === '+' ? 'success' : 'error'"
            >
              {{ data.percentage.charAt(0) === '+' ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
            </VIcon>
          </div>
        </VCardText>
      </VCard>

      <!-- Top Purchase -->
      <VCard class="mt-6">
        <VCardItem>
          <VCardTitle>Top Purchase</VCardTitle>

          <template #append>
            <a
              href="javascript:void(0)"
              class="text-sm font-weight-medium"
            >View All</a>
          </template>
        </VCardItem>

        <VCardText>
          <VList class="card-list">
            <VListItem
              v-for="data in topPurchases"
              :key="data.url"
            >
              <template #prepend>
                <VAvatar
                  size="40"
                  variant="tonal"
                  :color="data.color"
                  class="me-3"
                >
                  {{ data.abbr }}
                </VAvatar>
              </template>


              <VListItemTitle class="mb-1">
                <span class="text-sm font-weight-medium">{{ data.amount }}</span>
                <!--
                  <VIcon
                  size="24"
                  :color="data.change.charAt(0) === '+' ? 'success' : 'error'"
                  class="mx-1"
                  >
                  {{ data.change.charAt(0) === '+' ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                  </VIcon>
                  <span :class="`text-xs ${data.change.charAt(0) === '+' ? 'text-success' : 'text-error'}`">
                  {{ data.change.slice(1) }}
                  </span>
                -->
              </VListItemTitle>

              <VListItemSubtitle>
                <span class="text-xs">
                  {{ data.url }}
                </span>
              </VListItemSubtitle>

              <template #append>
                <div class="d-flex">
                  <h4 class="font-weight-medium">
                    {{ data.views }}
                  </h4>
                  <VIcon
                    size="24"
                    :color="data.change.charAt(0) === '+' ? 'success' : 'error'"
                    class="mx-1"
                  >
                    {{ data.change.charAt(0) === '+' ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                  </VIcon>
                <!--
                  <span :class="`text-xs ${data.change.charAt(0) === '+' ? 'text-success' : 'text-error'}`">
                  {{ data.change.slice(1) }}
                  </span>
                -->
                </div>
              </template>
            </VListItem>
          </VList>
        </VCardText>
      </VCard>
    </VCol>

    <!-- Ticket and Event -->
    <VCol
      cols="12"
      md="3"
      sm="6"
    >
      <VCard>
        <VCardItem>
          <VCardTitle>Events</VCardTitle>

          <template #append>
            <div class="me-n3">
              <MoreBtn />
            </div>
          </template>
        </VCardItem>

        <VCardText class="pt-4">
          <div class="d-flex align-center">
            <h4 class="text-h4 me-2">
              $24,895
            </h4>

            <span class="text-success">
              <VIcon
                size="30"
                icon="mdi-menu-up"
              />
              <span>10%</span>
            </span>
          </div>
          <span class="text-xs">Compared to $84,325 last year</span>

          <VList class="card-list mt-9">
            <VListItem
              v-for="earning in earnings"
              :key="earning.title"
            >
              <!--
                <template #prepend>
                <VAvatar
                rounded
                :image="earning.avatar"
                />
                </template>
              -->

              <VListItemTitle class="text-sm font-weight-medium mb-1">
                {{ earning.title }}
              </VListItemTitle>
              <!--
                <VListItemSubtitle class="text-xs">
                {{ earning.subtitle }}
                </VListItemSubtitle>
              -->

              <template #append>
                <div>
                  <h6 class="text-sm font-weight-medium mb-2">
                    {{ earning.amount }}
                  </h6>
                  <VProgressLinear
                    :color="earning.progress"
                    model-value="80"
                  />
                </div>
              </template>
            </VListItem>
          </VList>
        </VCardText>
      </VCard>

      <VCard class="mt-6">
        <VCardItem>
          <VCardTitle>Interest Overview</VCardTitle>

          <template #append>
            <div class="me-n3">
              <MoreBtn />
            </div>
          </template>
        </VCardItem>

        <VCardText class="pt-4">
          <VRow class="d-flex flex-column">
            <VCol cols="12">
              <VueApexCharts
                type="donut"
                :options="interestOptions"
                :series="interestSeries"
                :height="220"
              />
            </VCol>

            <VCol cols="12">
              <div class="d-flex align-center">
                <div class="me-3">
                  <VAvatar
                    rounded
                    color="primary"
                    variant="tonal"
                  >
                    <VIcon icon="mdi-currency-usd" />
                  </VAvatar>
                </div>

                <div>
                  <p class="mb-0">
                    Number of Sales
                  </p>
                  <h6 class="text-h6">
                    $86,400
                  </h6>
                </div>
              </div>

              <VDivider class="my-3" />
              <VRow>
                <VCol
                  v-for="sale in interestOverview"
                  :key="sale.product"
                  cols="6"
                >
                  <p class="mb-1">
                    <VIcon
                      icon="mdi-checkbox-blank-circle"
                      color="primary"
                      size="12"
                      class="me-2"
                    />
                    <span>{{ sale.product }}</span>
                  </p>
                  <p class="text-base font-weight-medium mb-0">
                    {{ sale.sales }}
                  </p>
                </VCol>
              </VRow>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>

      <VCard class="mt-6">
        <VCardItem>
          <VCardTitle>Gender</VCardTitle>

          <template #append>
            <div class="me-n3">
              <MoreBtn />
            </div>
          </template>
        </VCardItem>

        <VCardText>
          <VueApexCharts
            type="radialBar"
            :options="genderOptions"
            :series="genderSeries"
            :height="243"
          />

          <div class="d-flex justify-space-around mt-2">
            <div>
              <div class="d-flex align-center">
                <VIcon
                  size="12"
                  color="success"
                  icon="mdi-checkbox-blank-circle"
                  class="me-1"
                />
                <h6 class="text-sm font-weight-medium">
                  856
                </h6>
              </div>

              <span class="text-xs">New User</span>
            </div>
            <VDivider vertical />
            <div>
              <div class="d-flex align-center">
                <VIcon
                  size="12"
                  color="primary"
                  icon="mdi-checkbox-blank-circle"
                  class="me-1"
                />
                <h6 class="text-sm font-weight-medium">
                  345
                </h6>
              </div>

              <span class="text-xs">Returning</span>
            </div>
          </div>
        </VCardText>
      </VCard>
    </VCol>
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
</style>