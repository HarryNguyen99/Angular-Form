import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { SignupFinalComponent } from './signup-final/signup-final.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    SigninComponent,
    SignupComponent,
    TemplateDrivenFormComponent,
    SignupFinalComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
