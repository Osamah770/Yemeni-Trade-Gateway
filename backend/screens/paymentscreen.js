import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const PaymentScreen = ({ navigation }) => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');

  const handlePayment = async () => {
    // Simulate payment process
    alert(`Payment of ${amount} to ${recipient} successful!`);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>خيارات الدفع:</Text>
      <TextInput
        placeholder="المبلغ"
        value={amount}
        onChangeText={(text) => setAmount(text)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="المستلم"
        value={recipient}
        onChangeText={(text) => setRecipient(text)}
      />
      <Button title="تأكيد الدفع" onPress={handlePayment} />
    </View>
  );
};

export default PaymentScreen;