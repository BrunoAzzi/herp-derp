import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MdButtonModule, MdCardModule, MdInputModule } from '@angular/material'

@NgModule({
  imports: [
    FlexLayoutModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
  ],
  exports: [
    FlexLayoutModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
  ]
})
export class MaterialModule { }
