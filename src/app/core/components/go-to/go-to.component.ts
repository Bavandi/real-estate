import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

declare const HSGoTo: any;

@Component({
  selector: 'bre-go-to',
  templateUrl: './go-to.component.html',
  styleUrls: ['./go-to.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoToComponent implements OnInit , AfterViewInit{

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
   this._initializeGoTo(); 
  }

  private _initializeGoTo() {
    // INITIALIZATION OF GO TO
    // =======================================================
    new HSGoTo('.js-go-to');

  }

}
