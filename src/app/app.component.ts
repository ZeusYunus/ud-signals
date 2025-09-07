import { Component } from '@angular/core';
import { SignalComponent } from './default/signal.component';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [SignalComponent]
})
export class AppComponent {}
