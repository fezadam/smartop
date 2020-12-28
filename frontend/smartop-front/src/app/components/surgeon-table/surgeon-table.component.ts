import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Surgeon } from '../../models/surgeon.model';
import { SurgeonService } from '../../services/surgeon.service';

@Component({
  selector: 'app-surgeon-table',
  templateUrl: './surgeon-table.component.html',
  styleUrls: ['./surgeon-table.component.css'],
})
export class SurgeonTableComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'speciality',
    'interventionsNb',
    'favoriteAnesthesist',
    'favoriteNurse',
    'mostFrequentedRoom',
    'mostFrequentAct',
  ];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private surgeonService: SurgeonService) {}

  ngOnInit(): void {
    this.surgeonService.getInformations().subscribe(
      (data: Surgeon[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.filterPredicate = function (
          data,
          filter: string
        ): boolean {
          return data.name.toLowerCase().includes(filter);
        };
      },
      (error: any) => {
        console.log(
          'Erreur lors de la récupération des données depuis le serveur.'
        );
      }
    );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
