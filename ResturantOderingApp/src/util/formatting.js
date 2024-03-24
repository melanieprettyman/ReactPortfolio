
/*Intl.NumberFormat() => Internationalization obj takes in which market we want to format a price
  and a function for how to config currencies or numbers in general */

export const currencyFormatter = new Intl.NumberFormat('en-US',{
    style: 'currency',
    currency: 'USD',
});