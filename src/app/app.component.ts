import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bre-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
}
