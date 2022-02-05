import { Component } from '@angular/core';

@Component({
    selector: 'of-academy-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'example-app';
    constructor() {
        console.log('jedi test');
    }
}
