import { Component, OnInit } from '@angular/core';
import { Platform, NavController, ViewController, NavParams, Keyboard } from 'ionic-angular';
//import { OtherPage } from './other-page';
//import { OtherPage2 } from './other-page2';

@Component({
    templateUrl: 'navigation.component.html'
})
export class NavigationComponent {
    items = [];

    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public plt: Platform) {

        this.items = [
            {
                'title': 'Angular',
                'icon': 'angular',
                'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
                'color': '#E63135'
            },
            {
                'title': 'CSS34',
                'icon': 'css3',
                'description': 'The latest version of cascading stylesheets - the styling language of the web!',
                'color': '#0CA9EA'
            }
        ]
    }

    ngOnInit(){
        console.log(this.plt.platforms())
    }
    openNavDetailsPage(item) {
       this.navCtrl.push('otherpage2', { item: item, id:'2323'});
        //this.navCtrl.push(OtherPage2, { item: item });
    }
    ionViewDidEnter(){
       /*  console.log(this.navCtrl)
        console.log(this.viewCtrl)
        console.log(this.viewCtrl['parent'])
        console.log(this.navCtrl.getViews())

        console.log(this.navCtrl)
        //this.navCtrl.insert(0, OtherPage) */
    }
    ionViewDidLeave(){
        console.log('leave0')
    }

}
