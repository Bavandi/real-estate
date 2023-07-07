import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'bre-go-to',
  templateUrl: './go-to.component.html',
  styleUrls: ['./go-to.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoToComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
