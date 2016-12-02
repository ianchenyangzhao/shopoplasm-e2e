# Regular Promotion Situation tests

## Test Includes Follow Scenarios:

1. Dollar amount discount (fjcollect):
    - expect any purchase to have 5 dollar discount
2. Percentage discount (fjcollect1):
    - expect any purchase to have 20% off
3. Free shipping discount (freeups):
    - expect any purchase to have free shipping
4. Gift with purchase:
    - expect extra ring being added to cart.
5. Add discount first, then activate a gift with purchase:
    - apply discount to cart
    - expect gwp activated and ask to replace discount
    - confirm:
        - expect discount being removed
        - expect gift with purchase in cart
    - reject:
        - expect discount in cart
        - expect gift with purchase disappear

6. Activate gift with purchase first, then apply discount code:
    - apply gift with purchase added to cart
    - apply discount expect alert to replace gift with purchase
    - confirm: 
        - expect discount being added to cart
        - expect gift with purchase being removed
   - reject:         - expect gift with purchase in cart
        - expect discount disappear



