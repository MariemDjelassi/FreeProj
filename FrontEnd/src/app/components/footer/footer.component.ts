import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-material',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  test: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
