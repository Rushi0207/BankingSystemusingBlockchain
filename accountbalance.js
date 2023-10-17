import React, { useState } from 'react';
function App() {
const [balance, setBalance] =
useState(1000);
const [attempts, setAttempts] =
useState(3);
const [error, setError] = useState('');
const handlePinSubmit = (event) => {
event.preventDefault();
const pin =
event.target.elements.pin.value;
if (pin === '1234') {
setError('');
setAttempts(3);
} else {
setAttempts(attempts - 1);
if (attempts === 1) {
setError('Account locked due to too
many incorrect PIN attempts.');
} else {
setError(`Incorrect PIN entered.
${attempts - 1} attempts remaining.`);
}
}
event.target.elements.pin.value = '';
};
return (
<div>
<h1>Account balance:
${balance.toFixed(2)}</h1>
<form onSubmit={handlePinSubmit}>
<label>
Enter PIN:
<input type="password" name="pin"
/>
</label>
<button
type="submit">Submit</button>
</form>
{error && <p>{error}</p>}
</div>
);
}
export default App;
