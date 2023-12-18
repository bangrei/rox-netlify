<script setup>
import ApexChartCustom1 from '@/views/charts/apex-chart/ApexChartCustom1.vue'
import ChartJsPolarAreaChart from '@/views/charts/chartjs/ChartJsPolarAreaChart.vue'
import * as demoCode from '@/views/demos/forms/tables/data-table/demoCodeDataTable'

const chartJsCustomColors = {
	white: '#fff',
	yellow: '#ffe802',
	primary: '#836af9',
	areaChartBlue: '#2c9aff',
	barChartYellow: '#ffcf5c',
	polarChartGrey: '#4f5d70',
	polarChartInfo: '#299aff',
	lineChartYellow: '#d4e157',
	polarChartGreen: '#28dac6',
	lineChartPrimary: '#9e69fd',
	lineChartWarning: '#ff9800',
	horizontalBarInfo: '#26c6da',
	polarChartWarning: '#ff8131',
	scatterChartGreen: '#28c76f',
	warningShade: '#ffbd1f',
	areaChartBlueLight: '#84d0ff',
	areaChartGreyLight: '#edf1f4',
	scatterChartWarning: '#ff9f43',
}

const totalProfit = {
	title: 'Vcard Users',
	color: 'secondary',
	icon: 'mdi-poll',
	stats: '221',
	change: 12,
	subtitle: 'Total number of Vcard holders',
}

const totalProfit1 = {
	title: 'Vcard Accessed',
	color: 'secondary',
	icon: 'mdi-chart-arc',
	stats: '615',
	change: 36,
	subtitle: 'Total number of Vcard accessed by users',
}

const totalProfit2 = {
	title: 'Access Via QR',
	color: 'secondary',
	icon: 'mdi-chart-areaspline',
	stats: '130',
	change: 12,
	subtitle: 'Total number of access via QR',
}
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="4"
    >
      <CardStatisticsVertical v-bind="totalProfit" />
    </VCol>
    <VCol
      cols="12"
      sm="4"
    >
      <CardStatisticsVertical v-bind="totalProfit1" />
    </VCol>
    <VCol
      cols="12"
      sm="4"
    >
      <CardStatisticsVertical v-bind="totalProfit2" />
    </VCol>
  </VRow>
  <VRow>
    <VCol cols="12">
      <AppCardCode
        title="Top 3 Accessed Vcard"
        :code="demoCode.cellSlot"
      >
        <DemoDataTableCellSlot />
      </AppCardCode>
    </VCol>
  </VRow>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VCardText>
        <ApexChartCustom1 />
      </VCardText>
    </VCol>
    <VCol
      cols="12"
      md="6"
    >
      <VCard title="Organisation">
        <VCardText>
          <ChartJsPolarAreaChart :colors="chartJsCustomColors" />
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>