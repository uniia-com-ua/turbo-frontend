# GitHub Actions для Turbo Frontend

В цій директорії знаходяться налаштування та документація для GitHub Actions, що використовуються в проекті.

## Доступні робочі процеси (workflows)

### 1. release-deploy.yml

Комплексний workflow для автоматизації всього процесу релізу: збірка Docker образу Next.js додатку (uniia-landing), публікація в GitHub Container Registry (ghcr.io) та оновлення Fleet конфігурації для автоматичного розгортання.

[Докладніше про цей workflow](./workflows/README.md)

### 2. chromatic.yml

Публікація Storybook компонентів до Chromatic для візуального тестування та документації.

## Ліцензія

Всі GitHub Actions конфігурації та скрипти розповсюджуються згідно з ліцензією проекту.
