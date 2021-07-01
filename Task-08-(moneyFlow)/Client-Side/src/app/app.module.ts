import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './views/signup/signup.component';
import { SigninComponent } from './views/signin/signin.component';
import { HomeComponent } from './views/home/home.component';
import { DefaultNavComponent } from './components/nav-bar/default-nav/default-nav.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { NavActionComponent } from './components/nav-bar/nav-action/nav-action.component';

import { TransactionsDetailsComponent } from './components/Transactions/transactions-details/transactions-details.component';
import { BranchesDetailsComponent } from './components/Branches/branches-details/branches-details.component';
import { NewTransactionComponent } from './components/Transactions/new-transaction/new-transaction.component';
import { BranchListComponent } from './components/Branches/branch-list/branch-list.component';
import { TransactionListComponent } from './components/Transactions/transaction-list/transaction-list.component';
import { NewBranchComponent } from './components/Branches/new-branch/new-branch.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    DefaultNavComponent,
    NotFoundComponent,
    NavActionComponent,
    TransactionsDetailsComponent,
    BranchesDetailsComponent,
    NewTransactionComponent,
    BranchListComponent,
    TransactionListComponent,
    NewBranchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
