import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { EducationComponent } from './education/education.component';
import { FriendsComponent } from './friends/friends.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    PersonalDetailComponent,
    EducationComponent,
    FriendsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
