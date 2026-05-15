import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from "./welcome.component/welcome.component";
import { LoginComponent } from './login.component/login.component';
import { ListTodosComponent } from './list-todos.component/list-todos.component';
import { MenuComponent } from './menu.component/menu.component';
import { FooterComponent } from './footer.component/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WelcomeComponent, LoginComponent, ListTodosComponent, MenuComponent, FooterComponent],
  templateUrl: './app.html',
  //template: '<h1>{{ title() }}</h1>',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Todo');
}
