const balance = document.getElementById("balance");
const income = document.getElementById("income")
const expenses = document.getElementById("expenses")
const transactionList = document.getElementById("transaction-list")
const form = document.getElementById("form")
const text = document.getElementById("text")
const amount = document.getElementById("amount")

let transactions = [];

form.addEventListener("submit", function (e) {
    console.log("button clicked")
    e.preventDefault();
    const transaction = {
        id: Date.now(),
        text: text.value,
        amount: Number(amount.value)

    };
    transactions.push(transaction);

    addTransaction(transaction);
    updateValues();
    text.value = "";
    amount.value = "";

});

function addTransaction(transaction){
    console.log("addTransaction called");
    const li = document.createElement("li");

    li.innerHTML=`
    ${transaction.text}
    <span>${transaction.amount}</span>


    `;
    console.log(li)
    transactionList.appendChild(li);
}

function updateValues (){
    const amounts = transactions.map(item=>
        item.amount
    );

    const total = amounts.reduce((acc, item)=>
        acc + item , 0);

    const incomeTotal =amounts.filter(item=> item >0)
    .reduce ((acc, item)=> acc +item,0);

    const expensesTotal = amounts.filter(item=> item <0)
    .reduce((acc, item)=> acc+ item,0);


    balance.innerText= `${total}`;
    income.innerText = `${incomeTotal}`;
    expenses.innerText = `$
    {Math.abs(expensesTotal)}`;
        
}

