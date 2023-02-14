import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedbackviewPage } from './feedbackview';

@NgModule({
  declarations: [
    FeedbackviewPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedbackviewPage),
  ],
})
export class FeedbackviewPageModule {}
