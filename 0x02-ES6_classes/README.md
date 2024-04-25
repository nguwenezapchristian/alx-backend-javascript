# ES6 CLASSES

Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.

## Defining classes

Classes are in fact "special functions", and just as you can define function expressions and function declarations, a class can be defined in two ways: a class expression or a class declaration.

## Code snippet

Implement a class named Currency:

    - Constructor attributes:
        code (String)
        name (String)
    Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
    Implement a getter and setter for each attribute.
    Implement a method named displayFullCurrency that will return the attributes in the following format name (code).

```
/* eslint-disable */
export default class Currency {
    constructor(code, name) {
        if (typeof code !== 'string') {
          throw new TypeError('Code must be a string');
        }
        if (typeof name !== 'string') {
          throw new TypeError('Name must be a string');
        }
        this._code = code;
        this._name = name;
    }

    get code() {
      return this._code;
    }
    get name() {
      return this._name;
    }

    set code(code) {
      if (typeof code !== 'string') {
        throw new TypeError('Code must be a string');
      }
      this._code = code;
    }
    set name(name) {
      if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
      }
      this._name = name;
    }

    displayFullCurrency() {
      return `${this._name} (${this._code})`;
    }
}
```

Implement a class named Pricing:

    Constructor attributes:
        amount (Number)
        currency (Currency)
    Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
    Implement a getter and setter for each attribute.
    Implement a method named displayFullPrice that returns the attributes in the following format amount currency_name (currency_code).
    Implement a static method named convertPrice. It should accept two arguments: amount (Number), conversionRate (Number). The function should return the amount multiplied by the conversion rate.


```
/* eslint-disable */
import Currency from './3-currency';

export default class Pricing {
    constructor(amount, currency) {
      if (typeof amount !== 'number') {
        throw new TypeError('Amount must be a number');
      }
      if (!(currency instanceof Currency))  {
        throw new TypeError('Currency must be an instance of Currency');
      }
      this._amount = amount;
      this._currency = currency;
    }

    get amount() {
        return this._amount;
    }
    get currency() {
        return this._currency;
    }

    set amount(amount) {
        if (typeof amount !== 'number') {
            throw new TypeError('Amount must be a number');
        }
        this._amount = amount;
    }
    set currency(currency) {
        if (!(currency instanceof Currency))  {
            throw new TypeError('Currency must be an instance of Currency');
          }
        this._currency = currency;
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`
    }

    static convertPrice(amount, conversionRate) {
        if (typeof amount !== 'number') {
            throw new TypeError('Amount must be a number');
        }
        if (typeof conversionRate !== 'number') {
            throw new TypeError('Conversion rate must be a number');
        }
        return amount * conversionRate;
    }
}
```