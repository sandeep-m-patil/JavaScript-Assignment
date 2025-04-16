
function processTransactions(transactions) {
    // Initialize variables to track balances and totals
    let finalBalance = 0;
    let totalDeposits = 0;
    let totalWithdrawals = 0;

    // Iterate through each transaction
    for (const transaction of transactions) {
        // Process deposits
        if (transaction.type === 'deposit') {
            finalBalance += transaction.amount;
            totalDeposits += transaction.amount;
        }
        // Process withdrawals
        else if (transaction.type === 'withdrawal') {
            finalBalance -= transaction.amount;
            totalWithdrawals += transaction.amount;
        }
        // If there are any invalid transaction types, they will be ignored
    }

    // Return the final calculated values
    return {
        finalBalance,
        totalDeposits,
        totalWithdrawals
    };
}

// Example usage
const transactions = [
    { type: 'deposit', amount: 100 },
    { type: 'deposit', amount: 50 },
    { type: 'withdrawal', amount: 30 },
    { type: 'deposit', amount: 200 },
    { type: 'withdrawal', amount: 75 }
];

const result = processTransactions(transactions);
console.log(result);
// Expected output: { finalBalance: 245, totalDeposits: 350, totalWithdrawals: 105 }