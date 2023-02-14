import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DinnerfoodPage } from './dinnerfood';

@NgModule({
  declarations: [
    DinnerfoodPage,
  ],
  imports: [
    IonicPageModule.forChild(DinnerfoodPage),
  ],
})
export class DinnerfoodPageModule {}
