import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component/login.component';
import { WelcomeComponent } from './welcome.component/welcome.component';
import { ErrorComponent } from './error.component/error.component';
import { ListTodosComponent } from './list-todos.component/list-todos.component';
import { LogoutComponent } from './logout.component/logout.component';
import { RouteGuardService } from './service/route-guard.service';

export const routes: Routes = [
    // The order of the routes DOES MATTER.
    { path: '', component: LoginComponent,  },
    { path: 'login', component: LoginComponent},
    { path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService] },
    { path: 'todos', component: ListTodosComponent, canActivate:[RouteGuardService] },
    { path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService] },

    { path: '**', component: ErrorComponent}
];
