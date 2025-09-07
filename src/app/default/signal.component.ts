import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalComponent {
  actions: string[] = [];
  counter = signal(0);

  increment() {
    this.counter.update((oldCounter) => oldCounter + 1);
    this.actions.push('INCREMENT');
  }

  decrement() {
    this.counter.update((oldCounter) => oldCounter - 1);
    this.actions.push('DECREMENT');
  }
}
