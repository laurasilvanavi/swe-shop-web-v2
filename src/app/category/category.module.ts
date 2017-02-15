import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryService } from './category.service';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CategoryComponent,
    ProductComponent
  ],
  providers: [
    CategoryService
  ]
})
export class CategoryModule { }
