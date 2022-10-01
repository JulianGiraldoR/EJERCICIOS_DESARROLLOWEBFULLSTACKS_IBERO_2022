import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components
import { TaskComponent } from './components/task/task.component';
import { PrivatetaskComponent } from './components/privatetask/privatetask.component'
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/tasks',
    pathMatch:'full'
  },
  {
    path: 'tasks',
    component: TaskComponent
  },
  {
    path:'private',
    component: PrivatetaskComponent
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'signin',
    component: SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
