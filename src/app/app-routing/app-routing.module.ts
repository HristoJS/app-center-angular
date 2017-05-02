import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {UploadComponent} from '../upload/upload.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/apps',
  //   pathMatch: 'full'
  // },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'upload',
    component: UploadComponent
  },
  // {
  //   path: 'apps/:id',
  //   component: AppDetailComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
