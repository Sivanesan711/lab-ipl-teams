import { Component, OnInit } from '@angular/core';
import { details } from '../details';
import { userDetail } from '../detail';


@Component({
  selector: 'app-ipl-details',
  templateUrl: './ipl-details.component.html',
  styleUrls: ['./ipl-details.component.css']
})
export class IplDetailsComponent implements OnInit {

  details: userDetail[];
  newDetail: userDetail;

  constructor() { }

  ngOnInit(): void {

    this.details = details;
  }

  addDetail(newDetail): void
  {
    console.log('ADD DETAIL HAS BEEN CALLED');
    this.details.unshift(newDetail);
    alert('NEW DETAIL ADDED;D');
  }

}
