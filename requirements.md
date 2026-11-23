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

Stronę należy odwzorować na podstawie wyglądu oryginału pod adresem https://www.internetowyszwagier.pl/. Elementy do dopasowania wzrokowo:

- **Kolory** — tło, tekst, przyciski, linki (odczytać z DevTools lub zrzutu ekranu)
- **Typografia** — rodzina czcionek, rozmiary, grubości
- **Układ** — marginesy, paddingi, wyrównanie (centered / left)
- **Separatory** — wygląd linii rozdzielających sekcje
- **Responsywność** — strona ma poprawnie wyglądać na mobile i desktop

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
