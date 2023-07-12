import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { JsPluginsInitService } from '../core/vendor-utils';

declare const refreshFsLightbox: any;

@Component({
  selector: 'bre-property-overview',
  templateUrl: './property-overview.component.html',
  styleUrls: ['./property-overview.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyOverviewComponent implements OnInit, AfterViewInit {

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
      
      this._jsPluginsInitService.initializationOfStickyBlock(),
      this._jsPluginsInitService.initializationOfNavScroller(),
      this._jsPluginsInitService.initializationOfLeafletWithTab();

    refreshFsLightbox && refreshFsLightbox();
  }
}
