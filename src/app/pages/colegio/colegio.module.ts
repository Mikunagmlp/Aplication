import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ColegioPage } from './colegio.page';
import {SignaturePadModule} from 'angular2-signaturepad';

const routes: Routes = [
  {
    path: '',
    component: ColegioPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        SignaturePadModule
    ],
  declarations: [ColegioPage]
})
export class ColegioPageModule {}
