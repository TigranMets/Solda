import React from "react";
import { Line } from "react-chartjs-2";

const Chart = () => {
  const dataset2 = {
    label: "Second Line", // Название второй линии
    data: [10, 12, 13, 14, 15], // Данные для второй линии
    fill: false, // Отключение заливки области под линией
    backgroundColor: "rgba(0, 0, 255, 0.2)", // Цвет фона для второй линии
    borderColor: "blue", // Цвет границы для второй линии
  };

  // Обновите данные графика, добавив новый набор данных
  const updatedChartData = {
    labels: ["January", "February", "March", "April", "May"], // Обновите метки оси x
    datasets: [dataset2], // Добавьте новый набор данных//
  };
  const chartOptions = {
    scales: {
      x: {
        type: "category",
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        borderColor: "red",
      },
    },
  };

  return (
    <div>
      <Line data={updatedChartData} options={chartOptions} />
    </div>
  );
};

export default Chart;
