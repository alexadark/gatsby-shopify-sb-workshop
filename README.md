# Persitent cart

1.  in initializeCheckout function:

- Check if a checkout id already exists in the local storage
- if it exists fetch it from shopify
- if not, create it and add it to local storage
- set checkout to state

2. Add ButtonAddToCart to the single product
