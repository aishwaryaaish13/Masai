

function createCounter() {
    let count = 0; 

    return {
        increment: function () {
            count++;
            console.log("Current count:", count);
        },
        decrement: function () {
            count--;
            console.log("Current count:", count);
        },
        showCount: function () {
            console.log("Current count:", count);
        }
    };
}
const counter = createCounter();
counter.increment(); 
counter.increment(); 
counter.decrement(); 

const counter1 = createCounter();
const counter2 = createCounter();

counter1.increment(); 
counter1.increment(); 

counter2.increment(); 
counter2.decrement(); 




function createBankAccount() {
    let balance = 0; 
    let transactionHistory = []; 

    return {
        deposit: function (amount) {
            balance += amount;
            transactionHistory.push({ type: "Deposit", amount });
            console.log("Deposited:", amount);
        },
        withdraw: function (amount) {
            if (amount > balance) {
                console.log("Insufficient balance");
                transactionHistory.push({ type: "Failed Withdrawal", amount });
            } else {
                balance -= amount;
                transactionHistory.push({ type: "Withdrawal", amount });
                console.log("Withdrawn:", amount);
            }
        },
        checkBalance: function () {
            console.log("Current Balance:", balance);
        },
        getHistory: function () {
            console.log("Transaction History:", transactionHistory);
        }
    };
}


const account = createBankAccount();
account.deposit(500);         
account.withdraw(200);        
account.withdraw(400);       
account.checkBalance();       
account.getHistory();         
console.log(account.balance); 