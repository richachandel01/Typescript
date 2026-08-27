// Day 04 - Access Modifiers

class BankAccount {
  public accountHolder: string;

  private balance: number;

  protected accountType: string;

  constructor(
    accountHolder: string,
    balance: number,
    accountType: string
  ) {
    this.accountHolder = accountHolder;
    this.balance = balance;
    this.accountType = accountType;
  }

  public deposit(amount: number): void {
    if (amount <= 0) {
      console.log("Deposit amount must be greater than zero.");
      return;
    }

    this.balance += amount;
  }

  public withdraw(amount: number): void {
    if (amount <= 0) {
      console.log("Withdrawal amount must be greater than zero.");
      return;
    }

    if (amount > this.balance) {
      console.log("Insufficient balance.");
      return;
    }

    this.balance -= amount;
  }

  public getBalance(): number {
    return this.balance;
  }
}


const account = new BankAccount(
  "Richa",
  10000,
  "Savings"
);

console.log("Account Holder:", account.accountHolder);
console.log("Initial Balance:", account.getBalance());

account.deposit(5000);

console.log("After Deposit:", account.getBalance());

account.withdraw(2000);

console.log("After Withdrawal:", account.getBalance());


// private property cannot be accessed directly
// account.balance = 50000; // Error


// protected property can be accessed inside the class
// and its subclasses, but not from outside.
// account.accountType = "Current"; // Error