import { Routes } from '@angular/router';
import { ScoresComponent } from './components/scores/scores.component';
import { GameManagerComponent } from './components/game-manager/game-manager.component';
import { RulesComponent } from './components/rules/rules.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    { path: 'main', component: GameManagerComponent },
    { path: 'rules', component: RulesComponent },
    { path: 'scores', component: ScoresComponent },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: '/main', pathMatch: 'full' }, // Default route
    { path: '**', redirectTo: '/main' } // Wildcard route for 404
];
