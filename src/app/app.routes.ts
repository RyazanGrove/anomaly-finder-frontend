import { Routes } from '@angular/router';
import { ScoresComponent } from './components/scores/scores.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RulesComponent } from './components/rules/rules.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    { path: 'main', component: LandingPageComponent },
    { path: 'rules', component: RulesComponent },
    { path: 'scores', component: ScoresComponent },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: '/main', pathMatch: 'full' }, // Default route
    { path: '**', redirectTo: '/main' } // Wildcard route for 404
];
