import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from "./welcome.component/welcome.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WelcomeComponent],
  templateUrl: './app.html',
  //template: '<h1>{{ title() }}</h1>',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
