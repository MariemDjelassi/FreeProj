import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ProjectApiService } from './../../services/project-api.service';
import { ProjectSearchPipe } from './../../project-search.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-all-proj',
  templateUrl: './list-all-proj.component.html',
  styleUrls: ['./list-all-proj.component.css']
})
export class ListAllProjComponent implements OnInit {

  projects: any;
  dataSource: MatTableDataSource<any>;
  searchText: string;
  displayedColumns: string[] = ['name', 'titleProject', 'skill', 'length'];
  filtredData: any;

  constructor( private projService: ProjectApiService, private router: Router ) {}

  ngOnInit() {
    this.projService.getAllProjects().subscribe((res: any) => {
      this.projects = res;
      console.log(this.projects);
      this.dataSource = new MatTableDataSource(this.projects);

      this.dataSource.filterPredicate = (data, filter: string) => {
        const transformedFilter = filter.trim().toLowerCase();
        const listAsFlatString = (obj): string => {
          let returnVal = '';
          Object.values(obj).forEach((val) => {
            if (typeof val !== 'object') {
              returnVal = returnVal + ' ' + val;
            } else if (val !== null) {
              returnVal = returnVal + ' ' + listAsFlatString(val);
            }
          });
          return returnVal.trim().toLowerCase();
        };
        return listAsFlatString(data).includes(transformedFilter);
      };
    });
  }

  applyFilter(filterValue: string) {
    // this.dataSource.filter = filterValue.trim().toLowerCase();
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    console.log(this.dataSource);
  }

  // removeFakePathUrl(f) {
  //   if (f) {
  //     return f.slice(12, f.length);
  //   }
  // }

  // setjob(id) {
  //   // this.router.navigate(['/JobDetail', id]);
  // }

}
