import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreerCompteCandidatPage } from './creer-compte-candidat.page';

const routes: Routes = [
  {
    path: '',
    component: CreerCompteCandidatPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreerCompteCandidatPage]
})
export class CreerCompteCandidatPageModule {}
