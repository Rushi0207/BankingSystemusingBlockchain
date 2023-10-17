function isValidUsername(username) {
// Check if username contains only letters
and numbers
const regex = /^[a-zA-Z0-9]+$/;
return regex.test(username);
}
function isSecurePassword(password) {
// Check if password is at least 8 characters
long and contains at least one uppercase
letter, one lowercase letter, and one number
const regex =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{
8,}$/;
return regex.test(password);
}
function isAvailableUsername(username) {
// Check if username is not already taken
const existingUsernames = ["user1",
"user2", "user3"]; // Replace with actual list
of existing usernames
return
!existingUsernames.includes(username);
}
