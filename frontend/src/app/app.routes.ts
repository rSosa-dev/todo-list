import { Routes } from '@angular/router';
import { LoginComponent } from './login.component/login.component';
import { WelcomeComponent } from './welcome.component/welcome.component';
import { ErrorComponent } from './error.component/error.component';
import { ListTodosComponent } from './list-todos.component/list-todos.component';

export const routes: Routes = [
    // The order of the routes DOES MATTER.
    { path: '', component: LoginComponent},
    { path: 'login', component: LoginComponent},
    { path: 'welcome/:name', component: WelcomeComponent},
    { path: 'todos', component: ListTodosComponent},

    { path: '**', component: ErrorComponent}
];
