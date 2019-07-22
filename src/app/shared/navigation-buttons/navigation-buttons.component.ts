import {Component, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation-buttons',
  templateUrl: './navigation-buttons.component.html',
  styleUrls: ['./navigation-buttons.component.scss']
})


export class NavigationButtonsComponent {

  constructor(private router: Router) {
  }

  @Input()
  public prev: string;

  @Input()
  public next: string;

  public goToPrevRoute() {
    this.router.navigate([this.prev]);
  }
  public goToNextRoute() {
    this.router.navigate([this.next]);
  }

}
