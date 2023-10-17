function checkTransactionHistory(pin) {
// Check if PIN is correct
if (pin !== correctPin) {
// Decrease the number of attempts
remaining
attemptsRemaining--;
// Check if there are attempts remaining
if (attemptsRemaining > 0) {
// Return error message with remaining
attempts
return `Error: Incorrect PIN entered.
${attemptsRemaining} attempts
remaining.`;
} else {
// Lock the account
lockAccount();
return 'Account locked due to too many
incorrect PIN attempts.';
}
}
// Retrieve transaction history
const transactionHistory =
retrieveTransactionHistory();
// Return success message with transaction
history
return 'Transaction history retrieved
successfully';
}
