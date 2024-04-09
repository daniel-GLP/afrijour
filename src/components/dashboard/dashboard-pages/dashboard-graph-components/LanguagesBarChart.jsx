import React from "react";
import { Pie } from "react-chartjs-2";
import chroma from "chroma-js";

// Importing datalabels plugin for Chart.js v2
import 'chartjs-plugin-datalabels';

const LanguagesBarChart = ({ data }) => {
  // Extracting languages from the data
  const languages = data.map((entry) => entry[8]);

  // Counting occurrences of each language
  const languageCounts = languages.reduce((counts, language) => {
    counts[language] = (counts[language] || 0) + 1;
    return counts;
  }, {});

  // Formatting data for chart
  const languageLabels = Object.keys(languageCounts);
  const languageData = Object.values(languageCounts);

  // Generating colors based on the provided color
  const baseColor = "#252973";
  const colors = chroma
    .scale([baseColor, chroma(baseColor).brighten(2)])
    .colors(languageLabels.length);

  // Calculate percentages
  const total = languageData.reduce((acc, val) => acc + val, 0);
  const percentages = languageData.map((value) => ((value / total) * 100).toFixed(2) + "%");

  // Chart options
  const chartOptions = {
    title: {
      display: true,
      text: "Languages Distribution",
      fontSize: 15,
    },
    responsive: true,
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          return percentages[ctx.dataIndex];
        },
        color: '#fff'
      }
    }
  };

  // Formatting data for chart
  const pieChartData = {
    labels: languageLabels,
    datasets: [
      {
        data: languageData,
        backgroundColor: colors,
        hoverBackgroundColor: colors.map((color) => chroma(color).darken()),
        borderWidth: 0,
      },
    ],
  };

  // Rendering the pie chart with custom labels
  const pieChart = (
    <Pie
      data={pieChartData}
      options={chartOptions}
    />
  );

  return (
    <div style={{ width: "100%", height: "auto" }}>
      {pieChart}
    </div>
  );
};

export default LanguagesBarChart;
