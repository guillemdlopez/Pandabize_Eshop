# Pandabize 🚲

> Pandabize is a web application that allows the user to buy bicycles fast and easily unlike any other!

Content:

- [Enpoints](#endpoints)
- [GET bicycles](#get-bicycles-GET-/api/v1/bicycles)
- [GET bicycle](#get-bicycle-GET-/api/v1/bicycles/:id)
- [GET customizations](#get-customizations-GET-/api/v1/customizations/)
- [GET customization](#get-customization-GET-/api/v1/customizations/:id)
- [GET users](#get-users-GET-/api/v1/users/)
- [GET user](#get-user-GET-/api/v1/users/:id)
- [GET orders](#get-orders-GET-/api/v1/orders/)
- [GET order](#get-order-GET-/api/v1/orders/:id)
- [POST order](#post-an-order-GET-/api/v1/orders/)
- [Get Started](#try-it-locally)

## BASE URL

The base url of the API is `http://pandabize-web-store.herokuapp.com`.

🚨If you want to try it with Postman, please remember that **you need to be authenticated**🚨

## Endpoints

#### GET bicycles `GET '/api/v1/bicycles'`

Will give you back a JSON file with a list of all bicycles available in the application and its customizations.

<details><summary>See the JSON file</summary><p>

```json
[
  {
    "id": 17,
    "name": "Scott SUB Cross 10",
    "description": "The SCOTT SUB Cross 10 puts comfort and user-friendliness first. It is perfect for tours or daily shopping. With Remote Lockout suspension fork and Syncros components the SUB Cross is perfectly equipped.",
    "created_at": "2021-03-08T11:50:07.146Z",
    "updated_at": "2021-03-08T11:50:07.172Z",
    "photo": "http://res.cloudinary.com/doker55/image/upload/k7j2pfbx2kysw68cmtssca6e36ie.jpg",
    "customizations": [
      {
        "id": 123,
        "name": "Wheel size",
        "value": "15 inches",
        "price": 8.56,
        "bicycle_id": 17,
        "created_at": "2021-03-08T11:50:23.202Z",
        "updated_at": "2021-03-08T11:50:23.202Z"
      },
      {
        "id": 147,
        "name": "Rim color",
        "value": "Black",
        "price": 8.17,
        "bicycle_id": 17,
        "created_at": "2021-03-08T11:50:23.465Z",
        "updated_at": "2021-03-08T11:50:23.465Z"
      },
      {
        "id": 168,
        "name": "Saddle color",
        "value": "Pink",
        "price": 6.05,
        "bicycle_id": 17,
        "created_at": "2021-03-08T11:50:23.714Z",
        "updated_at": "2021-03-08T11:50:23.714Z"
      }
    ]
  }
]
```

</p></details>

#### GET bicycle `GET '/api/v1/bicycles/:id'`

Will give you back a JSON file with al the information regarding a given bicycle (including an array of all its customizations).

🚨**You need to pass the `:id` of the bicycle you are insterested in**🚨

<details><summary>See the JSON file</summary><p>

```json
{
  "id": 17,
  "name": "Scott SUB Cross 10",
  "description": "The SCOTT SUB Cross 10 puts comfort and user-friendliness first. It is perfect for tours or daily shopping. With Remote Lockout suspension fork and Syncros components the SUB Cross is perfectly equipped.",
  "created_at": "2021-03-08T11:50:07.146Z",
  "updated_at": "2021-03-08T11:50:07.172Z",
  "photo": "http://res.cloudinary.com/doker55/image/upload/k7j2pfbx2kysw68cmtssca6e36ie.jpg",
  "customizations": [
    {
      "id": 123,
      "name": "Wheel size",
      "value": "15 inches",
      "price": 8.56,
      "bicycle_id": 17,
      "created_at": "2021-03-08T11:50:23.202Z",
      "updated_at": "2021-03-08T11:50:23.202Z"
    },
    {...},
  ]
}
```

</p></details>

#### GET customizations `GET '/api/v1/customizations'`

Will give you back a JSON file with a list of all customizations available in the application.

<details><summary>See the JSON file</summary><p>

```json
{
  "customizations": [
    {
      "id": 123,
      "name": "Wheel size",
      "value": "15 inches",
      "price": 8.56,
      "bicycle_id": 17,
      "created_at": "2021-03-08T11:50:23.202Z",
      "updated_at": "2021-03-08T11:50:23.202Z"
    },
    {
      "id": 124,
      "name": "Wheel size",
      "value": "15 inches",
      "price": 8.7,
      "bicycle_id": 18,
      "created_at": "2021-03-08T11:50:23.213Z",
      "updated_at": "2021-03-08T11:50:23.213Z"
    },
    {
      "id": 125,
      "name": "Wheel size",
      "value": "16 inches",
      "price": 6.82,
      "bicycle_id": 17,
      "created_at": "2021-03-08T11:50:23.224Z",
      "updated_at": "2021-03-08T11:50:23.224Z"
    },
    {
      "id": 126,
      "name": "Wheel size",
      "value": "16 inches",
      "price": 7.5,
      "bicycle_id": 18,
      "created_at": "2021-03-08T11:50:23.240Z",
      "updated_at": "2021-03-08T11:50:23.240Z"
    },
    {
      "id": 127,
      "name": "Wheel size",
      "value": "17 inches",
      "price": 5.37,
      "bicycle_id": 18,
      "created_at": "2021-03-08T11:50:23.251Z",
      "updated_at": "2021-03-08T11:50:23.251Z"
    },
    {
      "id": 128,
      "name": "Wheel size",
      "value": "17 inches",
      "price": 9.04,
      "bicycle_id": 17,
      "created_at": "2021-03-08T11:50:23.261Z",
      "updated_at": "2021-03-08T11:50:23.261Z"
    },
    {
      "id": 129,
      "name": "Wheel size",
      "value": "15 inches",
      "price": 8.42,
      "bicycle_id": 19,
      "created_at": "2021-03-08T11:50:23.275Z",
      "updated_at": "2021-03-08T11:50:23.275Z"
    },
    {
      "id": 130,
      "name": "Wheel size",
      "value": "16 inches",
      "price": 9.17,
      "bicycle_id": 19,
      "created_at": "2021-03-08T11:50:23.284Z",
      "updated_at": "2021-03-08T11:50:23.284Z"
    }
  ]
}
```

</p></details>

#### GET customization `GET '/api/v1/customizations/:id'`

Will give you back a JSON file with information regarding a given customization. It contains the name of the customization (`Wheel size`), the value (`15 inches`) and the name of the bicycle it belongs to (along with the `bicycle_id`) and an array of all the associated customizations to that particular customization.

🚨**Notice that you have to pass the `:id` of the customization as it is specified on the subtitle**🚨

<details><summary>See the JSON file</summary><p>

```json
{
  "bicycle": "Scott SUB Cross 10",
  "bicycle_id": 17,
  "customization": "Wheel size",
  "value": "15 inches",
  "associations": [
    {
      "id": 147,
      "name": "Rim color",
      "value": "Black",
      "price": 8.17,
      "bicycle_id": 17,
      "created_at": "2021-03-08T11:50:23.465Z",
      "updated_at": "2021-03-08T11:50:23.465Z"
    },
    {
      "id": 149,
      "name": "Rim color",
      "value": "Turquoise",
      "price": 8.89,
      "bicycle_id": 17,
      "created_at": "2021-03-08T11:50:23.505Z",
      "updated_at": "2021-03-08T11:50:23.505Z"
    },
    {
      "id": 168,
      "name": "Saddle color",
      "value": "Pink",
      "price": 6.05,
      "bicycle_id": 17,
      "created_at": "2021-03-08T11:50:23.714Z",
      "updated_at": "2021-03-08T11:50:23.714Z"
    },
    {
      "id": 170,
      "name": "Saddle color",
      "value": "Red",
      "price": 8.88,
      "bicycle_id": 17,
      "created_at": "2021-03-08T11:50:23.734Z",
      "updated_at": "2021-03-08T11:50:23.734Z"
    }
  ]
}
```

</p></details>

#### GET users `GET '/api/v1/users'`

Will give you back a JSON file with a list of all users who signed up to the application along with an array containing all their orders

<details><summary>See the JSON file</summary><p>

```json
[
  {
    "id": 5,
    "email": "guillemdelas@hotmail.com",
    "created_at": "2021-03-08T11:50:04.097Z",
    "updated_at": "2021-03-08T11:50:04.195Z",
    "first_name": "Guillem",
    "last_name": "Delás",
    "admin": true,
    "avatar": "http://res.cloudinary.com/doker55/image/upload/a7kv87ve2h4gm8z14dw48ldjjqt7.jpg",
    "orders": [
      {
        "id": 8,
        "bicycle_id": 21,
        "amount": 18.75,
        "user_id": 5,
        "created_at": "2021-03-08T12:25:22.093Z",
        "updated_at": "2021-03-08T12:25:22.093Z"
      }
    ]
  },
  {
    "id": 6,
    "email": "amoralesrosa@gmail.com",
    "created_at": "2021-03-08T11:50:05.807Z",
    "updated_at": "2021-03-08T11:50:05.831Z",
    "first_name": "Antonio",
    "last_name": "Morales",
    "admin": false,
    "avatar": "http://res.cloudinary.com/doker55/image/upload/hpgc5s4gmo1pvcwmzxoxi1bdlk5p.jpg",
    "orders": []
  }
]
```

</p></details>

#### GET user `GET '/api/v1/users/:id'`

Will give you back the information of a unique user and an array with all his/her orders and the customizations that each one contains.

🚨**Notice that you have to pass the `:id` of the user as it is specified on the subtitle**🚨

<details><summary>See the JSON file</summary><p>

```json
{
  "user": {
    "id": 5,
    "email": "guillemdelas@hotmail.com",
    "created_at": "2021-03-08T11:50:04.097Z",
    "updated_at": "2021-03-08T11:50:04.195Z",
    "first_name": "Guillem",
    "last_name": "Delás",
    "admin": true,
    "avatar": "http://res.cloudinary.com/doker55/image/upload/a7kv87ve2h4gm8z14dw48ldjjqt7.jpg"
  },
  "orders": [
    {
      "id": 8,
      "bicycle_id": 21,
      "amount": 18.75,
      "user_id": 5,
      "created_at": "2021-03-08T12:25:22.093Z",
      "updated_at": "2021-03-08T12:25:22.093Z",
      "bicycle": "Balck Panther 2020",
      "photo": "http://res.cloudinary.com/doker55/image/upload/veedlj6jbfyqj57ggnvdtlwzv3g7.jpg",
      "customizations": [
        {
          "id": 135,
          "name": "Wheel size",
          "value": "16 inches",
          "price": 8.85,
          "bicycle_id": 21,
          "created_at": "2021-03-08T11:50:23.347Z",
          "updated_at": "2021-03-08T11:50:23.347Z"
        },
        {
          "id": 176,
          "name": "Saddle color",
          "value": "Pink",
          "price": 9.9,
          "bicycle_id": 21,
          "created_at": "2021-03-08T11:50:23.793Z",
          "updated_at": "2021-03-08T11:50:23.793Z"
        }
      ]
    }
  ]
}
```

</p></details>

#### GET orders `GET '/api/v1/orders'`

Will give you back a JSON file with a list of all orders that users made. It contains the `bicycle_id`, the `amount`, and the `user_id`.

<details><summary>See the JSON file</summary><p>

```json
[
  {
    "id": 8,
    "bicycle_id": 21,
    "amount": 18.75,
    "user_id": 5,
    "created_at": "2021-03-08T12:25:22.093Z",
    "updated_at": "2021-03-08T12:25:22.093Z"
  },
  {
    "id": 9,
    "bicycle_id": 22,
    "amount": 17.59,
    "user_id": 5,
    "created_at": "2021-03-08T12:39:07.400Z",
    "updated_at": "2021-03-08T12:39:07.400Z"
  }
]
```

</p></details>

#### GET order `GET '/api/v1/orders/:id'`

Will give you back a JSON file with a specific order along with a customizations array. This array contains all the customizations that the user chose. For instance, in the JSON below, the user chose a `Wheel size` of `16 inches` and a `Pink` `Saddle color`.

🚨**Notice that you have to pass the `:id` of the order as it is specified on the subtitle**🚨

<details><summary>See the JSON file</summary><p>

```json
{
  "order": {
    "id": 8,
    "bicycle_id": 21,
    "amount": 18.75,
    "user_id": 5,
    "created_at": "2021-03-08T12:25:22.093Z",
    "updated_at": "2021-03-08T12:25:22.093Z"
  },
  "customizations": [
    {
      "id": 135,
      "name": "Wheel size",
      "value": "16 inches",
      "price": 8.85,
      "bicycle_id": 21,
      "created_at": "2021-03-08T11:50:23.347Z",
      "updated_at": "2021-03-08T11:50:23.347Z"
    },
    {
      "id": 176,
      "name": "Saddle color",
      "value": "Pink",
      "price": 9.9,
      "bicycle_id": 21,
      "created_at": "2021-03-08T11:50:23.793Z",
      "updated_at": "2021-03-08T11:50:23.793Z"
    }
  ]
}
```

</p></details>

#### POST an order `POST '/api/v1/orders'`

Will post a new order to the API. In order to do so, you have to pass the following properties inside the request body:

1. `bicycle_id`: integer
2. `user_id`: integer
3. `amount`: float
4. `costumization_ids`: array of ids

```json
{
  "bicycle_id": 17,
  "user_id": 6,
  "amount": 20.57,
  "customization_ids": [123, 125, 128]
}
```

This is the API's response (JSON format):

```json
{
  "id": 10,
  "bicycle_id": 17,
  "amount": 20.57,
  "user_id": 6,
  "created_at": "2021-03-08T16:25:30.409Z",
  "updated_at": "2021-03-08T16:25:30.409Z"
}
```

_If you want to see all the customizations related to your order, then you can check out the `GET order 'api/v1/order/:id'` endpoint specifying the id of the order you just created_

## Try it locally

Sublime Text

```bash
git clone git@github.com:guillemdlopez/Pandabize_Eshop.git
cd Pandabize_Eshop
rm -rf .git
yarn install
stt # Open on Sublime Text
```

VS Code

```bash
git clone git@github.com:guillemdlopez/Pandabize_Eshop.git
cd Pandabize_Eshop
rm -rf .git
yarn install
stt # Open on VS Code
```
