<template>
  <div>
    <BarChart :chartData="chartData" :chartOptions="chartOptions"></BarChart>
  </div>
</template>
<script setup>
import BarChart from './components/BarChart.vue'
let chartData = {
  labels: [],
  datasets: []
}
let chartOptions = {
  responsive: true
}
async function getServiceRequests() {
  chartData = {
    labels: [],
    datasets: []
  }
  chartOptions = {
    responsive: true
  }
  let result = await fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json')
  let data = await result.json()
  makeData(data)
  console.log(chartData)
}
getServiceRequests()
function makeData(data) {
  data.forEach((issue) => {
    if (chartData.labels.includes(issue.city)) {
      chartData.datasets[chartData.labels.indexOf(issue.city)] += 1
    } else {
      chartData.labels.push(issue.city)
      chartData.datasets.push(1)
    }
  })
}
</script>

<style scoped></style>
