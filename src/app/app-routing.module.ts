import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
    // { path: '', redirectTo: '1', pathMatch: 'full' },
    { path: '', component: IndexComponent, pathMatch: 'full' },
    { path: 'admin', component: AdminComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
