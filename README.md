# Buy Now button

1. `yarn add shopify-buy`
2. create checkout state : ` const [checkout, setCheckout] = useState({})`
3. Create const initializeCheckout
4. trigger initializeCheckout with useEffect
5. Create const `isBrowser` to check if we are in the browser: ` const isBrowser = typeof window !== "undefined";`
6. Modify the function addToCart
7. add the variantId prop to the `ButtonAddToCart` component
8. query the `variants.shopifyId` in the `Collections.js` pageQuery
9. in `ProductCard.js`pass the variantId prop in the ButtonAddToCart
10. test the functionality
