import palette from 'theme/palette';
import data from './data.json';


export const Data = {
  labels: data['label'],

  datasets: [
    {
      label: '2008',
      backgroundColor: '#8C735C',
      data: data['2008']
    },
    {
      label: '2009',
      backgroundColor: '#B68569',
      data: data['2009']
    },

    {
      label: '2010',
      backgroundColor: '#67B2E5',
      data: data['2010']
    },
    {
      label: '2011',
      backgroundColor: 'skyblue',
      data: data['2011']
    },
    {
      label: '2012',
      backgroundColor: '#B9A3BC',
      data: data['2012']
    },
    {
      label: '2013',
      backgroundColor: '#29AA9E',
      data: data['2013']
    },
    {
      label: '2014',
      backgroundColor: '#CCECF1',
      data: data['2014']
    },
    {
      label: '2015',
      backgroundColor: '#73C7C7',
      data: data['2015']
    },
    {
      label: '2016',
      backgroundColor: '496695',
      data: data['2016']
    }

  ]
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  legend: { display: true },
  // cornerRadius: 20,
  tooltips: {
    enabled: true,
    mode: 'index',
    intersect: false,
    borderWidth: 1,
    borderColor: palette.divider,
    // backgroundColor: palette.white,
    // titleFontColor: palette.text.primary,
    // bodyFontColor: palette.text.secondary,
    // footerFontColor: palette.text.secondary
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
