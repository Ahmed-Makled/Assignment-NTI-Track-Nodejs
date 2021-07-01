import { SignupComponent } from './views/signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './views/signin/signin.component';
import { HomeComponent } from './views/home/home.component';
import { UnAuthRequiredGuard } from './Guards/un-auth-required.guard';
import { AuthRequiredGuard } from './Guards/auth-required.guard';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { NewBranchComponent } from './components/Branches/new-branch/new-branch.component';
import { NewTransactionComponent } from './components/Transactions/new-transaction/new-transaction.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [AuthRequiredGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    // canActivate: [AuthRequiredGuard],
  },
  {
    path: 'signin',
    component: SigninComponent,
    // canActivate: [UnAuthRequiredGuard],
  },
  {
    path: 'signup',
    component: SignupComponent,
    // canActivate: [UnAuthRequiredGuard],
  },
  {
    path: 'newBranch',
    component: NewBranchComponent,
    // canActivate: [UnAuthRequiredGuard],
  },
  {
    path: 'newTransaction',
    component: NewTransactionComponent,
    // canActivate: [UnAuthRequiredGuard],
  },

  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
