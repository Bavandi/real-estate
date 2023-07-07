import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

declare const HSMegaMenu: any;

@Component({
  selector: 'bre-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  private _initializationOfMegaMenu() {
    // INITIALIZATION OF MEGA MENU
    // =======================================================
    new HSMegaMenu('.js-mega-menu', {
      desktop: {
        position: 'left'
      }
    });
  }

}
