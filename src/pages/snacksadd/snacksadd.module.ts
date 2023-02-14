import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SnacksaddPage } from './snacksadd';

@NgModule({
  declarations: [
    SnacksaddPage,
  ],
  imports: [
    IonicPageModule.forChild(SnacksaddPage),
  ],
})
export class SnacksaddPageModule {}
