'use strict';

/*Задача 3. Конструктор рядків

Напиши клас StringBuilder, який приймає один параметр initialValue — довільний рядок, 
який записується у приватну властивість value об'єкта, що створюється.*/

class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.#value += str;
  }
  padStart(str) {
    this.#value = str + this.#value;
  }
  padBoth(str) {
    this.#value = str + this.#value + str;
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="

new StringBuilder('.'); //значення приватної змінної builder — це об'єкт

builder.getValue(); //одразу після ініціалізації екземпляра повертає рядок .
builder.getValue(); //після виклику builder.padStart("^") повертає рядок ^.
builder.getValue(); //після виклику builder.padEnd("^") повертає рядок ^.^
builder.getValue(); //після виклику builder.padBoth("=") повертає рядок =^.^=
