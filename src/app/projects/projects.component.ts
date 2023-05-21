import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
export class Project {
  constructor(public name: String, public imageUrlName: String, public techList: String[],
              public description?: String, public gitUrl?: String, public weblink?: String) {}
}


