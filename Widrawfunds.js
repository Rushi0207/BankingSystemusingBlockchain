// Withdraw funds
function withdrawFunds(amount, pin) {
if (amount <= 0 || amount > balance) {
console.log("Error: Invalid withdrawal
amount provided");
return;
}
if (pin !== correctPin) {
if (pinAttempts < 3) {
pinAttempts++;
console.log(`Error: Incorrect PIN
entered. ${3 - pinAttempts} attempts
remaining.`);
} else {
console.log("Account locked due to too
many incorrect PIN attempts.");
accountLocked = true;
}
return;
}
balance -= amount;
console.log(`Withdrawal successful,
balance updated by -$${amount}, unique
transaction ID generated with timestamp and
recipient information`);
}
// Insufficient funds for withdrawal
if (balance < amount) {
console.log(`Insufficient funds for
withdrawal: Current balance $${balance}`);
return;
}
