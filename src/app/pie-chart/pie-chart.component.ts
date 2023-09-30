import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  Highcharts=Highcharts;
  chartOptions={}
  constructor(){
    this.chartOptions={
      chart: {
        type: 'pie'
    },
    title: {
        text: 'Reported Cases june-August 2023',
        align: 'center'
    },
    subtitle: {
        text: 'Click the slices to view number. Source: <a href="http://statcounter.com" target="_blank">a2zHealthCare.com</a>',
        align: 'center'
    },

    accessibility: {
        announceNewData: {
            enabled: true
        },
        point: {
            valueSuffix: '%'
        }
    },

    plotOptions: {
        series: {
            borderRadius: 5,
            dataLabels: {
                enabled: true,
                format: '{point.name}: {point.y:.1f}%'
            }
        }
    },
    credits:{
        enabled:false
      },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
        {
            name: 'Reported Cases',
            colorByPoint: true,
            data: [
                {
                    name: 'Fever',
                    y: 61.04
                   
                },
                {
                    name: 'Ortho-Releated-Issues',
                    y: 9.47
                   
                },
                {
                    name: 'Cancer',
                    y: 9.32
                   
                },
                {
                    name: 'Gastric-Releated-Issues',
                    y: 8.15
                    
                },
                {
                    name: 'Others',
                    y: 11.02
                    
                }
            ]
        }
    ],
    }
  }
}
