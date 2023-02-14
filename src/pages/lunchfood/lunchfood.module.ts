import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LunchfoodPage } from './lunchfood';

@NgModule({
  declarations: [
    LunchfoodPage,
  ],
  imports: [
    IonicPageModule.forChild(LunchfoodPage),
  ],
})
export class LunchfoodPageModule {}
