import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { JsPluginsInitService } from 'src/app/core/vendor-utils';


@Component({
  selector: 'bre-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(
    private _jsPluginsInitService: JsPluginsInitService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this._jsPluginsInitService.initializationOfBootstrapDropdown(),
    this._jsPluginsInitService.initializationOfHeader(),
    this._jsPluginsInitService.initializationOfMegaMenu();
  }


}
