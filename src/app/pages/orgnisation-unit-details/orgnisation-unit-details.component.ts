import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orgnisation-unit-details',
  templateUrl: './orgnisation-unit-details.component.html',
  styleUrls: ['./orgnisation-unit-details.component.css']
})
export class OrgnisationUnitDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
  }
}
