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
    circumference: Math.PI
  }
};
