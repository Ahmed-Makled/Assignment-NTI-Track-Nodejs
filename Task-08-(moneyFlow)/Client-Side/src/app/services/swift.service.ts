import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

export interface IBranch {
  _id: string;
  balance: number;
  name: string;
  createdAt: string;
}
export const defualtBranch: IBranch = {
  _id: '',
  name: '',
  balance: 0,
  createdAt: '',
};
export const defualtTransaction: ITransaction = {
  _id: '',
  type: '',
  amount: 0,

  from: {
    id: '',
    name: '',
  },
  to: {
    id: '',
    name: '',
  },
  note: '',
  createdAt: '',
};
export interface ITransaction {
  type: string;
  _id: string;

  amount: number;

  from: {
    id: string;
    name: string;
  };
  to: {
    id: string;
    name: string;
  };
  note: string;
  createdAt: string;
}
@Injectable({
  providedIn: 'root',
})
export class SwiftService {
  constructor(
    private userService: UserService,
    private router: Router,
    private http: HttpClient
  ) {}
  private _Branch: IBranch[] = []; //use _ beacuse it`s References
  private _Transaction: ITransaction[] = []; //use _ beacuse it`s References

  baseURL = 'http://localhost:3000/swift';

  // Get Request Header [token auth]
  getReqheaders() {
    return {
      headers: {
        authorization: this.userService.getToken(),
      },
    };
  }

  // Fetch Branches
  fetchBracnhes() {
    this.http
      .get<{ branches: IBranch[] }>(
        `${this.baseURL}/branches/fullBranchList`,
        this.getReqheaders()
      )
      .subscribe(
        (data) => {
          return (this._Branch = data.branches);
        },
        (err) => console.log(err)
      );
  }
  // Get Branches

  get getBranches() {
    return this._Branch.slice();
  }
  // Get Branches bu id
  getBranchById(id: string) {
    return this._Branch.find((branch) => branch._id == id);
  }

  // Create Branch

  CreateBranch(name: string, balance: number) {
    this.http
      .post<{ branches: IBranch }>(
        `${this.baseURL}/branches/createBranch`,
        { name, balance },
        this.getReqheaders()
      )
      .subscribe(
        (data) => {
          this._Branch.push(data.branches);
          this.router.navigate(['home']);
        },
        (err) => console.log(err)
      );
  }

  // Fetch transactions
  fetchTransaction() {
    this.http
      .get<{ transactions: ITransaction[] }>(
        `${this.baseURL}/transactions/fullTransactions`,
        this.getReqheaders()
      )
      .subscribe(
        (data) => {
          console.log(data.transactions);
          return (this._Transaction = data.transactions);
        },
        (err) => console.log(err)
      );
  }

  // Get Transactions

  get getTransactions() {
    return this._Transaction.slice();
  }
  // Get Transactions bu id
  gettransactionById(id: string) {
    return this._Transaction.find((branch) => branch._id == id);
  }

  // Create  transaction

  CreateTransaction(
    type: string,
    note: string,
    fromId: string,
    toID: string,
    amount: number
  ) {
    this.http
      .post<{ branches: IBranch }>(
        `${this.baseURL}/transactions/createBranch`,
        { type, note, fromId, toID, amount },
        this.getReqheaders()
      )
      .subscribe(
        (data) => {
          this._Branch.push(data.branches);
          this.router.navigate(['home']);
        },
        (err) => console.log(err)
      );
  }
}
