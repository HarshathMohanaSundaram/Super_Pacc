import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AloginPage } from './alogin';

@NgModule({
  declarations: [
    AloginPage,
  ],
  imports: [
    IonicPageModule.forChild(AloginPage),
  ],
})
export class AloginPageModule {}
