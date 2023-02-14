import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FooddetailsPage } from './fooddetails';

@NgModule({
  declarations: [
    FooddetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(FooddetailsPage),
  ],
})
export class FooddetailsPageModule {}
