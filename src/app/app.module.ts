import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { CardComponent } from './shared/card-wrapper/card/card.component';
import { CardWrapperComponent } from './shared/card-wrapper/card-wrapper.component';
import { DetailComponent } from './views/detail/detail.component';
import { ToolsComponent } from './shared/tools/tools.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    CardWrapperComponent,
    DetailComponent,
    ToolsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
