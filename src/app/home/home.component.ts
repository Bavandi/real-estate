import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { JsPluginsInitService } from '../core/vendor-utils';


@Component({
  selector: 'bre-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(
    private _jsPluginsInitService: JsPluginsInitService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this._pluginsInit();
  }

  private _pluginsInit() {
    this._jsPluginsInitService.initializationOfBootstrapValidation(),
      

      this._jsPluginsInitService.initializationOfTextAnimation();
  }

}
