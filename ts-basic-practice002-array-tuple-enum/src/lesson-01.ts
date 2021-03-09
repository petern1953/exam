export default class calculator {
  // A változókat az osztályon belül így hozhatod létre.
  active: boolean = false;

  // Hozd létre a következő változókat a megfelelő típus annotációval.

  /** @type {Array} points - számok tömbje, 1 - 10 -ig egyesével. */
  // points: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  points: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  /**
   * A tömb minden eleme legyen egy objektum, ami egy felhasználót reprezentál.
   * Kötelező elemek: name<string>, email<string>.
   * Inicializáld a tömböt, legyen legalább két eleme.
   * @type {Array} users - minden elem egy felhasználó.
   */
  // users: Array<{ name: string, email: string }> = [
  users: { name: string; email: string }[] = [
    {
      name: "Jenő",
      email: "a@b",
    },
    {
      email: "Kálmán",
      name: "b@c",
    },
  ];

  /**
   * A tömb minden eleme legyen egy objektum, ami egy terméket reprezentál.
   * Kötelező elemek: name<string>, price<number>, stock<number>.
   * Opcionális elemek: active<boolean>.
   * Inicializáld a tömböt, legyen legalább két eleme.
   * @type {Array} products - minden elem egy termék
   */
  //   products: Array<{
  //     name: string;
  //     price: number;
  //     stock: number;
  //     active?: boolean;
  //   }> = [
  products: {
    name: string;
    price: number;
    stock: number;
    active?: boolean;
  }[] = [
    {
      name: "Kukubenkó",
      price: 123,
      stock: 1020,
    },
    {
      name: "Jenőke",
      price: 456,
      stock: 5050,
      active: true,
    },
  ];

  /**
   * Inicializálj egy tuple típust, azaz adj neki értéket is.
   * @type {Tuple} role - number, string, boolean.
   */
  role: [number, string, boolean] = [11, "a", true];
}
