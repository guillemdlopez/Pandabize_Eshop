# Pandabize 🚲

> Pandabize is a web application that allows the user to buy bicycles fast and easily unlike any other!

## BASE URL

The base url of the API is `http://pandabize-web-store.herokuapp.com`.

🚨If you want to try it with Postman, please remember that **you need to be authenticated**🚨

## Endpoints

### GET bicycles `GET '/api/v1/bicycles'`

Will give you back a JSON file with a list of all the bicycles available in the application and its customizations.

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

## Try it locally

```bash
git clone git@github.com:guillemdlopez/Pandabize_Eshop.git
cd Pandabize_Eshop
rm -rf .git
yarn install
stt # Open on Sublime Text
```

```bash
git clone git@github.com:guillemdlopez/Pandabize_Eshop.git
cd Pandabize_Eshop
rm -rf .git
yarn install
stt # Open on VS Code
```
