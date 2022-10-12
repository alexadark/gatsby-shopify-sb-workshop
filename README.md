# Refresh the cart after the checkout

As we have seen previously the cart is not cleared after checkout, for this:

1.  Create function getNewId
2.  in initializeCheckout function check if there is a completed checkout, if yes, create a new checkout id with `getNewId()`
