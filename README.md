# Buy Now button

1. `yarn add shopify-buy`
2. Create const `isBrowser` to check if we are in the browser: ` const isBrowser = typeof window !== "undefined";`
3. Modify the function addToCart
4. add the variantId prop to the `ButtonAddToCart` component
5. query the `variants.shopifyId` in the `Collections.js` pageQuery
6. in `ProductCard.js`pass the variantId prop in the ButtonAddToCart
7. test the functionality
