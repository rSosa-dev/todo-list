import { Routes } from '@angular/router';
import { LoginComponent } from './login.component/login.component';
import { WelcomeComponent } from './welcome.component/welcome.component';
import { ErrorComponent } from './error.component/error.component';

export const routes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'login', component: LoginComponent},
    { path: 'welcome', component: WelcomeComponent},
    { path: '**', component: ErrorComponent}
];
