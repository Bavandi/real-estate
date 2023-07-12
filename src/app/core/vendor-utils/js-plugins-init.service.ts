import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2 } from '@angular/core';
import { AOS_TOKEN } from './aos.service';
import { HS_CORE_TOKEN } from './hs-core.service';
import { HS_NAV_SCROLLER_TOKEN } from './hs-nav-scroller.service';
import { HS_STICKY_BLOCK_TOKEN } from './hs-sticky-block.service';
import { HSBS_DROPDOWN_TOKEN } from './hsbs-dropdown.service';
import { HSBS_VALIDATION_TOKEN } from './hsbs-validation.service';
import { HS_GO_TO_TOKEN } from './hsgo-to.service';
import { HS_HEADER_TOKEN } from './hsheader.service';
import { HS_MEGA_MENU_TOKEN } from './hsmega-menu.service';
import { HS_SHOW_ANIMATION_TOKEN } from './hsshow-animation.service';
import { L_TOKEN } from './l.service';
import { SWIPER_TOKEN } from './swiper.service';

@Injectable()
export class JsPluginsInitService {

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    @Inject(HS_HEADER_TOKEN) private _HSHeader: any,
    @Inject(HS_MEGA_MENU_TOKEN) private _HSMegaMenu: any,
    @Inject(HS_SHOW_ANIMATION_TOKEN) private _HSShowAnimation: any,
    @Inject(HSBS_VALIDATION_TOKEN) private _HSBsValidation: any,
    @Inject(HSBS_DROPDOWN_TOKEN) private _HSBsDropdown: any,
    @Inject(HS_GO_TO_TOKEN) private _HSGoTo: any,
    @Inject(AOS_TOKEN) private _AOS: any,
    @Inject(HS_CORE_TOKEN) private _HSCore: any,
    @Inject(SWIPER_TOKEN) private _Swiper: any,
    @Inject(HS_STICKY_BLOCK_TOKEN) private _HSStickyBlock: any,
    @Inject(HS_NAV_SCROLLER_TOKEN) private _HsNavScroller: any,
    @Inject(L_TOKEN) private _L: any,

  ) { }


  initializationOfHeader() {
    // INITIALIZATION OF HEADER
    // =======================================================
    new this._HSHeader('#header').init()
  }


  initializationOfMegaMenu() {
    console.info("this._HSMegaMenu")
    console.info(this._HSMegaMenu)
    // INITIALIZATION OF MEGA MENU
    // =======================================================
    new this._HSMegaMenu('.js-mega-menu', {
      desktop: {
        position: 'left'
      }
    })

  }


  initializationOfShowAnimations() {
    // INITIALIZATION OF SHOW ANIMATIONS
    // =======================================================
    new this._HSShowAnimation('.js-animation-link')
  }


  initializationOfBootstrapValidation() {
    // INITIALIZATION OF BOOTSTRAP VALIDATION
    // =======================================================
    this._HSBsValidation.init('.js-validate', {
      onSubmit: (data: any) => {
        data.event.preventDefault()
        alert('Submited')
      }
    })
  }


  initializationOfBootstrapDropdown() {
    // INITIALIZATION OF BOOTSTRAP DROPDOWN
    // =======================================================
    this._HSBsDropdown.init()
  }


  initializationOfGoTo() {
    // INITIALIZATION OF GO TO
    // =======================================================
    new this._HSGoTo('.js-go-to')
  }

  initializationOfQuillJSEditor() {
    // INITIALIZATION OF QUILLJS EDITOR
      // =======================================================
      this._HSCore.components.HSQuill.init('.js-quill')
  }


  initializationOfDropzone() {
     // INITIALIZATION OF DROPZONE
      // =======================================================
      this._HSCore.components.HSDropzone.init('.js-dropzone')
  }


  initializationOfStickyBlock() {
    // INITIALIZATION OF STICKY BLOCKS
    // =======================================================
    new this._HSStickyBlock('.js-sticky-block', {
      targetSelector: this._document.getElementById('header')?.classList?.contains('navbar-fixed') ? '#header' : null
    })
  }


  initializationOfNavScroller() {
    // INITIALIZATION OF NAV SCROLLER
    // =======================================================
    new this._HsNavScroller('.js-nav-scroller')
  }

  initializationOfLeaflet() {
     // INITIALIZATION OF LEAFLET
      // =======================================================
      const leaflet = this._HSCore.components.HSLeaflet.init(this._document.getElementById('map'))

      this._L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        id: 'mapbox/light-v9'
      }).addTo(leaflet)
  }

  initializationOfLeafletWithTab() {
    // INITIALIZATION OF LEAFLET
    // =======================================================
    const tabEl = this._document.querySelector('[data-bs-target="#propertyOverviewNavThree"]')
    tabEl?.addEventListener('shown.bs.tab',  () => {
     const $mapContainerEl = this._document.getElementById('map')
      if ($mapContainerEl?.classList.contains('leaflet-container')) return

      console.info("this._HSCore")
      console.info(this._HSCore)
      const leaflet = this._HSCore.components.HSLeaflet.init($mapContainerEl)

      this._L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        id: 'mapbox/light-v9'
      }).addTo(leaflet)
    })
  }


  initializationOfAOS() {
    // INITIALIZATION OF AOS
    // =======================================================
    this._AOS.init({
      duration: 650,
      once: true
    });
  }


  initializationOfTextAnimation() {
    // INITIALIZATION OF TEXT ANIMATION (TYPING)
    // =======================================================
    this._HSCore.components.HSTyped.init('.js-typedjs')
  }


  initializationOfSwiper() {
    // INITIALIZATION OF SWIPER
    // =======================================================
    const sliderThumbs = new this._Swiper('.js-swiper-thumbs', {
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      history: false,
      breakpoints: {
        480: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      },
      on: {
        'afterInit':  (swiper: any) => {
          swiper.el.querySelectorAll('.js-swiper-pagination-progress-body-helper')
            .forEach(($progress: any) => $progress.style.transitionDuration = `${swiper.params.autoplay.delay}ms`)
        }
      }
    });

    const sliderMain = new this._Swiper('.js-swiper-main', {
      effect: 'fade',
      autoplay: true,
      loop: true,
      thumbs: {
        swiper: sliderThumbs
      }
    })
  }

  initializationOfChartJS() {
    // INITIALIZATION OF CHARTJS
    // =======================================================
    console.info(" this._document.querySelectorAll('.js-chart')")
    console.info(this._document.querySelectorAll('.js-chart'))
    this._document.querySelectorAll('.js-chart').forEach(item => {
      this._HSCore.components.HSChartJS.init(item)
    })

    let rangeReady = false

    console.info("this._document.querySelector('#priceFilterFormDropdown')")
    console.info(this._document.querySelector('#priceFilterFormDropdown'))

    this._document.querySelector('#priceFilterFormDropdown')?.addEventListener('shown.bs.dropdown', el => {
      console.info({ rangeReady })
      if (!rangeReady) {
        this._HSCore.components.HSNoUISlider.init('.js-nouislider')
      }

      return rangeReady = true
    })
  }

  initializationOfSelect() {
    // INITIALIZATION OF SELECT
    // =======================================================
    this._HSCore.components.HSTomSelect.init('.js-select')
  }
}
