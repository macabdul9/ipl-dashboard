import palette from 'theme/palette';

export const data = {
  labels: 
  ['CH Gayle', 'YK Pathan', 'AB de Villiers', 'DA Warner', 'RG Sharma', 'SK Raina', 'AM Rahane', 'MS Dhoni', 'G Gambhir', 'MEK Hussey', 'V Kohli', 'V Sehwag', 'SR Watson', 'JH Kallis', 'DR Smith', 'A Mishra', 'SE Marsh', 'SR Tendulkar', 'KA Pollard', 'RA Jadeja'],
  datasets: [
    {
      // label: 'Top-20 most M.O.T.M Winners ',
      backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360", 'black',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'indigo',
      'violet'],
      data: [17, 16, 15, 14, 13, 13, 12, 12, 12, 12, 11, 11, 10, 10, 10,  9,  9,
        8,  8,  7]
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
