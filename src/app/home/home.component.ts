import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {interval, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {element} from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('roles')
  identifier: ElementRef;
  constructor() {
  }

  ngOnInit() {
    this.runRoleSpinner();
  }

  runRoleSpinner() {
    let current = 1;
    const height = this.identifier.nativeElement.offsetHeight;
    const numberDivs =  this.identifier.nativeElement.children.length;
    const first = this.identifier.nativeElement.children[0];
    // alert('first ' + first + 'num ' + numberDivs + ' height ' + height);
    interval(2000).pipe(
      map(() => {
        const number = current * - height;
        first.style.marginTop = number + 'px';
        if (current === numberDivs) {
          first.style.marginTop = '0px';
          current = 1;
        } else {
          current++;
        }
      })
    ).subscribe();
  }
}

