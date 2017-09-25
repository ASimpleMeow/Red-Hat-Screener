## API Documentation

**List Users**
----
Returns a list of Users

* **URL**

  `/users`

* **Method:**

  `GET`

*  **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```javascript
    [{
      "_id": "57b330de848a005e48f5de94",
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "olivia",
        "last": "young"
      },
      "location": {
        "street": "1119 grove road",
        "city": "Mountmellick",
        "state": "rhode island",
        "zip": 88061
      },
      "email": "olivia.young@example.com",
      "username": "crazykoala938",
      "password": "malibu",
      "salt": "78TEnNQ1",
      "md5": "9bebcc9d890f8c9e04c9e40fc1f41476",
      "sha1": "36d6a69cabff0ad780a3dcceb4e94d44edb62fc6",
      "sha256": "9e39c873967f52d67e8d052aad87daf4b63d5464a27de982b64abfe9b208efc8",
      "registered": 1411100094,
      "dob": 818810543,
      "phone": "011-475-1126",
      "cell": "081-725-2254",
      "PPS": "4335321T",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/20.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/20.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/20.jpg"
      },
      "__v": 0
    }, {
      "_id": "57b330de848a005e48f5de95",
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "susanne",
        "last": "russell"
      },
      "location": {
        "street": "6896 grafton street",
        "city": "Naas",
        "state": "louisiana",
        "zip": 25003
      },
      "email": "susanne.russell@example.com",
      "username": "ticklishswan833",
      "password": "reader",
      "salt": "Qp38szSx",
      "md5": "57f8e3404f1926bf3fa50c152f037a33",
      "sha1": "43bf7f8fe85e46957cdcb33be61f19dfe9014317",
      "sha256": "c12980f91c86dae1ba9d4d880e8d51645e59f95c6b3d1f28854891d6587b39b5",
      "registered": 1345063087,
      "dob": 481147180,
      "phone": "061-032-9311",
      "cell": "081-609-1066",
      "PPS": "7348900T",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/69.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/69.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/69.jpg"
      },
      "__v": 0
    }]
    ```

* **Error Response:**

* **Code:** 500 INTERNAL SERVER ERROR <br />
  **Content:**

  ```javascript
  { "error": "Error listing users" }
  ```

* **Sample Call:**

  ```javascript
  $.ajax({
    url: "/users",
    dataType: "json",
    type : "GET",
    success : function(r) {
      console.log(r);
    }
  });
  ```


**Show User**
----
  Returns JSON data about a single user.

* **URL**

  `/users/:id`

* **Method:**

  `GET`

