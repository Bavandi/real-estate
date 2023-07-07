import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/navs/header/header.component';
import { FooterComponent } from './components/navs/footer/footer.component';
import { GoToComponent } from './components/go-to/go-to.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, GoToComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent, GoToComponent]
})
export class CoreModule { }
