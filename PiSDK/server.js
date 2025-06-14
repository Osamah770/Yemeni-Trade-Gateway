const { createTransaction } = require('./blockchain');

app.post('/payment/blockchain', async (req, res) => {
  const { amount, recipient } = req.body;
  try {
    const transaction = await createTransaction(amount, recipient);
    res.json({ message: 'Payment via Blockchain successful', transaction });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process Blockchain payment' });
  }
});