import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WordsAdminComponent } from './components/words-admin/words-admin.component';
import { IndexComponent } from './components/index/index.component';
import { WordsPracticeComponent } from './components/words-practice/words-practice.component';
import { VerbsPracticeComponent } from './components/verbs-practice/verbs-practice.component';
import { VerbsAdminComponent } from './components/verbs-admin/verbs-admin.component';

const routes: Routes = [
    // { path: '', redirectTo: '1', pathMatch: 'full' },
    { path: '', component: IndexComponent, pathMatch: 'full' },
    { path: 'verbs/admin', component: VerbsAdminComponent },
    { path: 'verbs/practice', component: VerbsPracticeComponent },
    { path: 'words/admin', component: WordsAdminComponent },
    { path: 'words/practice', component: WordsPracticeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