*  **URL Params**

   **Required:**

   `id=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```javascript
    {
      "_id": "57b330de848a005e48f5de94",
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "olivia",
        "last": "young"
      },
      "location": {
        "street": "1119 grove road",
        "city": "Mountmellick",
        "state": "rhode island",
        "zip": 88061
      },
      "email": "olivia.young@example.com",
      "username": "crazykoala938",
      "password": "malibu",
      "salt": "78TEnNQ1",
      "md5": "9bebcc9d890f8c9e04c9e40fc1f41476",
      "sha1": "36d6a69cabff0ad780a3dcceb4e94d44edb62fc6",
      "sha256": "9e39c873967f52d67e8d052aad87daf4b63d5464a27de982b64abfe9b208efc8",
      "registered": 1411100094,
      "dob": 818810543,
      "phone": "011-475-1126",
      "cell": "081-725-2254",
      "PPS": "4335321T",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/20.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/20.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/20.jpg"
      },
      "__v": 0
    }
    ```

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:**

    ```javascript
    { "error": "Error reading user" }
    ```

* **Sample Call:**

  ```javascript
  $.ajax({
    url: "/users/1",
    dataType: "json",
    type : "GET",
    success : function(r) {
      console.log(r);
    }
  });
  ```

**Create User**
----
  Creates a new user

* **URL**

  `/users`

* **Method:**

  `POST`

*  **URL Params**

   **Required:**

  None

* **Data Params**

  `gender=[String]`
  `name=[MixedType]` eg. `name={"title":"miss", "name":"cat"}`
  `location=[MixedType]` eg. `location={"street":"11 woods", "city":"waterford"}`
  `email=[String]`
  `username=[String]`
  `password=[String]`
  `salt=[String]`
  `md5=[String]`
  `sha1=[String]`
  `sha256=[String]`
  `registered=[Number]`
  `dob=[Number]`
  `cell=[String]`
  `phone=[String]`
  `picture=[MixedType]` eg. `picture={"large":"20.jpg", "medium":"20_s.jpg"}`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```javascript
    {
    "__v": 0,
    "gender": "male",
    "name": {
        "last": "tester",
        "first": "test",
        "title": "mr"
    },
    "location": {
        "zip": 666,
        "state": "s.atan",
        "city": "hell",
        "street": "21 rosy bath"
    },
    "email": "spooky@scary.skeleton",
    "username": "boneMaster",
    "password": "fleshStudent",
    "salt": "11111",
    "md5": "22222222",
    "sha1": "33333333333",
    "sha256": "4444444444444",
    "registered": 123123123,
    "dob": 123123432423,
    "phone": "1-800-BAD-JOKE",
    "cell": "081-647-4650",
    "PPS": "3302243T",
    "_id": "59c7bc4c0c006518c48e87bf"
}
    ```

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:**

    ```javascript
    { "error": "Error creating user" }
    ```

* **Sample Call:**

  ```javascript
  $.ajax({
    url: "/users",
    data: data,
    dataType: "json",
    type : "POST",
    success : function(r) {
      console.log(r);
    }
  });
  ```
  
**Update User**
----
  Updates an existing user

* **URL**

  `/users/:id`

* **Method:**

  `PUT`

*  **URL Params**

   **Required:**

    `id=[String]`

* **Data Params**
    
  **Optional:**

  `gender=[String]`
  `name=[MixedType]` eg. `name={"title":"miss", "name":"cat2"}`
  `location=[MixedType]` eg. `location={"street":"12 woods", "city":"waterford"}`
  `email=[String]`
  `username=[String]`
  `password=[String]`
  `salt=[String]`
  `md5=[String]`
  `sha1=[String]`
  `sha256=[String]`
  `registered=[Number]`
  `dob=[Number]`
  `cell=[String]`
  `phone=[String]`
  `picture=[MixedType]` eg. `picture={"large":"20.jpg", "medium":"20_s.jpg"}`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```javascript
    {
    "__v": 0,
    "gender": "male",
    "name": {
        "full": "NEW DATA!"
    },
    "location": {
        "zip": 666,
        "state": "s.atan",
        "city": "hell",
        "street": "21 rosy bath"
    },
    "email": "spooky@scary.skeleton",
    "username": "boneMaster",
    "password": "fleshStudent",
    "salt": "11111",
    "md5": "22222222",
    "sha1": "33333333333",
    "sha256": "4444444444444",
    "registered": 123123123,
    "dob": 123123432423,
    "phone": "1-800-BAD-JOKE",
    "cell": "081-647-4650",
    "PPS": "3302243T",
    "_id": "59c7bc4c0c006518c48e87bf"
}
    ```

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:**

    ```javascript
    { "error": "Error updating user" }
    ```

* **Sample Call:**

  ```javascript
  $.ajax({
    url: "/users/1",
    data: data,
    dataType: "json",
    type : "PUT",
    success : function(r) {
      console.log(r);
    }
  });
  ```

**Delete User**
----
  Deletes an existing user

* **URL**

  `/users/:id`

* **Method:**

  `DELETE`

*  **URL Params**

   **Required:**

  `id=[String]`

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```javascript
    { User successfully deleted }
    ```

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:**

    ```javascript
    { "error": "Error deleting user" }
    ```

* **Sample Call:**

  ```javascript
  $.ajax({
    url: "/users/1",
    dataType: "json",
    type : "DELETE",
    success : function(r) {
      console.log(r);
    }
  });
  ```

Inspired by https://gist.github.com/iros/3426278
