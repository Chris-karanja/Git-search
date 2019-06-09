import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LandingComponent } from './landing/landing.component';

const  routes: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'landing', component: LandingComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [ProfileComponent]