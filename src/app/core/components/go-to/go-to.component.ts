import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { JsPluginsInitService } from '../../vendor-utils';

@Component({
  selector: 'bre-go-to',
  templateUrl: './go-to.component.html',
  styleUrls: ['./go-to.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoToComponent implements OnInit , AfterViewInit{

  constructor(
    private _jsPluginsInitService: JsPluginsInitService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this._jsPluginsInitService.initializationOfGoTo();
  }

}
