import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
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
import { BackendService } from '../../service/bakend.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

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
    NgxChartsModule,
    HttpClientModule,
    DialogModule,
    InputTextModule
  ],
  providers: [BackendService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  balanceData: any;
  transactionData: any;
  transactions: any;
  name: string = 'Carlos Quintero';
  visibleModal: boolean = true;
  xAxisLabel: string = 'País';
  yAxisLabel: string = 'Ventas';
  data: any;
  //clientId: any = localStorage.getItem('clientId');
  dataCatds: any;
  accountNumber: any;
  visible: boolean = false;

  constructor(
    private backendService: BackendService,
    private clipboard: Clipboard
  ) {}

  ngOnInit(): void {
    this.getDashboardCard();
    this.getDataChart();
    this.getTransfer();
  }

  getDataChart(){
    this.backendService.getDataChart(1).subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  getDashboardCard(){
    this.backendService.getDashboardCard(1).subscribe(
      (response) => {
        this.dataCatds = response;
        this.accountNumber = response.accountNumber;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  getTransfer(){
    this.backendService.getTransfer(1).subscribe(
      (response) => {
        this.transactions = response;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  copyAccountNumber() {
    this.clipboard.copy(this.accountNumber);
    alert('Número de cuenta copiado al portapapeles');
  }

  showDialog() {
    this.visible = true;
}

}
