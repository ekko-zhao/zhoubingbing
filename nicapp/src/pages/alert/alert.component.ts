import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';

@Component({
    templateUrl: 'alert.component.html'
})
export class AlertComponent {
    constructor(private alertCtrl: AlertController) { }
    // Alert options
    /*
        title	string	The title for the alert.
        subTitle	string	The subtitle for the alert.
        message	string	The message for the alert.
        cssClass	string	Additional classes for custom styles, separated by spaces.
        inputs	array	An array of inputs for the alert. See input options.
        buttons	array	An array of buttons for the alert. See buttons options.
        enableBackdropDismiss	boolean	Whether the alert should be dismissed by tapping the backdrop. Default true.
    */

    // Input options
    /*
        type	string	The type the input should be: text, tel, number, etc.
        name	string	The name for the input.
        placeholder	string	The input's placeholder (for textual/numeric inputs)
        value	string	The input's value.
        label	string	The input's label (only for radio/checkbox inputs)
        checked	boolean	Whether or not the input is checked.
        id	string	The input's id.
    */

    // Button options
    /*
        text	string	The buttons displayed text.
        handler	any	Emitted when the button is pressed.
        cssClass	string	An additional CSS class for the button.
        role	string	The buttons role, null or cancel.
    */


    presentAlert() {
        let alert = this.alertCtrl.create({
            title: 'Low battery',
            subTitle: '10% of battery remaining',
            buttons: ['Dismiss']
        });
        alert.present();
    }

    presentConfirm() {
        let alert = this.alertCtrl.create({
            title: 'Confirm purchase',
            message: 'Do you want to buy this book?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Buy',
                    handler: () => {
                        console.log('Buy clicked');
                    }
                }
            ]
        });
        alert.present();
    }

    showPrompt() {
        let prompt = this.alertCtrl.create({
            title: 'Login',
            message: "Enter a name for this new album you're so keen on adding",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log(data)
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: data => {
                        console.log('Saved clicked');
                    }
                }

            ]
        });
        prompt.present();
    }

    showRadio() {
        let alert = this.alertCtrl.create();
        alert.setTitle('Lightsaber color');
        // alert.setMessage('message');
        alert.addInput({
            type: 'radio',
            label: 'Blue',
            value: 'blue',
            checked: true
        });

        alert.addInput({
            type: 'radio',
            label: 'red',
            value: 'red'
        });

        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: data => {
                console.log(data)
            }
        });
        alert.present();
    }

    showCheckbox() {
        let alert = this.alertCtrl.create();
        alert.setTitle('Which planets have you visited?');

        alert.addInput({
            type: 'checkbox',
            label: 'Alderaan',
            value: 'value1',
            checked: true
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Bespin',
            value: 'value2'
        });

        alert.addButton('Cancel');
        alert.addButton({
            text: 'Okay',
            handler: data => {
                console.log('Checkbox data:', data);
            }
        });
        alert.present();
    }

}
