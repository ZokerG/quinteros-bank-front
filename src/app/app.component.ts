import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CardModule } from 'primeng/card';
import { ToolBardComponent } from "./layout/tool-bard/tool-bard.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,
    FormsModule,
    ChartModule,
    MenuModule,
    TableModule,
    StyleClassModule,
    PanelMenuModule,
    ButtonModule,
    CardModule, ToolBardComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  balanceData: any;
  transactionData: any;
  transactions: any[];

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
}
