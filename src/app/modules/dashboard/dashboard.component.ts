import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Raja', weight: 1.0079, symbol: 'R' },
  { position: 2, name: 'Velu', weight: 4.0026, symbol: 'Ve' },
  { position: 3, name: 'Kavi', weight: 6.941, symbol: 'Ki' },
  { position: 4, name: 'Bala', weight: 9.0122, symbol: 'Ba' },
  { position: 5, name: 'Barat', weight: 10.811, symbol: 'Br' },
  { position: 6, name: 'Biju', weight: 12.0107, symbol: 'Bi' },
  { position: 7, name: 'Suresh', weight: 14.0067, symbol: 'Su' },
  { position: 8, name: 'Vignesh', weight: 15.9994, symbol: 'Vi' },
  { position: 9, name: 'Prem', weight: 18.9984, symbol: 'Pr' },
  { position: 10, name: 'Raju', weight: 20.1797, symbol: 'Ru' },
  { position: 11, name: 'Gopi', weight: 22.9897, symbol: 'Gp' },
  { position: 12, name: 'Madan', weight: 24.305, symbol: 'Mn' },
  { position: 13, name: 'gowri', weight: 26.9815, symbol: 'GO' },
  { position: 14, name: 'Magi', weight: 28.0855, symbol: 'Mi' },
  { position: 15, name: 'vijay', weight: 30.9738, symbol: 'Vj' },
  { position: 16, name: 'ajith', weight: 32.065, symbol: 'Aj' },
  { position: 17, name: 'chola', weight: 35.453, symbol: 'Ca' },
  { position: 18, name: 'kari', weight: 39.948, symbol: 'Ki' },
  { position: 19, name: 'anand', weight: 39.0983, symbol: 'An' },
  { position: 20, name: 'yuva', weight: 40.078, symbol: 'uv' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards = [];
  pieChart = [];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();

    this.dataSource.paginator = this.paginator;
  }

}
