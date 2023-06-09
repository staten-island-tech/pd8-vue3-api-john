<script setup>
import BarChart from '../components/BarChart.vue'
const chartData = {
  labels: [],
  datasets: [{ data: []}]
}
async function apiData() {
  const response = await fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json')
  const data = await response.json()
  console.log(data)
  barData(data)
  console.log(chartData)
}
apiData()
function barData(data) {
  data.forEach(report => {
    if (chartData.labels.includes(report.complaint_type)) {
      chartData.datasets[0].data[chartData.labels.indexOf(report.complaint_type)] += 1
    }
    else {
      chartData.labels.push(report.complaint_type)
      chartData.datasets[0].data.push(1)
    }
  })
}
</script>

<template>
  <h1></h1>
  <header>
    <BarChart :chartData="chartData"></BarChart>
  </header>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
