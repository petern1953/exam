# Angular Component gyakorlás

## Kezdő lépések

- Lépj be a letöltött mappába és állítsd be a projektet:
- `cd ang-basic-practice005-comp-shock`
- `code . -r`
- Telepítsd a függőségeket:
- `npm i`
- Indítsd el az Angular Development Server -t:
- `npm start`

## Feladatok

- FONTOS! Adatkötésekkel dolgozz, semmilyen adatot ne fixálj a .html állományokban!
- PONTOSAN A KÖVETKEZŐ SORRENDBEN KÉSZÍTSD EL A KOMPONENSEKET!

## 1. Icon

![IconComponent](src/assets/diagrams/icon-component.JPG)

- Feladata: egy megadott font-awesome ikont jelenít meg.
- Létrehozás: `ng g c common/icon` \*\*\* ok

  > TUDÁS: ha az a componens neve, hogy `icon`, az osztály `IconComponent` lesz, a szelektor pedig `app-icon`.

- Bejövő adat: `@Input() icon: string = '';` \*\*\* ok

  > TUDÁS: a bejövő adat, amit vár a komponens az icon, ami egy
  > változó lesz az osztályban.

- Nézet: `<i class="fa" [class]="icon"></i>` \*\*\* ok
  > TUDÁS: itt látszik, hogy alapból font-awesome-mal dolgozik, és külön meg van adva még egy osztály, property-binding segítségével, ami a konkrét ikont határozza meg. Ez az icon a
  > bejövő adat.

## 2. ActionButton

![ActionButtonComponent](src/assets/diagrams/action-button-component.JPG)

- Feladata: egy ikonnal ellátott Bootstrap gombot jelenít meg, és lekezeli a
  kattintás eseményét.
- Létrehozás: action-button \*\*\* ok
- Bejövő adat: `@var icon {string}, @default 'fa-pen'` \*\*\* ok

  > TUDÁS: ez a megadási forma egy olyan inputot jelent, ami így néz ki
  > `@Input() icon: string = 'fa-pen';`

- Bejövő adat: `@var btnClass {string}, @default 'btn-info'` \*\*\* ok
- Bejövő adat: `@var text {string}, @default ''` \*\*\* ok
- Kimenő esemény: `@Output() clicked: EventEmitter<boolean> = new EventEmitter();` \*\*\* ok

  > TUDÁS: ezzel az eseménnyel értesíti az action-button a szülő komponensét, hogy
  > kattintás történt benne. Erre azért van szükség, mert nem lát bele a szülő a
  > komponensbe. A `<boolean>` azt jelenti, hogy az adat, ami az eseményben
  > át lesz adva, boolean típusú lesz.

- Metódus: \*\*\* ok

```typescript
onUserClicked(): void {
  this.clicked.emit(true);
}
```

> TUDÁS: ahhoz, hogy le tudjam kezelni a gombra kattintást, kell egy
> eseménykezelő metódus, amit a typescript osztályban definiálok. A következő
> kódban azt láthatod, hogyan kötöm össze ezt a metódust a click eseménnyel.
> Ennek a metódusnak nincs paramétere, mivel csak a kattintás ténye a lényeges.

- Nézet: \*\*\* ok

```html
<button (click)="onUserClicked()" class="btn" [class]="btnClass">
  <app-icon [icon]="icon"></app-icon>
  {{ text }}
</button>
```

> TUDÁS: beállítottam egy eseményt, ha a gombra kattintanak, beállítottam a
> gomb osztályát, amit külső változóból kapok, beszúrtam gyermek komponensként az
> app-icon komponenst és átadtam neki az icon változóban kapott class nevet,
> megjelenítettem a gomb tartalmában a kapott szöveget. Ha nem akarok szöveget,
> akkor üres string -et adok át az app-action-button komponensnek.

## 3. ActionButtonGroup

![ActionButtonGroupComponent](src/assets/diagrams/actio-button-group-component.JPG)

