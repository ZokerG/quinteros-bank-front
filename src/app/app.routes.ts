import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './security/login/login.component';
import { PagesComponent } from './pages/pages.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            {
                path: 'home',
                component: DashboardComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'pages/home',
        pathMatch: 'full'
    }
];
