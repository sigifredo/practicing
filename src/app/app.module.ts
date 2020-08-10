import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordsAdminComponent } from './components/words-admin/words-admin.component';
import { IndexComponent } from './components/index/index.component';
import { WordsService } from './services/words.service';
import { HttpClientModule } from '@angular/common/http';
import { WordsPracticeComponent } from './components/words-practice/words-practice.component';
import { VerbsAdminComponent } from './components/verbs-admin/verbs-admin.component';
import { VerbsPracticeComponent } from './components/verbs-practice/verbs-practice.component';

@NgModule({
    declarations: [
        AppComponent,
        WordsAdminComponent,
        IndexComponent,
        WordsPracticeComponent,
        VerbsAdminComponent,
        VerbsPracticeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [WordsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
