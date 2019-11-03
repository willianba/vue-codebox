import { BUTTONS } from "@/constants/buttons";

export const percentageChartData = {
  type: "doughnut",
  data: {
    labels: [BUTTONS.GOOD, BUTTONS.AVERAGE, BUTTONS.BAD],
    datasets: [
      {
        label: "Condominiums percentage",
        // TODO: Get from backend
        data: [11, 14, 5],
        backgroundColor: [
          "rgba(170, 255, 153, 0.700)",
          "rgba(255, 253, 153, 0.700)",
          "rgba(255, 153, 153, 0.700)"
        ],
        borderColor: [
          "rgba(170, 255, 153)",
          "rgba(255, 253, 153)",
          "rgba(255, 153, 153)"
        ],
        hoverBackgroundColor: [
          "rgba(170, 255, 153)",
          "rgba(255, 253, 153)",
          "rgba(255, 153, 153)"
        ]
      }
    ]
  },
  options: {
    responsive: true,
    rotation: Math.PI,
    circumference: Math.PI,
    tooltips: {
      callbacks: {
        label: (tooltipItem, data) => {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const meta = dataset._meta[Object.keys(dataset._meta)[0]];
          const total = meta.total;
          const currentValue = dataset.data[tooltipItem.index];
          const currentName = data.labels[tooltipItem.index];
          const percentage = parseFloat(
            ((currentValue / total) * 100).toFixed(1)
          );
          return `${currentName}: ${percentage}%`;
        }
      }
    }
  }
};
