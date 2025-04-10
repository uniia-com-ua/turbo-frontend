# Документація GitHub Actions

## Автоматизована збірка та розгортання релізів

### release-deploy.yml

Цей workflow автоматизує весь процес релізу, включаючи:

1. Збірку Docker образу для застосунків проєкту
2. Публікацію образу в GitHub Container Registry (ghcr.io)
3. Оновлення Fleet конфігурації для автоматичного розгортання

#### Тригери

Workflow запускається при створенні нового релізу в GitHub (подія "release" з типом "published").

#### Формат тегів релізів

Workflow підтримує два формати тегів:

1. **З префіксом застосунку** (рекомендований формат):

   - `landing-v1.0.0` - стабільний реліз застосунку landing
   - `landing-v1.0.0-rc.1` - тестовий реліз застосунку landing
   - У майбутньому можливе додавання інших застосунків: `admin-v1.0.0`, `api-v2.0.0` тощо

2. **Без префіксу** (для зворотної сумісності):
   - `v1.0.0` - буде автоматично інтерпретовано як реліз застосунку landing

#### Структура workflow

Workflow складається з двох послідовних job:

1. **build-and-push**: Збірка та публікація Docker образу

   - Визначає застосунок за префіксом тегу релізу
   - Визначає тип релізу (RC або стабільний)
   - Додає відповідні теги до образу (`latest` для стабільних, `latest-rc` для RC)
   - Публікує образ в GitHub Container Registry

2. **update-fleet-config**: Оновлення Fleet конфігурації для розгортання (запускається після успішного завершення першого job)
   - Створює нову гілку з оновленнями
   - Оновлює конфігураційні файли Fleet для відповідного середовища
   - Створює Pull Request з оновленнями

#### Умови визначення середовища розгортання

Релізи автоматично розгортаються в різні середовища в залежності від типу:

1. **Тестове середовище** (`web-{app-name}-test`):

   - Реліз позначено як "pre-release" в GitHub
   - АБО тег релізу містить суфікс "-rc" (наприклад, "landing-v1.0.0-rc.1")
   - Використовується тег образу, що відповідає версії релізу

2. **Продакшн-середовище** (`web-{app-name}-prod`):
   - Стабільний реліз (без позначки "pre-release")
   - Тег релізу не містить суфікс "-rc"
   - Використовується тег образу, що відповідає версії релізу

#### Необхідні права

Workflow потребує наступних дозволів:

- `contents: read/write` - для читання вмісту репозиторію та створення гілок
- `packages: write` - для публікації Docker образу в ghcr.io
- `pull-requests: write` - для створення Pull Request з оновленнями конфігурації

#### Налаштування

1. Створіть новий реліз в GitHub з відповідним тегом:
   - Для стабільних релізів: `landing-v1.0.0`
   - Для тестових релізів: `landing-v1.0.0-rc.1` або використайте опцію "This is a pre-release"
2. GitHub Actions автоматично виконає всі необхідні дії
3. Перевірте та вручну злийте створений Pull Request для оновлення Fleet конфігурації

#### Додавання нових застосунків

Для додавання нового застосунку необхідно:

1. Розкоментувати та змінити відповідний блок у файлі `release-deploy.yml`:

   ```yaml
   elif [[ "$TAG" == admin-* ]]; then
     APP_NAME="admin"
     APP_PATH="apps/admin"
     VERSION=$(echo $TAG | sed 's/admin-//')
   ```

2. Створити аналогічну структуру директорій для нового застосунку:
   ```
   apps/
   ├── landing/
   │   ├── ...
   │   └── fleet/
   │       ├── production/
   │       └── test/
   └── admin/  # Новий застосунок
       ├── ...
       └── fleet/
           ├── production/
           └── test/
   ```

#### Доступ до образів

Опубліковані образи доступні за адресою:

```
ghcr.io/[username-or-organization]/uniia-[app-name]:[tag]
```

Де:

- `[username-or-organization]` - ім'я користувача або організації в GitHub
- `[app-name]` - назва застосунку (наприклад, "landing", "admin")
- `[tag]` - тег релізу (наприклад, "v1.0.0") або автоматично згенерований тег ("latest" або "latest-rc")
