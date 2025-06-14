const chainPiSdk = require('@chainpi/sdk');

// Initialize Chain Pi SDK
const sdk = new chainPiSdk({
  apiKey: 'your-api-key',
  apiSecret: 'your-api-secret',
});

// Example: Create a transaction
async function createTransaction(amount, recipient) {
  try {
    const transaction = await sdk.transaction.create({
      amount: amount,
      recipient: recipient,
    });
    return transaction;
  } catch (error) {
    console.error('Error creating transaction:', error);
    throw error;
  }
}

module.exports = {
  createTransaction,
};