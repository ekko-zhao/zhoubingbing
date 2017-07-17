import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ActionSheet } from '../pages/action-sheet/action-sheet';
import { AlertComponent } from '../pages/alert/alert.component';
import { BadgesComponent } from '../pages/badges/badges.component';
import { ButtonsComponent } from '../pages/buttons/buttons.component';
import { CardsComponent } from '../pages/cards/cards.component';
import { CheckboxComponent } from '../pages/checkbox/checkbox.component';
import { DateTimeComponent } from '../pages/date-time/date-time.component';
import { FABsComponent } from '../pages/fabs/fabs.component';
import { GesturesComponent } from '../pages/gestures/gestures.component';
import { GridComponent } from '../pages/grid/grid.component';
import { IconsComponent } from '../pages/icons/icons.component';
import { InputsComponent } from '../pages/inputs/inputs.component';
import { ListsComponent } from '../pages/lists/lists.component';
import { LoadingComponent } from '../pages/loading/loading.component';
import { MenusComponent } from '../pages/menus/menus.component';
import { PageOne } from '../pages/menus/page-one';
import { PageTwo } from '../pages/menus/page-two';


let component = [
    ActionSheet,
    AlertComponent,
    BadgesComponent,
    ButtonsComponent,
    CardsComponent,
    CheckboxComponent,
    DateTimeComponent,
    FABsComponent,
    GesturesComponent,
    GridComponent,
    IconsComponent,
    ListsComponent,
    LoadingComponent,
    MenusComponent,
    PageOne,
    PageTwo
]


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        component
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        component
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ],
     schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
