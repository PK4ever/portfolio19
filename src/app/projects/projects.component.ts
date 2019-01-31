import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    new Project('Kitechen Assist', 'http://kitchenassist.me/',
      'https://github.com/kitchen-assistant', 'A smart Kitchen Assistant that utilizes Google action flow and Firebase ' +
      '. Received an honorable mention from over 4,500 participants from 124 countries', ['angularfire', 'firebase']),
    new Project('140 CLINTON AVE', 'http://cs.oswego.edu/~pkwoyelo/realEstateListing/view/',
      '', 'A freelance project for a real-estate company', []),
    new Project( '', 'http://kitchenassist.me/', 'https://github.com/kitchen-assistant',
      'A smart Kitchen Assistant that utilizes Google action flow and Firebase ' +
      '. Received an honorable mention from over 4,500 participants from 124 countries', []),
  ];
  constructor() { }
  ngOnInit() {
  }

}
export class Project {
  constructor(public name: String, public weblink: String,
              public gitUrl: String, public description: String, public techList: String[] ) {}
}


