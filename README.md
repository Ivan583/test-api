# Учебное API "Test API"

### Установка:

1.  Скачать репозиторий
2.  Перейти в директорию с проектом
3.  `npm install`
4.  `npm start`

Cервер запустится по адресу http://localhost:7777

### API документация:

- GET /users - список пользователей
- GET /users/:id - пользователь с заданным id (от 1001 до 1004)
- POST /users - создание нового пользователя.
  Параметр: `name: string`.
  Передается в body.
  В случае успеха возвращает объект созданного пользователя.
