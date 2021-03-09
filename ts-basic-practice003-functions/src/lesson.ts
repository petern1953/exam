export default class calculator {
  /**
   * Egészítsd ki a sum metódust.
   * Két szám típusú paramétert vár és az összegüket adja vissza.
   * @param {number} a - az első szám.
   * @param {number} b - a második szám.
   * @returns {number} a két paraméterként kapott szám összege.
   */
  static sum(a: number, b: number): number {
    return a + b;
  }

  /**
   * Egészítsd ki a difference metódust.
   * Két szám típusú paramétert vár és a különbségüket adja vissza.
   * @param {number} a - az első szám.
   * @param {number} b - a második szám.
   * @returns {number} a két paraméterként kapott szám különbsége.
   */
  static difference(a: number, b: number): number {
    return a - b;
  }
}

// interface proba {
//     a: boolean;
//     b: number;
//     [ab: string]: any;
// }
// let pr: proba = { a: false, b: 5, c: [true, false] }

// interface ReadonlyStringArray {
//     readonly [idx: number]: string;
// }
// let myArray: ReadonlyStringArray = ["a","b","true"];

// class Control {
//     private state: any;
// }
// interface SelectableControl extends Control {
//     select(): void;
// }
// class Button extends Control implements SelectableControl {
//     select() { };
//     drop() { };
// }
