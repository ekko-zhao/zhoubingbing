
import { NgModule} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OtherPage2 } from './other-page2';

@NgModule({
  declarations: [
    OtherPage2
  ],
  imports: [
    IonicPageModule.forChild(OtherPage2)
  ],
  entryComponents: [
    OtherPage2
  ]
})
export class OtherPage2Module {}
