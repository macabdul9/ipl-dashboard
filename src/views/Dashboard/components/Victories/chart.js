import palette from 'theme/palette';

export const data = {
  labels: 
  ['Chennai Super Kings', 'Royal Challengers Bangalore', 'Mumbai Indians', 'Kolkata Knight Riders', 
  'Rajasthan Royals', 'Kings XI Punjab', 'Delhi Daredevils', 'Sunrisers Hyderabad', 'Deccan Chargers', 
  'Pune Warriors', 'Gujarat Lions', 'Kochi Tuskers Kerala', 'Rising Pune Supergiants'],

  datasets: [
    {
      label: 'Win',
      backgroundColor: palette.info.light,
      data: [50, 41, 39, 37, 35, 31, 30, 17, 13, 6, 4, 3, 2]
    },
    {
      label: 'Defeat',
      backgroundColor: palette.warning.light,
      data: [24, 35, 23, 25, 17, 34, 38, 13, 26, 17, 5, 4, 5]
    },

  ]
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  legend: { display: false },
  // cornerRadius: 20,
  tooltips: {
    enabled: true,
    mode: 'index',
    intersect: false,
    borderWidth: 1,
    borderColor: palette.divider,
    backgroundColor: palette.white,
    titleFontColor: palette.text.primary,
    bodyFontColor: palette.text.secondary,
    footerFontColor: palette.text.secondary
  },
  layout: { padding: 0 },
  scales: {
    xAxes: [
      {
        stacked:true,
        barThickness: 16,
        maxBarThickness: 20,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        ticks: {
          fontColor: palette.text.secondary
        },
        gridLines: {
          display: true,
          drawBorder: true
        }
      }
    ],
    yAxes: [
      {
        stacked:true,
        ticks: {
          fontColor: palette.text.secondary,
          beginAtZero: true,
          min: 0
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: palette.divider,
          drawBorder: true,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: palette.divider
        }
      }
    ]
  }
};
