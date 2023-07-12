import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { JsPluginsInitService } from '../core/vendor-utils';

declare const refreshFsLightbox:any;

@Component({
  selector: 'bre-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingsComponent implements OnInit, AfterViewInit {

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
      
      this._jsPluginsInitService.initializationOfChartJS(),
      this._jsPluginsInitService.initializationOfSelect();

      refreshFsLightbox && refreshFsLightbox();
  }

}
