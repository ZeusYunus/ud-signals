import { NgFor } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalComponent {
  actions = signal<string[]>([]);
  counter = signal(0);
  doubleCounter = computed(() => this.counter() * 2);

  increment() {
    this.counter.set(this.counter() + 1);
    this.actions.mutate((oldActions) => oldActions.push('INCREMENT'));
  }

  decrement() {
    this.counter.update((oldCounter) => oldCounter - 1);
    this.actions.update((oldActions) => [...oldActions, 'DECREMENT']);
  }
}
