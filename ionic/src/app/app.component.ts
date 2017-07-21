import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, App, Config, IonicPage } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

// Component
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

import { ModalComponent } from '../pages/modal/modal.component';
import { NavigationComponent } from '../pages/navigation/navigation.component';

import { PopoverComponent } from '../pages/popover/popover.component';
import { RadioComponent } from '../pages/radio/radio.component';
import { RangeComponent } from '../pages/range/range.component';


//@IonicPage()
@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    //rootPage: any = TabsPage;
    rootPage: any = NavigationComponent;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, app: App, config: Config) {


        platform.ready().then((readySource) => {
            console.log(readySource)
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    @ViewChild('mycontent') mycontent

    openPage(p) {
        this.rootPage = PageOne;
    }
    openPage2() {
        this.rootPage = PageTwo;
    }
}
