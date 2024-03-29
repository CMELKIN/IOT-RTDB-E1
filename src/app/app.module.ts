import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { environment } from '../environments/environment'; 

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp({"projectId":"rtdb-iot-7ed77","appId":"1:710810246043:web:4926459359f640ea56df3e","databaseURL":"https://rtdb-iot-7ed77-default-rtdb.firebaseio.com","storageBucket":"rtdb-iot-7ed77.appspot.com","apiKey":"AIzaSyAkk1joye4AgPNNKfJ-hgdQOOdghX_9OG8","authDomain":"rtdb-iot-7ed77.firebaseapp.com","messagingSenderId":"710810246043"})), provideDatabase(() => getDatabase())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
