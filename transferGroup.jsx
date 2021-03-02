// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')('sk_test_51IQL66IeCmjuYBJUD1KsumSL70HMon3tyCQbAWxDOQsgnLcb3bcGosClaMOyy4dUG2Z84BxHEs0FBPRLFDYbbEvC00tjgdemxI');

// Create a PaymentIntent:
const paymentIntent = await stripe.paymentIntents.create({
  amount: 10000,
  currency: 'usd',
  payment_method_types: ['card'],
  transfer_group: '{ORDER10}',
});

// Create a Transfer to the connected account (later):
const transfer = await stripe.transfers.create({
  amount: 7000,
  currency: 'usd',
  destination: '{{CONNECTED_STRIPE_ACCOUNT_ID}}',
  transfer_group: '{ORDER10}',
});

// Create a second Transfer to another connected account (later):
const secondTransfer = await stripe.transfers.create({
  amount: 2000,
  currency: 'usd',
  destination: '{{OTHER_CONNECTED_STRIPE_ACCOUNT_ID}}',
  transfer_group: '{ORDER10}',
});