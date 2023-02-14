import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AregisterPage } from './aregister';

@NgModule({
  declarations: [
    AregisterPage,
  ],
  imports: [
    IonicPageModule.forChild(AregisterPage),
  ],
})
export class AregisterPageModule {}
