# Pandabize 🚲

> Pandabize is a web application that allows the user to buy bicycles fast and easily unlike any other!

Content:

- [Enpoints](#endpoints)
- [GET bicycles](#get-bicycles-GET-'/api/v1/bicycles')
- [GET bicycle](#get-bicycle-GET-'/api/v1/bicycles/:id')
- [GET customizations](#get-customizations-GET-'/api/v1/customizations/')
- [GET customization](#get-customization-GET-'/api/v1/customizations/:id')
- [GET users](#get-users-GET-'/api/v1/users/')
- [GET user](#get-user-GET-'/api/v1/users/:id')
- [Get Started](#try-it-locally)

## BASE URL

The base url of the API is `http://pandabize-web-store.herokuapp.com`.

🚨If you want to try it with Postman, please remember that **you need to be authenticated**🚨

## Endpoints

### GET bicycles `GET '/api/v1/bicycles'`

Will give you back a JSON file with a list of all the bicycles available in the application and its customizations.

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

### GET bicycle `GET '/api/v1/bicycles/:id'`

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

### GET customizations `GET '/api/v1/customizations'`

Will give you back a JSON file with a list of all the customizations available in the application.

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

### GET customization `GET '/api/v1/customizations/:id'`

Will give you back a JSON file with information regarding a given customization. it contains the name of the customization (`Wheel size`), and the value (`15 inches`) the name of the bicycle it belongs to (along with the `bicycle_id`) and an array of all the associated customizations to that particular customization.

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

### GET users `GET '/api/v1/users/'`

Will give you back a JSON file with a list of all the users signed up to the application along with an array containing all their orders

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

### GET user `GET '/api/v1/users/:id'`

Will give you back the information of a unique user and an array with all his/her orders and the customizations that each other contains.

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
