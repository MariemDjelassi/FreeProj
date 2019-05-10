import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './../../services/auth.service';
import { ProjectApiService } from './../../services/project-api.service';
import { FreelancerApiService } from './../../services/freelancer-api.service';
import { MailApiService } from './../../services/mail-api.service';
import { ChatApiService } from './../../services/chat-api.service';
import { Socket } from 'ngx-socket-io';


@Component({
  selector: 'app-list-offers',
  templateUrl: './list-offers.component.html',
  styleUrls: ['./list-offers.component.css'],
})

export class ListOffersComponent implements OnInit {

  panelOpenState = false;

  connectedComp: any;
  projects: any;
  offers: any;
  mail: any;
  freels: any;
  listeMessages: any;
  conversation: any;
  idComp: any;
  idFreel: any;
  proj: any;
  chatForm: FormGroup;

  constructor(private projService: ProjectApiService, private auth: AuthService, private freelService: FreelancerApiService,
              private modalService: NgbModal, private mailService: MailApiService, private chatService: ChatApiService,
              private socket: Socket) {
    // this.idProj = this.dataRoute.snapshot.params.id;
    this.connectedComp = this.auth.connectedUser;
    this.chatForm = new FormGroup({
      content: new FormControl(''),
      user: new FormControl('')
    });
    this.listeMessages = [];
  }

  ngOnInit() {
    this.idComp = this.connectedComp.idComp;
    this.chatForm = new FormGroup({
      content: new FormControl(''),
      user: new FormControl(this.idComp),
    });
    this.projService.getAllProjByComp(this.idComp).subscribe((result: any) => {
      this.projects = result;
      console.log(this.projects);
    });
  }

  openLg(content, idF) {
    this.modalService.open(content, { size: 'lg' });
    console.log(idF);
    this.freelService.getFreelById(idF).subscribe((res: any) => {
      this.freels = [res];
      console.log(this.freels);
    });
    this.socket.on('newMessageSended', () => {
      // this.clickFreel(idF);
      console.log('hahahaha');
      this.idFreel = idF;
      this.chatService.getChat(this.connectedComp.idComp, this.idFreel).subscribe( (res: any) => {
        console.log(res);
        this.conversation = res._id;
        this.listeMessages = res.messages;
      });
    });
  }

  // clickFreel(idF) {
  //   this.idFreel = idF;
  //   this.chatService.getChat(this.connectedComp.idComp, this.idFreel).subscribe( (res: any) => {
  //     console.log(res);
  //     this.conversation = res._id;
  //     this.listeMessages = res.messages;
  //   });
  // }

  sendMessage(form) {
    const idC = this.connectedComp.idComp;
    console.log('clicked');
    this.chatService.sendMessages(this.conversation, form.value).subscribe();
  }

  accept_Offer(idP, idF) {
    const idC = this.connectedComp.idComp;
    this.projService.getOneProject(idP).subscribe((resp: any) => {
      this.proj = [resp];
      console.log(this.proj);
      this.proj.forEach(element => {
        console.log(element);
        if (element.status === 'waiting') {
          this.projService.acceptOffer(idP, idF).subscribe((res: any) => {
            this.offers = res;
            console.log(this.offers);
          });
          this.mailService.sendMail(idC, idF).subscribe((rslt: any) => {
            this.mail = rslt;
            console.log(this.mail);
          });
        } else {
          alert('you can\'t accept this project');
        }
      });
    });
  }

}
