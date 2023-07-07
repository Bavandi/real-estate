import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

declare const HSBsValidation: any;

declare const HSCore: any;

@Component({
  selector: 'bre-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  private _initializationOfBootstrapValidation() {
    // INITIALIZATION OF BOOTSTRAP VALIDATION
    // =======================================================
    HSBsValidation.init('.js-validate', {
      onSubmit: (data: any) => {
        data.event.preventDefault()
        alert('Submited')
      }
    })
  }

  private _initializeTextAnimation() {
    // INITIALIZATION OF TEXT ANIMATION (TYPING)
    // =======================================================
    HSCore.components.HSTyped.init('.js-typedjs')
  }

}
