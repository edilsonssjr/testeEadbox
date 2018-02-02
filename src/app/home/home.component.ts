import { FilterPipe } from './../filter.pipe';
import { Component, OnInit, Pipe } from '@angular/core';
import { HomeService } from './../home.service';

import {MatExpansionModule} from '@angular/material/expansion';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [HomeService],
})
export class HomeComponent implements OnInit {

  logo = 'assets/img/eadbox-logo.png';

  courses: any [];

  public loading = false;

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.getCourses();
  }

  getCourses(){
    this.loading = true;
    this.homeService.courses().subscribe(
      res => {
        this.loading = false;
        this.courses = res
      },
      error => console.log(error)
    )
  }

}
