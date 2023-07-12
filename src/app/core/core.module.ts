import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/navs/header/header.component';
import { FooterComponent } from './components/navs/footer/footer.component';
import { GoToComponent } from './components/go-to/go-to.component';

import { AOS_TOKEN, HSBS_DROPDOWN_TOKEN, HSBS_VALIDATION_TOKEN, HS_GO_TO_TOKEN, HS_HEADER_TOKEN, HS_MEGA_MENU_TOKEN, HS_SHOW_ANIMATION_TOKEN, JsPluginsInitService } from './vendor-utils';
import { SWIPER_TOKEN } from './vendor-utils/swiper.service';
import { HS_STICKY_BLOCK_TOKEN } from './vendor-utils/hs-sticky-block.service';
import { HS_NAV_SCROLLER_TOKEN } from './vendor-utils/hs-nav-scroller.service';
import { L_TOKEN } from './vendor-utils/l.service';
import { DynamicScriptLoaderService } from './vendor-utils/dynamic-script-loader.service';
import { HS_CORE_TOKEN } from './vendor-utils/hs-core.service';
import { RouterModule } from '@angular/router';

declare const HSCore: any;


declare const HSHeader: any;
declare const HSStickyBlock: any;
declare const HsNavScroller: any;

declare const HSMegaMenu: any;
declare const HSShowAnimation: any;
declare const HSBsValidation: any;
declare const HSBsDropdown: any;
declare const HSGoTo: any;
declare const AOS: any;
declare const L: any;
declare const Swiper: any;

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    GoToComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [HeaderComponent, FooterComponent, GoToComponent],
  providers: [
    JsPluginsInitService,
    DynamicScriptLoaderService,
    { provide: HS_HEADER_TOKEN, useValue: HSHeader },
    { provide: HS_CORE_TOKEN, useValue: HSCore },


    { provide: HS_STICKY_BLOCK_TOKEN, useValue: HSStickyBlock },
    { provide: HS_NAV_SCROLLER_TOKEN, useValue: HsNavScroller },
    { provide: L_TOKEN, useValue: L },


    { provide: HS_MEGA_MENU_TOKEN, useValue: HSMegaMenu },
    { provide: HS_SHOW_ANIMATION_TOKEN, useValue: HSShowAnimation },
    { provide: HSBS_VALIDATION_TOKEN, useValue: HSBsValidation },
    { provide: HSBS_DROPDOWN_TOKEN, useValue: HSBsDropdown },
    { provide: HS_GO_TO_TOKEN, useValue: HSGoTo },
    { provide: AOS_TOKEN, useValue: AOS },
    { provide: SWIPER_TOKEN, useValue: Swiper },

  ]
})
export class CoreModule { }
