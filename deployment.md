# Deployment — GitHub Pages

## Strategia branchy

| Branch | Przeznaczenie |
|---|---|
| `development` | Aktywny development — tutaj piszesz kod |
| `deployment` | Produkcja — GitHub Pages serwuje stronę z tego brancha |

Zasada: **nigdy nie commituj bezpośrednio do `deployment`**. Zmiany trafiają tam tylko przez merge z `development`.

---

## Jednorazowa konfiguracja

### 1. Stwórz repozytorium na GitHub

```bash
# Na github.com: New repository → nazwa (np. internetowyszwagierpl)
# Nie inicjalizuj z README — repo musi być puste
```

### 2. Połącz lokalne repo z GitHubem

```bash
git remote add origin https://github.com/TWOJ_USERNAME/NAZWA_REPO.git
```

### 3. Wypchnij oba branche

```bash
# Będąc na development:
git push -u origin development

# Stwórz i wypchnij branch deployment:
git checkout -b deployment
git push -u origin deployment

# Wróć do development:
git checkout development
```

### 4. Skonfiguruj GitHub Pages

1. Wejdź na GitHub → repozytorium → **Settings** → **Pages**
2. W sekcji **Source** wybierz:
   - Branch: `deployment`
   - Folder: `/ (root)`
3. Kliknij **Save**

Strona będzie dostępna pod adresem:
`https://TWOJ_USERNAME.github.io/NAZWA_REPO/`

> **Własna domena (opcjonalnie):** W sekcji **Custom domain** wpisz domenę, a następnie w panelu DNS dodaj rekord CNAME wskazujący na `TWOJ_USERNAME.github.io`.

---

## Codzienny workflow

### Development

```bash
git checkout development

# ... pisz kod ...

git add .
git commit -m "opis zmian"
git push
```

### Deployment (wdrożenie zmian na produkcję)

```bash
# Upewnij się, że development jest aktualny
git checkout development
git push

# Merge do deployment i wypchnij
git checkout deployment
git merge development
git push

# Wróć do pracy
git checkout development
```

GitHub Pages automatycznie przebuduje stronę po każdym pushu do brancha `deployment`. Zmiany są widoczne zazwyczaj w ciągu 1–2 minut.

---

## Podgląd statusu deploymentu

W repozytorium na GitHub → zakładka **Actions** — każdy push do `deployment` tworzy automatyczny job "pages build and deployment". Zielony ptaszek = strona zaktualizowana.

---

## Typowe problemy

**Strona nie aktualizuje się po pushu**
- Sprawdź zakładkę Actions czy build się powiódł
- Wyczyść cache przeglądarki (Ctrl+Shift+R)

**404 na GitHub Pages**
- Upewnij się, że plik główny nazywa się `index.html` (nie `Index.html` — wielkość liter ma znaczenie)
- Sprawdź w Settings → Pages czy branch jest ustawiony na `deployment`

**Ścieżki do plików nie działają**
- Używaj ścieżek relatywnych (`./style.css`, `./img/foto.jpg`) zamiast absolutnych (`/style.css`)
- Jeśli repo nie jest na domenie głównej (custom domain), ścieżki absolutne muszą uwzględniać nazwę repo: `/NAZWA_REPO/style.css`
