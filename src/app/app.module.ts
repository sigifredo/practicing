import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { IndexComponent } from './components/index/index.component';
import { WordService } from './services/word.service';
import { HttpClientModule } from '@angular/common/http';
import { PracticeComponent } from './components/practice/practice.component';

@NgModule({
    declarations: [
        AppComponent,
        AdminComponent,
        IndexComponent,
        PracticeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [WordService],
    bootstrap: [AppComponent]
})
export class AppModule { }
