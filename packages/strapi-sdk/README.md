@uniia/strapi-sdk

Внутрішній SDK для Strapi API.

Скрипти:

- build: збірка TypeScript у dist/
- check-types: перевірка типів
- lint: eslint

Використання:

```ts
import { getHomePage } from "@uniia/strapi-sdk";

const res = await getHomePage("uk");
```

ENV (server):

- STRAPI_API_URL
- STRAPI_API_TOKEN
