import React from "react";
import { Bar } from "react-chartjs-2";

const Bars = () => {
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true, // Начинать ось Y с 0
      },
    },
    plugins: {
      legend: {
        display: true, // Отображать легенду
      },
    },
  };

  const complexData = {
    labels: ["Label 1", "Label 2", "Label 3"], // Метки оси X
    datasets: [
      {
        type: "bar", // Используйте тип 'bar' для столбчатой диаграммы
        label: "Bar Dataset", // Название набора данных для столбчатой диаграммы
        data: [2, 5, 10], // Данные для столбчатой диаграммы
        backgroundColor: "rgba(255, 0, 0, 0.5)", // Цвет фона для столбчатой диаграммы
      },
      {
        type: "line", // Используйте тип 'line' для линейной диаграммы
        label: "Line Dataset", // Название набора данных для линейной диаграммы
        data: [5, 15, 20], // Данные для линейной диаграммы
        backgroundColor: "rgba(0, 0, 255, 0.2)", // Цвет фона для линейной диаграммы
        borderColor: "blue", // Цвет границы для линейной диаграммы
      },
    ],
  };

  return (
    <div>
      <Bar data={complexData} options={chartOptions} width={600} height={275} />
    </div>
  );
};

export default Bars;
