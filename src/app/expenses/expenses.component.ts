import { Component, OnInit } from '@angular/core';
import { Expense } from './expense';
import { Currencies } from './currencies';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.less']
})
export class ExpensesComponent implements OnInit {

  newExpense: Expense = {
  };

  euros : boolean;

  expenses: Expense[];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.loadExpenses();
    this.euros=false;
  }

  private loadExpenses(): void {
    this.expenseService.getExpenses().subscribe((expenses) => {
      this.expenses = expenses;
    });
  }

  saveExpense(): void {

    let currencies: Currencies;
    let currencyTmp = 0;
    let amountTmp = 0;
    let vatTmp = 0;
    this.expenseService.getCurrency().subscribe((currencies) => {
      if(this.euros){
        currencyTmp = parseFloat(currencies.rates['GBP']);    
        amountTmp = currencyTmp * this.newExpense.amount;
        this.newExpense.amount = amountTmp;
        vatTmp = currencyTmp * this.newExpense.vat;
        this.newExpense.vat = vatTmp;
      }
        this.expenseService.createExpense(this.newExpense).subscribe(() => {
          this.clearExpense();
          this.loadExpenses();
        });


      },
      error => {
         console.log('ERROR : An error occured getting the currency ');
      });
  }

  clearExpense(): void {
    this.newExpense = {};
  }

  changeCurrency(e) {
    console.log(e.target.value);
    this.euros = (e.target.value == "EUR") ? true : false;  
  }

  changeAmount(): void {
    console.log("Amount " + this.newExpense.amount);
    this.newExpense.vat = this.newExpense.amount * 0.20;
  }

}