import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ToDoRoutingModule } from './to-do-routing.module';
import { ToDoComponent } from './to-do.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/Layout/navbar/navbar.component';
import { FooterComponent } from './Components/Layout/footer/footer.component';
import { HeaderComponent } from './Components/Layout/header/header.component';
import { ToDoListComponent } from './Components/to-do-list/to-do-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EvenOddHighlightDirective } from '../Directives/even-odd-highlight.directive';
import { FilterPipe } from '../Pipes/filter.pipe';


@NgModule({
  declarations: [
    ToDoComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    ToDoListComponent,
    EvenOddHighlightDirective,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ToDoRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ToDoComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
  ]
})
export class ToDoModule { }
