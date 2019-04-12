import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    new Project('Kitechen Assist',
      'kitchenAssist.png',
      ['angular / angularfire', 'javascript', 'firebase'],
      'A smart Kitchen Assistant',
      'https://github.com/kitchen-assistant',
      'http://kitchenassist.me/'),
    new Project(
      '140 CLINTON AVE',
      '140ClintonAve.png',
      ['html5', 'css3', 'javascript'],
       'A freelanced web page for a real-estate company',
      'https://github.com/PK4ever/realEstateListings',
      'http://cs.oswego.edu/~pkwoyelo/realEstateListing/view/'),
    new Project( 'Style Rush',
      'styleRush.png',
      ['android', 'firebase', 'swift'],
      'App Coming soon!'),
    new Project( 'LakerPolling',
      'lakerPolling.png',
      ['java-spring', 'javascript', 'css', 'Am-Charts'],
      'An open source clicker software',
      'https://github.com/PK4ever/laker-polling'),
    new Project( 'MSSL',
      'msslHome.png',
      ['java-spark', 'postgresql'],
      'A local Soccer League CMA',
      'https://github.com/PK4ever/mssl', 'https://mssl.herokuapp.com/'),
  ];
  constructor() { }
  ngOnInit() {
  }
}
export class Project {
  constructor(public name: String, public imageUrlName: String, public techList: String[],
              public description?: String, public gitUrl?: String, public weblink?: String) {}
}