- Feladata: több akciógombot foglal egy csoportba, és lekezeli a kattintás
  eseményüket.
- Létrehozás: action-button-group
- Kimenő esemény: `@var selectClick {EventEmitter<boolean>}` \*\*\* ok

  > TUDÁS: a komment alapján létrehozott output esemény így néz ki
  > `@Output() selectClick: EventEmitter<boolean> = new EventEmitter();`

- Kimenő esemény: `@var updateClick {EventEmitter<boolean>}` \*\*\* ok
- Kimenő esemény: `@var deleteClick {EventEmitter<boolean>}` \*\*\* ok

  > TUDÁS: a három esemény akkor fog megtörténni, ha a gombcsoporton belül
  > valamelyik gombra rákattintanak, minden gombhoz a hozzá rendelt funkció
  > szerint.

- Metódus:

```typescript *** ok
onSelectButtonClick(): void {
  this.selectClick.emit(true);
}
```

> TUDÁS: a későbbiekben így fogom a metódusokat megadni, a következő minta
> megegyezik a fent láthatóval:
> `@method onSelectButtonClick {void}, a selectClick esemény true értékkel`

- Metódus: `@method onUpdateButtonClick {void}, az updateClick esemény` \*\*\* ok
- Metódus: `@method onDeleteButtonClick {void}, az deleteClick esemény` \*\*\* ok

- Nézet: `<div class="btn-group">...</div>` **_ ok
  ebben a divben helyezz el három `app-action-button` -t, és mindegyiknek állítsd
  be az ikonját és a hozzá tartozó eseményt értelemszerűen. A három gomb:
  kiválasztás, frissítés, törlés. Példa: _** **\* \*** ok

```html
<app-action-button
  [btnClass]="'btn-info'"
  [icon]="'fa-eye'"
  (clicked)="onSelectButtonClick()"
></app-action-button>
```

> TUDÁS: beállítottam a gomb osztályát, a benne megjelenő ikont és azt is,
> hogy mi történjen, ha rákattintanak. Ne feledd, ebből három különböző kell a
> három művelethez.

## 4. DataCellComponent

![DataCellComponent](src/assets/diagrams/data-cell-component.JPG)

- Feladata: input mezőt jelenít meg a kapott objektum és a kapott kulcs alapján
  beállított értékkel.
- Létrehozás: data-cell
- Bejövő adat: `@var data {User}, @default new User()` \*\*\* ok
- Bejövő adat: `@var key {string}, @default ''` \*\*\* ok

- Nézet: **_ ok
  legyen egy dived, adj neki fentről 1em margót. Ebben helyezz el egy
  input mezőt, formázd meg Bootstrap -pel. Az input mezőt így kösd össze az adattal:
  `[(ngModel)]="data[key]"` _** ok
  > TUDÁS: az ngModel egy speciális Angular direktíva. Két irányú adatkötést tesz
  > lehetővé, azaz nem csak átvesz adatot az osztálytól, hanem módosítani is tudja
  > azt. Jele: "banana in the box", azaz property és event binding egyszerre. Tipikusan
  > form elemekhez használják, mint az input, select vagy textarea.

## 5. DataRowComponent

![DataRowComponent](src/assets/diagrams/data-row-component.JPG)

- Feladata: egy adatsort jelenít meg a hozzá tartozó gombokkal, lekezeli a
  gombokra való kattintást.
- Létrehozás: data-row
- Bejövő adat: `@var dataRow {User}, @default new User()` \*\*\* ok
- Kimenő esemény: `@var selectClick {EventEmitter<boolean>}` \*\*\* ok
- Kimenő esemény: `@var updateClick {EventEmitter<boolean>}` \*\*\* ok
- Kimenő esemény: `@var deleteClick {EventEmitter<boolean>}` \*\*\* ok
- Metódus: `@method onSelectClicked {void}, selectClick eseményt hívja a dataRow -val` \*\*\* ok
- Metódus: `@method onUpdateClicked {void}, updateClick eseményt hívja a dataRow -val` \*\*\* ok
- Metódus: `@method onDeleteClicked {void}, deleteClick eseményt hívja a dataRow -val` \*\*\* ok

