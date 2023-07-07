import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/navs/header/header.component';
import { FooterComponent } from './components/navs/footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule { }
