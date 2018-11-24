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

#### TypeRef : `Object`

| Property       | Type       | Required | Description                               |
| -------------- | ---------- | -------- | ----------------------------------------- |
| `id`           | `ObjectId` | ✔        | An unique identification for the type.    |
| `initials`     | `String`   | ✔        | The representative initials.              |
| `descriptions` | `String`   | ✔        | A human-readable description of the type. |

#### Product : `Object`

| Property    | Type       | Required | Description                               |
| ----------- | ---------- | -------- | ----------------------------------------- |
| `id`        | `ObjectId` | ✔        | An unique identification for the product. |
| `name`      | `String`   | ✔        | The name of the product.                  |
| `salePrice` | `Number`   | ✔        | The sale price of the product.            |
| `costPrice` | `Number`   | ✔        | The cost price of the product.            |
| `type`      | `TypeRef`  |          | The type of product its refer.            |

### 1.3 Queries

#### Likeable : `Object`

| Property | Type     | Required | Description                            |
| -------- | -------- | -------- | -------------------------------------- |
| `$regex` | `String` | ✔        | A regular expression pattern to match. |

#### Numerable : `Object`

| Property | Type     | Required | Description                     |
| -------- | -------- | -------- | ------------------------------- |
| `$gt`    | `Number` |          | An upper bound number.          |
| `$gte`   | `Number` |          | An upper bound or equal number. |
| `$lt`    | `Number` |          | A lower bound number.           |
| `$lte`   | `Number` |          | A lower bound or equal number.  |

#### QueryNumber : `(Number | Numerable)`

#### QueryString : `(String | Likeable)`

## 2 Supported Methods

Method  | Description                                                                                                                | Is Idempotent
------- | -------------------------------------------------------------------------------------------------------------------------- | -------------
GET     | Return the current value of an object                                                                                      | True
PUT     | Replace an object, or create a named object, when applicable                                                               | True
DELETE  | Delete an object                                                                                                           | True
POST    | Create a new object based on the data provided, or submit a command                                                        | False
HEAD    | Return metadata of an object for a GET response. Resources that support the GET method MAY support the HEAD method as well | True
PATCH   | Apply a partial update to an object                                                                                        | False

## 3 Endpoints

- `/`

  - `GET : Product[]`

    Returns all products that satisfy the query filter

    **Query Parameters**

    | Property    | Type          | Required | Description                         |
    | ----------- | ------------- | -------- | ----------------------------------- |
    | `name`      | `QueryString` | ✔        | The name of the product.            |
    | `salePrice` | `QueryNumber` | ✔        | The sale price of the product.      |
    | `costPrice` | `QueryNumber` | ✔        | The cost price of the product.      |
    | `type`      | `ObjectID`    |          | The reference of product's type.    |

  - `POST : Product`

    **Body**

    | Property    | Type       | Required | Description                      |
    | ----------- | ---------- | -------- | -------------------------------- |
    | `name`      | `String`   | ✔        | The name of the product.         |
    | `salePrice` | `Number`   | ✔        | The sale price of the product.   |
    | `costPrice` | `Number`   | ✔        | The cost price of the product.   |
    | `type`      | `ObjectID` |          | The reference of product's type. |

- `/{id}`

  - `GET : Product`

  - `PUT : Product`

    **Body**

    | Property    | Type       | Required | Description                         |
    | ----------- | ---------- | -------- | ----------------------------------- |
    | `name`      | `String`   | ✔        | The name of the product.            |
    | `salePrice` | `Number`   | ✔        | The sale price of the product.      |
    | `costPrice` | `Number`   | ✔        | The cost price of the product.      |
    | `type`      | `ObjectID` |          | The reference of product's type.    |

  - `PATCH : Product`

    **Body**

    | Property    | Type       | Required | Description                         |
    | ----------- | ---------- | -------- | ----------------------------------- |
    | `name`      | `String`   |          | The name of the product.            |
    | `salePrice` | `Number`   |          | The sale price of the product.      |
    | `costPrice` | `Number`   |          | The cost price of the product.      |
    | `type`      | `ObjectID` |          | The reference of product's type.    |

  - `DELETE : Product`

- `/types`

  - `GET : TypeRef[]`

    Returns all product types that satisfy the query filter

    **Query Parameters**

    | Property      | Type          | Required | Description                      |
    | ------------- | ------------- | -------- | -------------------------------- |
    | `initials`    | `QueryString` |          | The initials of the type.        |
    | `description` | `QueryString` |          | The description of the product. |

  - `POST : TypeRef`

    **Body**

    | Property       | Type       | Required | Description                               |
    | -------------- | ---------- | -------- | ----------------------------------------- |
    | `initials`     | `String`   | ✔        | The representative initials.              |
    | `descriptions` | `String`   | ✔        | A human-readable description of the type. |

- `/types/{id}`

  - `GET : TypeRef`

  - `PUT : TypeRef`

    **Body**

    | Property       | Type       | Required | Description                               |
    | -------------- | ---------- | -------- | ----------------------------------------- |
    | `initials`     | `String`   | ✔        | The representative initials.              |
    | `descriptions` | `String`   | ✔        | A human-readable description of the type. |

  - `PATCH : TypeRef`

    **Body**

    | Property       | Type       | Required | Description                               |
    | -------------- | ---------- | -------- | ----------------------------------------- |
    | `initials`     | `String`   |          | The representative initials.              |
    | `descriptions` | `String`   |          | A human-readable description of the type. |

  - `DELETE : TypeRef`
