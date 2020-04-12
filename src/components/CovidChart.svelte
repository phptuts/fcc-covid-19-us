<script>
  import { onMount, onDestroy } from "svelte";
  import Chart from "chart.js";

  export let historicData;
  export let title;

  let hideChart = false;
  let chartElement;
  let chart;

  onMount(() => {
    if (historicData && document.body.clientWidth > 680) {
      createChart();
      return;
    }

    hideChart = true;
  });

  onDestroy(() => {
    if (chart) {
      chart.destroy();
    }
  });

  function createChart() {
    chart = new Chart(chartElement.getContext("2d"), {
      type: "line",
      data: {
        datasets: historicData
      },
      options: {
        responsive: true,
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              let label = data.datasets[tooltipItem.datasetIndex].label;
              label += ": ";

              label += tooltipItem.yLabel.toLocaleString();

              return label;
            }
          }
        },
        title: {
          display: true,
          text: title
        },
        scales: {
          xAxes: [
            {
              type: "time",
              time: {
                parser: "M/D/YY",
                tooltipFormat: "ll"
              },
              scaleLabel: {
                display: true,
                labelString: "Date"
              }
            }
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true
              },
              ticks: {
                beginAtZero: true,
                userCallback: function(value, index, values) {
                  return value.toLocaleString();
                }
              }
            }
          ]
        }
      }
    });
  }
</script>

{#if !hideChart}
  <div class="container">
    <canvas bind:this={chartElement} />
  </div>
{/if}
