import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ProductComponent } from './components/product/product.component';


@NgModule({
  declarations: [HeaderComponent, ShoppingCartComponent, ProductComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports: [
    BrowserModule,
    ReactiveFormsModule,
    HeaderComponent,
    FontAwesomeModule,
    ShoppingCartComponent,
    ProductComponent
  ]
})
export class SharedModule { 

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
