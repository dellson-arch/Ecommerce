# Auth Routes

Base path: `/api/auth`

## Endpoints

- **POST** `/register`
  - Description: Register a new user.
  - Access: public
  - Middleware: `registerValidation`
  - Controller: `registerController` (from `src/controllers/auth.controller.js`)
  - Request: JSON body with registration fields (e.g., name, email, password)
  - Response: created user or validation/errors

## Notes
- The route file defines a single `POST /register` endpoint and is mounted at `/api/auth` in the app.
- Check `auth.controller.js` and `validatior.middleware.js` for expected request fields and validation rules.
