import palette from 'theme/palette';

export const data = {
  labels: 
  ['Chennai Super Kings',
 'Royal Challengers Bangalore',
 'Mumbai Indians',
 'Kolkata Knight Riders',
 'Rajasthan Royals',
 'Kings XI Punjab',
 'Delhi Daredevils',
 'Sunrisers Hyderabad',
 'Deccan Chargers',
 'Pune Warriors',
 'Gujarat Lions',
 'Kochi Tuskers Kerala',
 'Rising Pune Supergiants'],
  datasets: [
    {
      // label: 'Top-20 most M.O.T.M Winners ',
      backgroundColor: palette.primary.main,
      data: [50, 41, 39, 37, 35, 31, 30, 17, 13,  6,  4,  3,  2]
    },
    // {
    //   label: 'Last year',
    //   backgroundColor: palette.neutral,
    //   data: [11, 20, 12, 29, 30, 25, 13]
    // }
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
        barThickness: 16,
        maxBarThickness: 20,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        ticks: {
          fontColor: palette.text.secondary
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontColor: palette.text.secondary,
          beginAtZero: true,
          min: 0
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: palette.divider
        }
      }
    ]
  }
};
