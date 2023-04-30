import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './not-found/not-found-page/not-found-page.component';

let routes: Routes;


if(localStorage.getItem('session')=="client"){
  routes=[{
    path: '',loadChildren: () => import('./web/web.module').then(m => m.WebModule)
  }]
}else{
  routes=[]
}

routes.push({
  path: '**', component: NotFoundPageComponent
})

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
