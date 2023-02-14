import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddfoodPage } from './addfood';

@NgModule({
  declarations: [
    AddfoodPage,
  ],
  imports: [
    IonicPageModule.forChild(AddfoodPage),
  ],
})
export class AddfoodPageModule {}
