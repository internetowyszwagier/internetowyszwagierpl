# Requirements — internetowyszwagier.pl

Odwzorowanie 1:1 strony https://www.internetowyszwagier.pl/ jako statyczny plik HTML/CSS/JS.

---

## Cel i charakter strony

Jednostronicowy landing page usługi naprawy stron internetowych. Ton: humorystyczny, bezpośredni, minimalny. Brak podstron, brak backendu.

---

## Treść — dosłowne teksty (w kolejności)

| Element | Tekst |
|---|---|
| `<title>` / meta | Internetowy Szwagier – Możesz na nim polegać |
| Nagłówek główny | `<internetowy szwagier> naprawa stron internetowych </>` |
| Podtytuł | Coś nie działa? Naprawię to. |
| Przycisk kontaktowy | Skontaktuj się z Internetowym Szwagrem |
| Telefon | 665-817-552 - dzwoń jak do szwagra * |
| Przypis | * nie musimy być spokrewnieni |
| Stopka / slogan | Moja strona jest brzydka żeby Twoja mogła być piękna <3 |
| Przycisk scroll-to-top | Przewijanie do góry |

---

## Linki

| Akcja | Href |
|---|---|
| Email kontaktowy | `mailto:internetowyszwagier@gmail.com` |
| Telefon | `tel:665817552` |
| Scroll-to-top | `#` lub JS scroll do góry strony |

---

## Elementy interaktywne

- **Przycisk e-mail** — otwiera klienta pocztowego (`mailto:`)
- **Numer telefonu** — klikalny link tel na mobile
- **Przycisk "Przewijanie do góry"** — smooth scroll do top strony, widoczny po przewinięciu w dół

---

## Struktura HTML

Strona jednokolumnowa, wyśrodkowana. Kolejność sekcji:

1. `<header>` — nazwa serwisu (tytuł strony, może pełnić rolę logo)
2. `<main>` — blok główny:
   - nagłówek z tagami HTML jako dekoracja typograficzna
   - podtytuł
   - separator (linia pozioma)
   - przyciski/linki kontaktowe
   - separator
   - przypis ze znakiem `*`
3. `<footer>` — slogan "Moja strona jest brzydka..."
4. Przycisk scroll-to-top (fixed/absolute, poza głównym flow)

---

## Wymagania wizualne

Referencja wizualna: `screen.png` (zrzut ekranu oryginału).

### Kolory
- Tło: `#000000` (czysta czerń)
- Tekst: `#ffffff` (czysta biel)
- Przycisk kontaktowy: obramowanie `#ffffff`, tło `#000000`, tekst `#ffffff`

### Typografia
- Czcionka: monospace (Courier New lub system monospace) — stosowana do WSZYSTKICH elementów
- Nagłówek `<h1>`: duży, wyrównany do lewej strony lub zajmuje pełną szerokość kontenera
- Podtytuł: mniejszy, wyśrodkowany, dwa wiersze (`Coś nie działa ?` / `Naprawię to.`)
- Reszta tekstu: monospace, rozmiar bazowy

### Układ i spacing
- Strona pionowo wyśrodkowana w viewporcie (lub z dużymi marginesami góra/dół)
- Bardzo duże odstępy między sekcjami (whitespace jest kluczowym elementem designu)
- Brak widocznych separatorów `<hr>` — sekcje oddzielone samym spacingiem
- Przycisk kontaktowy: wyśrodkowany, obramowanie `1px solid #fff`, szerokość dopasowana do tekstu z paddingiem

### Animacja nagłówka
- Efekt maszyny do pisania: litery pojawiają się jedna po drugiej z prędkością **83ms/znak**
- Migająca karetka (`|`) widoczna podczas pisania i po zakończeniu animacji (blink co 1s)

### Elementy szczegółowe
- Numer telefonu poprzedzony ikoną telefonu (emoji ☎ lub 📞)
- Tekst telefonu i przycisk są osobnymi elementami (nie lista)
- Przypis `* nie musimy być spokrewnieni`: mały, wyśrodkowany, duży odstęp od telefonu
- Footer `Moja strona jest brzydka...`: bardzo mały tekst, na samym dole strony

### Responsywność
Strona musi poprawnie wyglądać na trzech breakpointach:

| Urządzenie | Szerokość |
|---|---|
| Mobile | < 480px |
| Tablet | 481px – 1024px |
| Desktop | > 1024px |

Wymagania dla każdego breakpointa:
- **Mobile**: nagłówek `<h1>` zmniejszony, padding boczny min. 1rem, przycisk pełnej szerokości lub dopasowany
- **Tablet**: układ jak desktop ale z mniejszymi rozmiarami czcionek
- **Desktop**: nagłówek duży (ok. 2rem), pełne odstępy między sekcjami

---

## Wymagania techniczne

- Czysty HTML5, CSS3, vanilla JS (bez frameworków)
- Pojedynczy plik `index.html` lub podział na `index.html` + `style.css` + `script.js`
- Brak zależności zewnętrznych (npm, bundler) — pliki gotowe do deploymentu przez GitHub Pages bez buildu
- Czcionki: Google Fonts przez `<link>` lub system fonts
- Strona musi działać po otwarciu `index.html` z dysku (ścieżki relatywne)

---

## Poza zakresem

- Backend, baza danych, CMS
- Formularz kontaktowy z wysyłką (tylko mailto)
- Podstrony
- Blogi, portfolio, galerie
