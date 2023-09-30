import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-high-chart',
  templateUrl: './high-chart.component.html',
  styleUrls: ['./high-chart.component.css']
})
export class HighChartComponent {
Highcharts=Highcharts
chartOptions={}
constructor(){
  this.chartOptions={
    chart: {
      type: 'area'
  },
  title: {
      text: ' Cases Reported',
      align: 'center'
  },
  yAxis: {
      title: {
          useHTML: true,
          text: 'Cases reported per people'
      }
  },
  tooltip: {
      shared: true,
      headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
  },
  plotOptions: {
      area: {
          stacking: 'normal',
          lineColor: '#666666',
          lineWidth: 1,
          marker: {
              lineWidth: 1,
              lineColor: '#666666'
          }
      }
  },
  credits:{
    enabled: false,
  },
  series: [{
      name: 'Fever',
      data: [13234, 12729, 11533, 17798, 10398, 12811, 15483, 16196, 16214]
  }, {
      name: 'Ortho-Releated-Issues',
      data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039]

  }, {
      name: 'Cancer',
      data: [4752, 4820, 4877, 4925, 5006, 4976, 4946, 4911, 4913]
  }, {
      name: 'Gastric-Releated-Issues',
      data: [3164, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550]

  }, {
      name: 'Others',
      data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186]
  }]
  }
}
}
