import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { PracticeComponent } from './components/practice/practice.component';

const routes: Routes = [
    // { path: '', redirectTo: '1', pathMatch: 'full' },
    { path: '', component: IndexComponent, pathMatch: 'full' },
    { path: 'admin', component: AdminComponent },
    { path: 'practice', component: PracticeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
