import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { JsPluginsInitService } from '../core/vendor-utils';

@Component({
  selector: 'bre-property-seller',
  templateUrl: './property-seller.component.html',
  styleUrls: ['./property-seller.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertySellerComponent implements OnInit, AfterViewInit {

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
      
      this._jsPluginsInitService.initializationOfQuillJSEditor(),
      this._jsPluginsInitService.initializationOfDropzone();
  }

}
