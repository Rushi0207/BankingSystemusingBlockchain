function transferFunds(sender, recipient,
amount, pin) {
const senderBalance = sender.balance;
const recipientBalance = recipient.balance;
const transactionId =
`${Date.now()}-${sender.id}-${recipient.id
}`;
if (sender.pin !== pin) {
if (sender.pinAttempts < 3) {
sender.pinAttempts++;
const attemptsRemaining = 3 -
sender.pinAttempts;
console.log(`Error: Incorrect PIN
entered. ${attemptsRemaining} attempts
remaining.`);
} else {
sender.isLocked = true;
console.log(`Account locked due to too
many incorrect PIN attempts.`);
}
return;
}
if (amount <= 0) {
console.log(`Error: Invalid transfer
amount provided`);
return;
}
if (senderBalance < amount) {
console.log(`Insufficient funds for
transfer: Current balance
$${senderBalance}`);
return;
}
sender.balance -= amount;
recipient.balance += amount;
console.log(`Funds transferred
successfully, balance updated for sender and
recipient, unique transaction IDs generated
with timestamp, sender, and recipient
information`);
}
