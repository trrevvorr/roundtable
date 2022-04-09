<template>
  <div class="container">
    <apex-chart
      :options="{
        chart: {
          type: 'line',
          zoom: {
            enabled: false,
          },
          foreColor: '#ffffffb3',
          toolbar: {
            show: false,
          },
          animations: {
            animateGradually: {
              delay: 40,
            },
          },
        },
        legend: {
          position: 'top',
          onItemClick: {
            toggleDataSeries: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          categories: yAxisLabels,
          title: {
            text: 'Round',
          },
        },
        yaxis: {
          title: {
            text: 'Score',
          },
        },
        tooltip: {
          theme: 'dark',
        },
        grid: {
          row: {
            colors: ['#fff', 'transparent'],
            opacity: 0.1,
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
      }"
      :series="lineData"
    />
  </div>
</template>

<script>
export default {
  name: "LineChart",
  props: {
    rounds: Array,
    players: Array,
  },
  computed: {
    yAxisLabels() {
      return [0, ...this.rounds.map((round, index) => index + 1)];
    },
    lineData() {
      const data = {};
      this.players.forEach((player) => (data[player] = [0]));

      this.rounds.forEach((round) => {
        this.players.forEach((player) => {
          const prevScore = data[player].length
            ? data[player][data[player].length - 1]
            : 0;
          data[player].push(round[player] + prevScore);
        });
      });

      return Object.keys(data).map((player) => ({
        name: player.charAt(0).toUpperCase() + player.slice(1), // capitalize,
        data: data[player],
      }));
    },
  },
};
</script>

<style scoped>
.container {
  margin: 1rem;
}
</style>