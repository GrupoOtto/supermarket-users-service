# API REST Specification

## 1 Schemas

### 1.1 Errors

#### Error : `Object`

| Property  | Type     | Required | Description                                   |
| --------- | -------- | -------- | --------------------------------------------- |
| `status`  | `Number` | ✔        | One of a server-defined set of error codes.   |
| `message` | `String` | ✔        | A human-readable representation of the error. |

### 1.2 References

#### ObjectId : `Hexadecimal`

#### User : `Object`

| Property   | Type       | Required | Description                            |
| ---------- | ---------- | -------- | -------------------------------------- |
| `id`       | `ObjectId` | ✔        | An unique identification for the user. |
| `username` | `String`   | ✔        | An unique username.                    |
| `email`    | `String`   | ✔        | The e-mail address of the user.        |
| `avatar`   | `String`   | ✔        | Reference to an image.                 |
| `password` | `String`   | ✔        | An encrypted password.                 |

## 2 Endpoints

- `GET: /valid`

  Returns whether or not is a valid user.

  **HTTP HEADERS**

  | Name            | Type     | Required | Description       |
  | --------------- | -------- | -------- | ----------------- |
  | `authorization` | `String` | ✔        | A JSON Web Token. |

- `POST: /login`

  Validates provided data and if so, returns a JSON with the user's token.

  **Body Params**

  | Name            | Type     | Required | Description       |
  | --------------- | -------- | -------- | ----------------- |
  | `authorization` | `String` | ✔        | A JSON Web Token. |
