import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { StyleClassModule } from 'primeng/styleclass';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    ChartModule,
    MenuModule,
    TableModule,
    StyleClassModule,
    PanelMenuModule,
    ButtonModule,
    CardModule,
    NgxChartsModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  balanceData: any;
  transactionData: any;
  transactions: any[];
  name: string = 'Carlos Quintero';
  visibleModal: boolean = true;
  xAxisLabel: string = 'País';
  yAxisLabel: string = 'Ventas';
  data: any = [
    {
      "name": "Tanzania",
      "series": [
        {
          "value": 2041,
          "name": "2016-09-21T06:26:02.032Z"
        },
        {
          "value": 5801,
          "name": "2016-09-20T23:09:13.162Z"
        },
        {
          "value": 3909,
          "name": "2016-09-21T09:37:32.352Z"
        },
        {
          "value": 6870,
          "name": "2016-09-21T10:10:48.902Z"
        },
        {
          "value": 2097,
          "name": "2016-09-17T19:56:29.981Z"
        }
      ]
    },
    {
      "name": "Malawi",
      "series": [
        {
          "value": 4116,
          "name": "2016-09-21T06:26:02.032Z"
        },
        {
          "value": 5789,
          "name": "2016-09-20T23:09:13.162Z"
        },
        {
          "value": 3470,
          "name": "2016-09-21T09:37:32.352Z"
        },
        {
          "value": 6441,
          "name": "2016-09-21T10:10:48.902Z"
        },
        {
          "value": 4788,
          "name": "2016-09-17T19:56:29.981Z"
        }
      ]
    },
    {
      "name": "Albania",
      "series": [
        {
          "value": 2347,
          "name": "2016-09-21T06:26:02.032Z"
        },
        {
          "value": 5852,
          "name": "2016-09-20T23:09:13.162Z"
        },
        {
          "value": 2630,
          "name": "2016-09-21T09:37:32.352Z"
        },
        {
          "value": 2819,
          "name": "2016-09-21T10:10:48.902Z"
        },
        {
          "value": 5795,
          "name": "2016-09-17T19:56:29.981Z"
        }
      ]
    },
    {
      "name": "Cocos (Keeling) Islands",
      "series": [
        {
          "value": 5874,
          "name": "2016-09-21T06:26:02.032Z"
        },
        {
          "value": 3806,
          "name": "2016-09-20T23:09:13.162Z"
        },
        {
          "value": 4855,
          "name": "2016-09-21T09:37:32.352Z"
        },
        {
          "value": 6099,
          "name": "2016-09-21T10:10:48.902Z"
        },
        {
          "value": 4991,
          "name": "2016-09-17T19:56:29.981Z"
        }
      ]
    },
    {
      "name": "Germany",
      "series": [
        {
          "value": 2597,
          "name": "2016-09-21T06:26:02.032Z"
        },
        {
          "value": 3796,
          "name": "2016-09-20T23:09:13.162Z"
        },
        {
          "value": 5766,
          "name": "2016-09-21T09:37:32.352Z"
        },
        {
          "value": 3027,
          "name": "2016-09-21T10:10:48.902Z"
        },
        {
          "value": 3135,
          "name": "2016-09-17T19:56:29.981Z"
        }
      ]
    }
  ];

  constructor() {
    this.balanceData = {
      labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Saldo',
          data: [14000, 14500, 15000, 15500, 16000, 15230],
          borderColor: '#42A5F5',
          fill: false
        }
      ]
    };

    this.transactionData = {
      labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Transacciones',
          data: [20, 25, 30, 40, 35, 34],
          borderColor: '#66BB6A',
          fill: false
        }
      ]
    };

    this.transactions = [
      { date: '2024-09-01', description: 'Pago Servicios', amount: -150.00 },
      { date: '2024-09-02', description: 'Depósito', amount: 500.00 },
      { date: '2024-09-03', description: 'Transferencia a Ahorros', amount: -200.00 },
      { date: '2024-09-04', description: 'Compra en Supermercado', amount: -120.50 },
      { date: '2024-09-05', description: 'Pago Nómina', amount: 2000.00 },
    ];
  }

  ngOnInit(): void {
  }

}
