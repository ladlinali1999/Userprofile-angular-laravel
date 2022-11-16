import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DisplayprofileComponent } from './displayprofile/displayprofile.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import{MatIconModule} from '@angular/material/icon';
import{MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSliderModule} from '@angular/material/slider';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddprofileComponent } from './addprofile/addprofile.component';
import{HttpClientModule} from '@angular/common/http';
import { ModulepermissionComponent } from './modulepermission/modulepermission.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { FieldpermissionComponent } from './fieldpermission/fieldpermission.component';
import { FielddataComponent } from './fielddata/fielddata.component';



const routes:Routes=[
  {path:'profile',component:DisplayprofileComponent},
  // {path:'profile/:id',component:DisplayprofileComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'addprofile',component:AddprofileComponent},
  {path:'modulepermission/:id',component:ModulepermissionComponent},
  // {path:'edit',component:EditComponent},
  {path:`edit/:id`,component:EditComponent},
  {path:'field', component:FieldpermissionComponent}
  
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DisplayprofileComponent,
    AboutusComponent,
    AddprofileComponent,
    ModulepermissionComponent,
    EditComponent,
    FieldpermissionComponent,
    FielddataComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatSliderModule,
    MatTabsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