- Nézet: az alábbi kódban a pontok helyére öt app-data-cell kell a szükséges
  input változók átadásával. **_ ok
  Utánuk pedig egy app-action-button-group, aminek
  mind a három eseményét le kell kezelni, és össze kell kötni a megfelelő saját
  metódussal. _** ok

```html *** ok
<div class="row">
  <div class="col-12 mb-1 pt-1 pb-1 d-flex justify-content-between">...</div>
</div>
```

## 6. DataListComponent

![DataListComponent](src/assets/diagrams/data-list-component.JPG)

- Feladata: teljes adatlistát jelenít meg, az app-data-row elemeket annyiszor
  ismétli meg, ahány eleme van a kapott tömbnek. Lekezeli az akciógombok
  kattintásait. Megjeleníti a kiválasztott adatsorhoz tartozó user-detail kártyát.
- Létrehozás: data-list \*\*\* ok
- Bejövő adat: `@var dataList {User[]}, @default []` \*\*\* ok
- Kimenő esemény: `@var selectClick {EventEmitter<boolean>}` \*\*\* ok
- Kimenő esemény: `@var updateClick {EventEmitter<boolean>}` \*\*\* ok
- Kimenő esemény: `@var deleteClick {EventEmitter<boolean>}` \*\*\* ok
- Metódus: `@method onSelectClicked {void}, selectClick eseményt hívja a dataRow -val` \*\*\* ok
- Metódus: `@method onUpdateClicked {void}, updateClick eseményt hívja a dataRow -val` \*\*\* ok
- Metódus: `@method onDeleteClicked {void}, deleteClick eseményt hívja a dataRow -val` \*\*\* ok

- Nézet: az alábbi kódban a pontok helyére először megjeleníti a hiányzó
  fejléceket. *\*\* ok
  A második pontozott helyre megjeleníti az app-data-row -t és
  annyiszor ismétli meg, ahány eleme van a kapott adatlistának:
  `*ngFor="let row of dataList"`. Átadja az app-data-row elemeknek az aktuális
  adatsort és feliratkozik az eseményeikre, azaz értelemszerűen hozzájuk rendeli
  a megfelelő nevű metódusokat.

```html
<div class="row">
  <div class="col-12 mt-3 pt-1 pb-1 d-flex justify-content-around">
    <span class="text-bold">id</span>
    ... *** ok
  </div>
</div>
<div class="row">
  <div class="col-12 mt-1 data-list-row">... *** ok</div>
</div>
```

## 7. AppComponent

![AppComponent](src/assets/diagrams/app-component.JPG)

### Feladatai:

> Nem adok részletes leírást, az eddigi ismereteid szerint dolgozz. Felsorolom,
> hogy mit kell tudnia.

- Injektáld be a UserService -t, hogy elérd a benne található usereket. \*\*\* ok
- Egy változóba vedd át a userek listáját. \*\*\* ok
- Legyen egy currentUser változód is, ez egy User típus. \*\*\* ok
- Legyen három metódusod, ami lekezeli az akció gombok kattintásait. Az első
  az adott user kiválasztását kezeli, a másik kettő pedig meghívja a UserService
  update vagy remove metódusát. (Nézd meg a UserService -t!).
- **Nézet:**
- A .container -be szúrj be a pontozott helyeken egy `app-data-list` és egy
  `app-user-detail` komponenst, add át nekik az input változőkat és kösd össze
  az eseményeiket a megfelelő metódusokkal. A detail kártyának és a listának is
  van törlés funkciója :)

## Tesztelés

- Készítettem egy filmet, a bemutatott módon kell működnie.
- Nincsenek külön tesztek.
