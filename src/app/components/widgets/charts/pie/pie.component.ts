import { AfterContentInit, Component, Input, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements AfterContentInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  @Input() data: any;
  constructor() {


  }
  ngAfterContentInit(): void {
    console.log(this.data)
    this.chartOptions = {
      series: this.data,
      chart: {
        type: 'pie',
        width: '350px',
      },
      labels: [ 'Assurance  payé','Assurance en attente de paiement'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 100,
            },
          },
        },
      ],
      legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
      },
      dataLabels: {
        offSetY: 50,
        // add this part to remove %
        enabled: true,

      },
    };
  }

}
