# Angular Component gyakorlás

## Kezdő lépések

- Lépj be a letöltött mappába és állítsd be a projektet:
- `cd ang-basic-practice003-comp-pipe`
- `code . -r`
- Telepítsd a függőségeket:
- `npm i`
- Indítsd el az Angular Development Server -t:
- `npm start`

## Feladatok

- FONTOS! Adatkötésekkel dolgozz, semmilyen adatot ne fixálj a .html állományokban!
- PONTOSAN EBBEN A SORRENDBEN NYISD MEG A FÁJLOKAT ÉS DOLGOZZ!
- `src\app\user-detail\user-detail.component.ts` \*\*\* ok
- `src\app\user-detail\user-detail.component.html` \*\*\* ok
- `src\app\user-list\user-list.component.ts` \*\*\* ok
- `src\app\user-list\user-list.component.html` \*\*\* ok
- `src\app\app.component.ts` \*\*\* ok
- `src\app\app.component.html` \*\*\* ok

## Tesztelés

- Készítettem egy animációt:
- ``
- Ez alapján készítsd el az alkalmazást.

## Segítség

> Ha egy component -nek át akarsz adni egy változót, csak
> akkor tudod megtenni, ha a component várja azt. Azaz, annak
> a változónak definiálva kell lennie a component -ben mint
> @Input tulajdonság.  
> Ezután egyszerű property-binding -al tudod átadni:  
> `<app-test [user]="currentUser"></app-test>

> Ha egy componentnek van egy eseménye, arra event-binding
> segítségével tudsz feliratkozni. Ezt az eseményt is létre
> kell hozni először @Output tulajdonságként.
> `<app-test (delUser)="onDelUser(user)"></app-test>`
