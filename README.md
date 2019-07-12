# WDP Projekt Zespołowy

## Opis projektu

Projekt jest przykładową stroną sklepu zakodowaną z darmowego szablonu PSD, w celu nauki kodowania stron.

## Demo

https://elated-lichterman-a7b7db.netlify.com/

## Inicjacja projektu

Po sklonowaniu projektu, zainstaluj wymagane paczki komendą `npm install` lub `yarn install`.

Teraz możesz zacząć pracę, korzystając z przygotowanych zadania `npm run watch` lub `yarn run watch`.

Wszystkie potrzebne do pracy pliki źródłowe znajdują się w folderze `src/`.

## NPM Scripts

Dostępne są 3 główne skrypty przyspieszające pracę:

- `build`: na bazie plików z folderu `src` buduje project w folderze `dist`
- `watch`: odpala `browser-sync`, obserwuje zmiany w folderze `src` i przebudowuje projekt
- `code-quality`: skrypt dokonuje automatycznego formatowania plików w folderze `src/`
  zgodnie z przyjętą konwencją formatowania kodu i sprawdza błędy w JS.

## Git Hooks

Projekt korzysta z Git Hooks - możliwości uruchamiania skryptów w reakcji na wybrane zdarzenia programu Git.

Za każdym razem gdy wykonasz komendę `git commit` zostanie uruchomiony skrypt `code-quality`
dla plików, które zostały wybrane do za-commit'owania.

## Konwencje i dobre praktyki

DO UZUPEŁNIENIA
