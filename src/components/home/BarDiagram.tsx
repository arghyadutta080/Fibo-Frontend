"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { goalCompletion } from "@/lib/redux/features/goalCounter/goalCounterSlice";
import { getWeekDates } from "@/utils/functions/getWeekDates";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarDiagram = () => {
  const percentage = useSelector(goalCompletion);
  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        min: 0,
        max: 100,
      },
    },
  };

  const labels = getWeekDates();
  // console.log(labels);

  const data = {
    labels,
    datasets: [
      {
        label: 'Percentage of Goal Completion',
        data: [percentage],
        backgroundColor: "#5A92CB",
      },
    ],
  };

  return (
    <Bar
      options={options}
      data={data}
      className="my-10 rounded-xl bg-[#282828] mx-4 left-0 right-0 p-2"
    />
  );
};

export default BarDiagram;
