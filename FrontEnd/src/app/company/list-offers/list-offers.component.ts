import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { ProjectApiService } from './../../services/project-api.service';
// import { MatTableDataSource } from '@angular/material';
// import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-list-offers',
  templateUrl: './list-offers.component.html',
  styleUrls: ['./list-offers.component.css'],
  // animations: [
  //   trigger('detailExpand', [
  //     state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
  //     state('expanded', style({height: '*'})),
  //     transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  //   ]),
  // ]
})

// export interface PeriodicElement {
//   title: string;
//   position: number;
//   weight: number;
//   symbol: string;
//   description: string;
// }

export class ListOffersComponent implements OnInit {

  // expandedElement: PeriodicElement | null;
  // dataSource: any;
  // columnsToDisplay = ['title', 'weight', 'symbol', 'position'];

  connectedComp: any;
  projects: any;
  offers: any;
  idComp: any;
  idProj: any;

  constructor( private dataRoute: ActivatedRoute, private projService: ProjectApiService, private auth: AuthService ) {
    this.connectedComp = this.auth.connectedUser;
    // this.idProj = this.dataRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.idComp = this.connectedComp.idComp;
    this.projService.getAllProjByComp(this.idComp).subscribe((res: any) => {
      this.projects = res;
      console.log(this.projects);
      // this.dataSource = new MatTableDataSource(this.projects);
    });
  }

  accept_Offer(idP, idF) {
    // idP = this.idProj;
    this.projService.acceptOffer(idP, idF).subscribe((res: any) => {
      this.offers = res;
      console.log(this.offers);
    });
  }

}
