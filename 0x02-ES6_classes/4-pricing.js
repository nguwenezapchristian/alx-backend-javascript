/* eslint-disable */
import Currency from './3-currency';

export default class Pricing {
    constructor(amount, currency) {
      if (typeof amount !== 'number') {
        throw new TypeError('Amount must be a number');
      }
      if (typeof currency !== typeof Currency)  {
        throw new TypeError('Currency must be an object of Currency');
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
        if (typeof currency !== typeof Currency)  {
            throw new TypeError('Currency must be an object of Currency');
        }
        this._currency = currency;
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`
    }

    convertPrice(amount, conversionRate) {
        if (typeof amount !== 'number') {
            throw new TypeError('Amount must be a number');
        }
        if (typeof conversionRate !== 'number') {
            throw new TypeError('Conversion rate must be a number');
        }
        return amount * conversionRate;
    }
}