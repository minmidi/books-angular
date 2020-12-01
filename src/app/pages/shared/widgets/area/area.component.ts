import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  chartOptions: {} | undefined;
  @Input() data: any = [];

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Bảng thống kê dữ liệu sách trên thế giới trong những năm gần đây'
      },
      subtitle: {
          text: 'Design by minmin'
      },
      credits: {
        enbaled: false
      },
      exporting: {
        enbaled: true
      },
      tooltip: {
          split: true,
          valueSuffix: ' millions'
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
      series: [{
          name: 'Việt Nam',
          data: [502, 635, 809, 947, 1402, 3634, 5268]
      }, {
          name: 'Anh',
          data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
          name: 'Pháp',
          data: [163, 203, 276, 408, 547, 729, 628]
      }, {
          name: 'Mỹ',
          data: [18, 31, 54, 156, 339, 818, 1201]
      }, {
          name: 'Hàn Quốc',
          data: [2, 2, 2, 6, 13, 30, 46]
      }]
  };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
