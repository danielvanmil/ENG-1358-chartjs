import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  TimeScale,
  Tooltip,
} from 'chart.js';
import 'chartjs-adapter-luxon';
import { DateTime } from 'luxon';

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  TimeScale
);

var data1 = {
  label: 's1',
  backgroundColor: 'blue',
  data: [
    {
      x: DateTime.now().toISO(),
      y: 50,
    },
    {
      x: DateTime.now().toISO(),
      y: 91,
    },
    {
      x: DateTime.now().toISO(),
      y: 200,
    },
    {
      x: DateTime.now().toISO(),
      y: 200,
    },
  ],
};

var data2 = {
  label: 's2',
  backgroundColor: 'red',
  data: [
    {
      x: DateTime.now(),
      y: 50,
    },
    {
      x: DateTime.now(),
      y: 91,
    },
    {
      x: DateTime.now(),
      y: 200,
    },
    {
      x: DateTime.now(),
      y: 200,
    },
  ],
};

var data3 = {
  label: 's3',
  backgroundColor: 'green',
  data: [
    {
      x: DateTime.now(),
      y: 50,
    },
  ],
};

var ctx = (document.getElementById('myChart') as HTMLCanvasElement).getContext(
  '2d'
);
new Chart<any>(ctx, {
  type: 'bar',
  data: {
    datasets: [data1, data2, data3],
  },
  options: {
    scales: {
      x: {
        min: DateTime.now().toISO(),
        max: DateTime.now().toISO(),
        type: 'time',
        time: {
          unit: 'day',
        },
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  },
});
