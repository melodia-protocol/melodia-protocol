<h1 id="api-users">utilisateurs</h1>

## Obtenir l'identifiant de l'utilisateur par portefeuille associé

<a id="opIdGet the User's id by associated wallet"></a>

> Exemple de code

```shell
curl melodia_API_HOST/v1/users/associated_wallets?id=string


```

```http
GET melodia_API_HOST/v1/users/associated_wallets?id=string HTTP/1.1

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("melodia_API_HOST/v1/users/associated_wallets?id=string", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'melodia_API_HOST/v1/users/associated_wallets',
  params: {
  'id' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('melodia_API_HOST/v1/users/associated_wallets', params={
  'id': 'string'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','melodia_API_HOST/v1/users/associated_wallets', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("melodia_API_HOST/v1/users/associated_wallets?id=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "melodia_API_HOST/v1/users/associated_wallets", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/associated_wallets`

<h3 id="get-the-user's-id-by-associated-wallet-parameters">Paramètres de requête</h3>

| Name | Type   | Required | Description     |
| ---- | ------ | -------- | --------------- |
| id   | string | true     | Encoded User ID |

> Exemple de réponse

> 200 réponses

```json
{
  "data": {
    "wallets": ["string"],
    "sol_wallets": ["string"]
  }
}
```

<h3 id="get-the-user's-id-by-associated-wallet-responses">Réponses</h3>

| Status | Meaning                                                                    | Description  | Schema                                                            |
| ------ | -------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | Success      | [associated_wallets_response](#schemaassociated_wallets_response) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                                              |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                                              |

## Obtenir l'identifiant de l'utilisateur par portefeuille associé

<a id="opIdGet the User's associated wallets"></a>

> Exemple de code

```shell
curl melodia_API_HOST/v1/users/id?associated_wallet=string


```

```http
GET melodia_API_HOST/v1/users/id?associated_wallet=string HTTP/1.1

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("melodia_API_HOST/v1/users/id?associated_wallet=string", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'melodia_API_HOST/v1/users/id',
  params: {
  'associated_wallet' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('melodia_API_HOST/v1/users/id', params={
  'associated_wallet': 'string'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','melodia_API_HOST/v1/users/id', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("melodia_API_HOST/v1/users/id?associated_wallet=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "melodia_API_HOST/v1/users/id", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/id`

<h3 id="get-the-user's-associated-wallets-parameters">Paramètres de requête</h3>

| Name              | Type   | Required | Description    |
| ----------------- | ------ | -------- | -------------- |
| associated_wallet | string | true     | Wallet address |

> Exemple de réponse

> 200 réponses

```json
{
  "data": {
    "user_id": "string"
  }
}
```

<h3 id="get-the-user's-associated-wallets-responses">Réponses</h3>

| Status | Meaning                                                                    | Description  | Schema                                                                    |
| ------ | -------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | Success      | [user_associated_wallet_response](#schemauser_associated_wallet_response) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                                                      |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                                                      |

## Recherche d'utilisateurs

<a id="opIdSearch Users"></a>

> Exemple de code

```shell
curl melodia_API_HOST/v1/users/search?query=Brownies


```

```http
GET melodia_API_HOST/v1/users/search?query=Brownies HTTP/1.1

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("melodia_API_HOST/v1/users/search?query=Brownies", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'melodia_API_HOST/v1/users/search',
  params: {
  'query' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('melodia_API_HOST/v1/users/search', params={
  'query': 'Brownies'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','melodia_API_HOST/v1/users/search', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("melodia_API_HOST/v1/users/search?query=Brownies");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "melodia_API_HOST/v1/users/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/search`

_Recherche d'un utilisateur_

<h3 id="search-users-parameters">Paramètres de requête</h3>

| Name              | Type   | Required | Description  |
| ----------------- | ------ | -------- | ------------ |
| query             | string | true     | Search query |
| only_downloadable | string | false    | none         |

> Exemple de réponse

```json
{
  "data": [
    {
      "album_count": 0,
      "bio": "Makin' moves & keeping you on your toes. linktr.ee/browniesandlemonade",
      "cover_photo": {
        "640x": "https://creatornode.melodia.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/640x.jpg",
        "2000x": "https://creatornode.melodia.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg"
      },
      "followee_count": 19,
      "follower_count": 11141,
      "handle": "TeamBandL",
      "id": "nlGNe",
      "is_verified": true,
      "location": "Los Angeles, CA",
      "name": "Brownies & Lemonade",
      "playlist_count": 2,
      "profile_picture": {
        "150x150": "https://creatornode.melodia.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
        "480x480": "https://creatornode.melodia.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
        "1000x1000": "https://creatornode.melodia.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
      },
      "repost_count": 5,
      "track_count": 4
    }
  ]
}
```

<h3 id="search-users-responses">Réponses</h3>

| Status | Meaning                                                                    | Description  | Schema                            |
| ------ | -------------------------------------------------------------------------- | ------------ | --------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | none         | [user_search](#schemauser_search) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                              |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                              |

## Accéder à un utilisateur

<a id="opIdGet User"></a>

> Exemple de code

```shell
curl melodia_API_HOST/v1/users/nlGNe


```

```http
GET melodia_API_HOST/v1/users/nlGNe HTTP/1.1

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("melodia_API_HOST/v1/users/nlGNe", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'melodia_API_HOST/v1/users/nlGNe',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('melodia_API_HOST/v1/users/nlGNe', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','melodia_API_HOST/v1/users/nlGNe', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("melodia_API_HOST/v1/users/nlGNe");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "melodia_API_HOST/v1/users/nlGNe", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/{user_id}`

_Récupérer un seul utilisateur_

<h3 id="get-user-parameters">Paramètres de requête</h3>

| Name    | Type   | Required | Description |
| ------- | ------ | -------- | ----------- |
| user_id | string | true     | A User ID   |

> Exemple de réponse

```json
{
  "data": {
    "album_count": 0,
    "bio": "Makin' moves & keeping you on your toes. linktr.ee/browniesandlemonade",
    "cover_photo": {
      "640x": "https://creatornode.melodia.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/640x.jpg",
      "2000x": "https://creatornode.melodia.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg"
    },
    "followee_count": 19,
    "follower_count": 11141,
    "handle": "TeamBandL",
    "id": "nlGNe",
    "is_verified": true,
    "location": "Los Angeles, CA",
    "name": "Brownies & Lemonade",
    "playlist_count": 2,
    "profile_picture": {
      "150x150": "https://creatornode.melodia.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
      "480x480": "https://creatornode.melodia.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
      "1000x1000": "https://creatornode.melodia.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
    },
    "repost_count": 5,
    "track_count": 4
  }
}
```

<h3 id="get-user-responses">Réponses</h3>

| Status | Meaning                                                                    | Description  | Schema                                |
| ------ | -------------------------------------------------------------------------- | ------------ | ------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | none         | [user_response](#schemauser_response) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                  |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                  |

## ID de l'utilisateur

<a id="opIdThe users's ID"></a>

> Exemple de code

```shell
curl melodia_API_HOST/v1/users/string/challenges


```

```http
GET melodia_API_HOST/v1/users/string/challenges HTTP/1.1

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("melodia_API_HOST/v1/users/string/challenges", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'melodia_API_HOST/v1/users/string/challenges',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('melodia_API_HOST/v1/users/string/challenges', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','melodia_API_HOST/v1/users/string/challenges', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("melodia_API_HOST/v1/users/string/challenges");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "melodia_API_HOST/v1/users/string/challenges", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/{user_id}/challenges`

<h3 id="the-users's-id-parameters">Paramètres de requête</h3>

| Name            | Type   | Required | Description                                                |
| --------------- | ------ | -------- | ---------------------------------------------------------- |
| show_historical | string | false    | Whether to show challenges that are inactive but completed |
| user_id         | string | true     | none                                                       |

> Exemple de réponse

> 200 réponses

```json
{
  "data": [
    {
      "challenge_id": "string",
      "user_id": "string",
      "specifier": "string",
      "is_complete": true,
      "is_active": true,
      "is_disbursed": true,
      "current_step_count": 0,
      "max_steps": 0,
      "challenge_type": "string",
      "metadata": {}
    }
  ]
}
```

<h3 id="the-users's-id-responses">Réponses</h3>

| Status | Meaning                                                                    | Description  | Schema                                  |
| ------ | -------------------------------------------------------------------------- | ------------ | --------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | Success      | [get_challenges](#schemaget_challenges) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                    |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                    |

## Obtenez les titres préférés des utilisateurs

<a id="opIdGet User's Favorite Tracks"></a>

> Exemple de code

```shell
curl melodia_API_HOST/v1/users/nlGNe/favorites


```

```http
GET melodia_API_HOST/v1/users/nlGNe/favorites HTTP/1.1

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("melodia_API_HOST/v1/users/nlGNe/favorites", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'melodia_API_HOST/v1/users/nlGNe/favorites',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('melodia_API_HOST/v1/users/nlGNe/favorites', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','melodia_API_HOST/v1/users/nlGNe/favorites', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("melodia_API_HOST/v1/users/nlGNe/favorites");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "melodia_API_HOST/v1/users/nlGNe/favorites", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/{user_id}/favorites`

_Récupérer les titres favoris d'un utilisateur_

<h3 id="get-user's-favorite-tracks-parameters">Paramètres de requête</h3>

| Name    | Type   | Required | Description |
| ------- | ------ | -------- | ----------- |
| user_id | string | true     | A User ID   |

> Exemple de réponse

```json
{
  "data": [
    {
      "favorite_item_id": "n3yVD",
      "favorite_type": "SaveType.track",
      "user_id": "nlGNe"
    },
    {
      "favorite_item_id": "nlv5l",
      "favorite_type": "SaveType.track",
      "user_id": "nlGNe"
    },
    {
      "favorite_item_id": "ezYKz",
      "favorite_type": "SaveType.track",
      "user_id": "nlGNe"
    }
  ]
}
```

<h3 id="get-user's-favorite-tracks-responses">Réponses</h3>

| Status | Meaning                                                                    | Description  | Schema                                          |
| ------ | -------------------------------------------------------------------------- | ------------ | ----------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | none         | [favorites_response](#schemafavorites_response) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                            |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                            |

## Obtenir les publications de l'utilisateur

<a id="opIdGet User's Reposts"></a>

> Exemple de code

```shell
curl melodia_API_HOST/v1/users/string/reposts


```

```http
GET melodia_API_HOST/v1/users/string/reposts HTTP/1.1

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("melodia_API_HOST/v1/users/string/reposts", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'melodia_API_HOST/v1/users/string/reposts',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('melodia_API_HOST/v1/users/string/reposts', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','melodia_API_HOST/v1/users/string/reposts', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("melodia_API_HOST/v1/users/string/reposts");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "melodia_API_HOST/v1/users/string/reposts", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/{user_id}/reposts`

<h3 id="get-user's-reposts-parameters">Paramètres de requête</h3>

| Name    | Type   | Required | Description |
| ------- | ------ | -------- | ----------- |
| user_id | string | true     | A User ID   |
| limit   | string | false    | Limit       |
| offset  | string | false    | Offset      |

> Exemple de réponse

> 200 réponses

```json
{
  "data": [
    {
      "timestamp": "string",
      "item_type": {},
      "item": {}
    }
  ]
}
```

<h3 id="get-user's-reposts-responses">Réponses</h3>

| Status | Meaning                                                                    | Description  | Schema                    |
| ------ | -------------------------------------------------------------------------- | ------------ | ------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | Success      | [reposts](#schemareposts) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                      |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                      |

## Obtenez les marqueurs de suivi les plus utilisés par les utilisateurs

<a id="opIdGet User's Most Used Track Tags"></a>

> Exemple de code

```shell
curl melodia_API_HOST/v1/users/string/tags?user_id=string


```

```http
GET melodia_API_HOST/v1/users/string/tags?user_id=string HTTP/1.1

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("melodia_API_HOST/v1/users/string/tags?user_id=string", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'melodia_API_HOST/v1/users/string/tags',
  params: {
  'user_id' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('melodia_API_HOST/v1/users/string/tags', params={
  'user_id': 'string'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','melodia_API_HOST/v1/users/string/tags', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("melodia_API_HOST/v1/users/string/tags?user_id=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "melodia_API_HOST/v1/users/string/tags", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/{user_id}/tags`

_Récupérer les marqueurs les plus utilisés dans les pistes d'un utilisateur_

<h3 id="get-user's-most-used-track-tags-parameters">Paramètres de requête</h3>

| Name    | Type    | Required | Description                 |
| ------- | ------- | -------- | --------------------------- |
| user_id | string  | true     | A User ID                   |
| limit   | integer | false    | Limit on the number of tags |
| user_id | string  | true     | none                        |

> Exemple de réponse

> 200 réponses

```json
{
  "data": ["string"]
}
```

<h3 id="get-user's-most-used-track-tags-responses">Réponses</h3>

| Status | Meaning                                                                    | Description  | Schema                                |
| ------ | -------------------------------------------------------------------------- | ------------ | ------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | Success      | [tags_response](#schematags_response) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                  |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                  |

## Obtenir les pistes de l'utilisateur

<a id="opIdGet User's Tracks"></a>

> Exemple de code

```shell
curl melodia_API_HOST/v1/users/nlGNe/tracks


```

```http
GET melodia_API_HOST/v1/users/nlGNe/tracks HTTP/1.1

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("melodia_API_HOST/v1/users/nlGNe/tracks", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'melodia_API_HOST/v1/users/nlGNe/tracks',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('melodia_API_HOST/v1/users/nlGNe/tracks', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','melodia_API_HOST/v1/users/nlGNe/tracks', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("melodia_API_HOST/v1/users/nlGNe/tracks");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "melodia_API_HOST/v1/users/nlGNe/tracks", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/{user_id}/tracks`

_Récupérer une liste de titres pour un utilisateur_

<h3 id="get-user's-tracks-parameters">Paramètres de requête</h3>

| Name    | Type   | Required | Description |
| ------- | ------ | -------- | ----------- |
| user_id | string | true     | A User ID   |
| limit   | string | false    | Limit       |
| offset  | string | false    | Offset      |
| sort    | string | false    | Sort mode   |

> Exemple de réponse

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "https://creatornode.melodia.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/150x150.jpg",
        "480x480": "https://creatornode.melodia.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/480x480.jpg",
        "1000x1000": "https://creatornode.melodia.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/1000x1000.jpg"
      },
      "description": "@baauer b2b @partyfavormusic live set at Brownies & Lemonade Block Party LA at The Shrine on 7.3.19.",
      "genre": "Electronic",
      "id": "D7KyD",
      "mood": "Fiery",
      "release_date": "Mon Sep 23 2019 12:35:10 GMT-0700",
      "repost_count": 47,
      "favorite_count": 143,
      "tags": "baauer,partyfavor,browniesandlemonade,live",
      "title": "Paauer | Baauer B2B Party Favor | B&L Block Party LA (Live Set)",
      "duration": 5265,
      "user": {
        "album_count": 0,
        "bio": "Makin' moves & keeping you on your toes. linktr.ee/browniesandlemonade",
        "cover_photo": {
          "640x": "https://creatornode.melodia.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/640x.jpg",
          "2000x": "https://creatornode.melodia.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg"
        },
        "followee_count": 19,
        "follower_count": 11141,
        "handle": "TeamBandL",
        "id": "nlGNe",
        "is_verified": true,
        "location": "Los Angeles, CA",
        "name": "Brownies & Lemonade",
        "playlist_count": 2,
        "profile_picture": {
          "150x150": "https://creatornode.melodia.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
          "480x480": "https://creatornode.melodia.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
          "1000x1000": "https://creatornode.melodia.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
        },
        "repost_count": 5,
        "track_count": 4
      }
    }
  ]
}
```

<h3 id="get-user's-tracks-responses">Réponses</h3>

| Status | Meaning                                                                    | Description  | Schema                                    |
| ------ | -------------------------------------------------------------------------- | ------------ | ----------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | none         | [tracks_response](#schematracks_response) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                      |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                      |

<h1 id="api-playlists">playlists</h1>

## Recherche de playlist

<a id="opIdSearch Playlists"></a>

> Exemple de code

```shell
curl melodia_API_HOST/v1/playlists/search?query=Hot & New


```

```http
GET melodia_API_HOST/v1/playlists/search?query=Hot & New HTTP/1.1

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("melodia_API_HOST/v1/playlists/search?query=Hot & New", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'melodia_API_HOST/v1/playlists/search',
  params: {
  'query' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('melodia_API_HOST/v1/playlists/search', params={
  'query': 'Hot & New'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','melodia_API_HOST/v1/playlists/search', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("melodia_API_HOST/v1/playlists/search?query=Hot & New");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "melodia_API_HOST/v1/playlists/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /playlists/search`

_Rechercher une playlist_

<h3 id="search-playlists-parameters">Paramètres de requête</h3>

| Name              | Type   | Required | Description  |
| ----------------- | ------ | -------- | ------------ |
| query             | string | true     | Search Query |
| only_downloadable | string | false    | none         |

> Exemple de réponse

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "https://usermetadata.melodia.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/150x150.jpg",
        "480x480": "https://usermetadata.melodia.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/480x480.jpg",
        "1000x1000": "https://usermetadata.melodia.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/1000x1000.jpg"
      },
      "description": "All the latest hot new tracks on melodia! Enjoy the eclectic sounds that are created during the peak of this 2020 Summer.",
      "id": "DOPRl",
      "is_album": true,
      "playlist_name": "Hot & New on melodia 🔥",
      "repost_count": 46,
      "favorite_count": 88,
      "user": {
        "album_count": 0,
        "bio": "The official melodia account! Creating a decentralized and open-source streaming music platform controlled by artists, fans, & developers.",
        "cover_photo": {
          "640x": "string",
          "2000x": "string"
        },
        "followee_count": 69,
        "follower_count": 6763,
        "handle": "melodia",
        "id": "eJ57D",
        "is_verified": true,
        "location": "SF & LA",
        "name": "melodia",
        "playlist_count": 9,
        "profile_picture": {
          "150x150": "https://usermetadata.melodia.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f",
          "480x480": "https://usermetadata.melodia.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f",
          "1000x1000": "https://usermetadata.melodia.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f"
        },
        "repost_count": 200,
        "track_count": 0
      }
    }
  ]
}
```

<h3 id="search-playlists-responses">Réponses</h3>

| Status | Meaning                                                                    | Description  | Schema                                                  |
| ------ | -------------------------------------------------------------------------- | ------------ | ------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | none         | [playlist_search_result](#schemaplaylist_search_result) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                                    |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                                    |

## Playlists populaires

<a id="opIdTrending Playlists"></a>

> Exemple de code

```shell
curl melodia_API_HOST/v1/playlists/trending/string


```

```http
GET melodia_API_HOST/v1/playlists/trending/string HTTP/1.1

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("melodia_API_HOST/v1/playlists/trending/string", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'melodia_API_HOST/v1/playlists/trending/string',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('melodia_API_HOST/v1/playlists/trending/string', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','melodia_API_HOST/v1/playlists/trending/string', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("melodia_API_HOST/v1/playlists/trending/string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "melodia_API_HOST/v1/playlists/trending/string", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /playlists/trending/{version}`

_Obtenez les playlists les plus populaires pour une période donnée sur melodia_

<h3 id="trending-playlists-parameters">Paramètres de requête</h3>

| Name    | Type   | Required | Description         |
| ------- | ------ | -------- | ------------------- |
| time    | string | false    | time range to query |
| version | string | true     | none                |

> Exemple de réponse

> 200 réponses

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "string",
        "480x480": "string",
        "1000x1000": "string"
      },
      "description": "string",
      "id": "string",
      "is_album": true,
      "playlist_name": "string",
      "repost_count": 0,
      "favorite_count": 0,
      "total_play_count": 0,
      "user": {
        "album_count": 0,
        "bio": "string",
        "cover_photo": {
          "640x": "string",
          "2000x": "string"
        },
        "followee_count": 0,
        "follower_count": 0,
        "handle": "string",
        "id": "string",
        "is_verified": true,
        "location": "string",
        "name": "string",
        "playlist_count": 0,
        "profile_picture": {
          "150x150": "string",
          "480x480": "string",
          "1000x1000": "string"
        },
        "repost_count": 0,
        "track_count": 0
      }
    }
  ]
}
```

<h3 id="trending-playlists-responses">Réponses</h3>

| Status | Meaning                                                                    | Description  | Schema                                                            |
| ------ | -------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | Success      | [trending_playlists_response](#schematrending_playlists_response) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                                              |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                                              |

## Récupérer la playlist

<a id="opIdGet Playlist"></a>

> Exemple de code

```shell
curl melodia_API_HOST/v1/playlists/DOPRl


```

```http
GET melodia_API_HOST/v1/playlists/DOPRl HTTP/1.1

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("melodia_API_HOST/v1/playlists/DOPRl", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'melodia_API_HOST/v1/playlists/DOPRl',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('melodia_API_HOST/v1/playlists/DOPRl', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','melodia_API_HOST/v1/playlists/DOPRl', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("melodia_API_HOST/v1/playlists/DOPRl");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "melodia_API_HOST/v1/playlists/DOPRl", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /playlists/{playlist_id}`

_Récupérer une playlist_

<h3 id="get-playlist-parameters">Paramètres de requête</h3>

| Name        | Type   | Required | Description   |
| ----------- | ------ | -------- | ------------- |
| playlist_id | string | true     | A Playlist ID |

> Exemple de réponse

```json
{
  "data": {
    "artwork": {
      "150x150": "https://usermetadata.melodia.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/150x150.jpg",
      "480x480": "https://usermetadata.melodia.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/480x480.jpg",
      "1000x1000": "https://usermetadata.melodia.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/1000x1000.jpg"
    },
    "description": "All the latest hot new tracks on melodia! Enjoy the eclectic sounds that are created during the peak of this 2020 Summer.",
    "id": "DOPRl",
    "is_album": true,
    "playlist_name": "Hot & New on melodia 🔥",
    "repost_count": 46,
    "favorite_count": 88,
    "user": {
      "album_count": 0,
      "bio": "The official melodia account! Creating a decentralized and open-source streaming music platform controlled by artists, fans, & developers.",
      "cover_photo": {
        "640x": "string",
        "2000x": "string"
      },
      "followee_count": 69,
      "follower_count": 6763,
      "handle": "melodia",
      "id": "eJ57D",
      "is_verified": true,
      "location": "SF & LA",
      "name": "melodia",
      "playlist_count": 9,
      "profile_picture": {
        "150x150": "https://usermetadata.melodia.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f",
        "480x480": "https://usermetadata.melodia.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f",
        "1000x1000": "https://usermetadata.melodia.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f"
      },
      "repost_count": 200,
      "track_count": 0
    }
  }
}
```

<h3 id="get-playlist-responses">Réponses</h3>

| Status | Meaning                                                                    | Description  | Schema                                        |
| ------ | -------------------------------------------------------------------------- | ------------ | --------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | none         | [playlist_response](#schemaplaylist_response) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                          |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                          |

## Obtenir les pistes de la liste de lecture

<a id="opIdGet Playlist Tracks"></a>

> Exemple de code

```shell
curl melodia_API_HOST/v1/playlists/DOPRl/tracks


```

```http
GET melodia_API_HOST/v1/playlists/DOPRl/tracks HTTP/1.1

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("melodia_API_HOST/v1/playlists/DOPRl/tracks", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'melodia_API_HOST/v1/playlists/DOPRl/tracks',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('melodia_API_HOST/v1/playlists/DOPRl/tracks', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','melodia_API_HOST/v1/playlists/DOPRl/tracks', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("melodia_API_HOST/v1/playlists/DOPRl/tracks");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "melodia_API_HOST/v1/playlists/DOPRl/tracks", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /playlists/{playlist_id}/tracks`

_Récupérer ls titres dans une playlist_

<h3 id="get-playlist-tracks-parameters">Paramètres de requête</h3>

| Name        | Type   | Required | Description   |
| ----------- | ------ | -------- | ------------- |
| playlist_id | string | true     | A Playlist ID |

> Exemple de réponse

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "https://creatornode.melodia.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/150x150.jpg",
        "480x480": "https://creatornode.melodia.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/480x480.jpg",
        "1000x1000": "https://creatornode.melodia.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/1000x1000.jpg"
      },
      "description": "@baauer b2b @partyfavormusic live set at Brownies & Lemonade Block Party LA at The Shrine on 7.3.19.",
      "genre": "Electronic",
      "id": "D7KyD",
      "mood": "Fiery",
      "release_date": "Mon Sep 23 2019 12:35:10 GMT-0700",
      "repost_count": 47,
      "favorite_count": 143,
      "tags": "baauer,partyfavor,browniesandlemonade,live",
      "title": "Paauer | Baauer B2B Party Favor | B&L Block Party LA (Live Set)",
      "duration": 5265,
      "user": {
        "album_count": 0,
        "bio": "Makin' moves & keeping you on your toes. linktr.ee/browniesandlemonade",
        "cover_photo": {
          "640x": "https://creatornode.melodia.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/640x.jpg",
          "2000x": "https://creatornode.melodia.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg"
        },
        "followee_count": 19,
        "follower_count": 11141,
        "handle": "TeamBandL",
        "id": "nlGNe",
        "is_verified": true,
        "location": "Los Angeles, CA",
        "name": "Brownies & Lemonade",
        "playlist_count": 2,
        "profile_picture": {
          "150x150": "https://creatornode.melodia.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
          "480x480": "https://creatornode.melodia.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
          "1000x1000": "https://creatornode.melodia.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
        },
        "repost_count": 5,
        "track_count": 4
      }
    }
  ]
}
```

<h3 id="get-playlist-tracks-responses">Réponses</h3>

| Status | Meaning                                                                    | Description  | Schema                                                      |
| ------ | -------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | none         | [playlist_tracks_response](#schemaplaylist_tracks_response) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                                        |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                                        |

<h1 id="api-tracks">pistes</h1>

## Obtenir la piste By Handle and Slug

<a id="opIdGet Track By Handle and Slug"></a>

> Exemple de code

```shell
curl melodia_API_HOST/v1/tracks


```

```http
GET melodia_API_HOST/v1/tracks HTTP/1.1

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("melodia_API_HOST/v1/tracks", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'melodia_API_HOST/v1/tracks',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('melodia_API_HOST/v1/tracks', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','melodia_API_HOST/v1/tracks', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("melodia_API_HOST/v1/tracks");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "melodia_API_HOST/v1/tracks", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /tracks`

<h3 id="get-track-by-handle-and-slug-parameters">Paramètres de requête</h3>

| Name   | Type   | Required | Description      |
| ------ | ------ | -------- | ---------------- |
| handle | string | false    | A User's handle  |
| slug   | string | false    | The track's slug |

> Exemple de réponse

> 200 réponses

```json
{
  "data": {
    "artwork": {
      "150x150": "string",
      "480x480": "string",
      "1000x1000": "string"
    },
    "description": "string",
    "genre": "string",
    "id": "string",
    "mood": "string",
    "release_date": "string",
    "remix_of": {
      "tracks": [
        {
          "parent_track_id": "string"
        }
      ]
    },
    "repost_count": 0,
    "favorite_count": 0,
    "tags": "string",
    "title": "string",
    "user": {
      "album_count": 0,
      "bio": "string",
      "cover_photo": {
        "640x": "string",
        "2000x": "string"
      },
      "followee_count": 0,
      "follower_count": 0,
      "handle": "string",
      "id": "string",
      "is_verified": true,
      "location": "string",
      "name": "string",
      "playlist_count": 0,
      "profile_picture": {
        "150x150": "string",
        "480x480": "string",
        "1000x1000": "string"
      },
      "repost_count": 0,
      "track_count": 0
    },
    "duration": 0,
    "downloadable": true,
    "play_count": 0,
    "permalink": "string"
  }
}
```

<h3 id="get-track-by-handle-and-slug-responses">Réponses</h3>

| Status | Meaning                                                                    | Description  | Schema                                  |
| ------ | -------------------------------------------------------------------------- | ------------ | --------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | Success      | [track_response](#schematrack_response) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                    |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                    |

## Pistes recommandées

<a id="opIdRecommended Tracks"></a>

> Exemple de code

```shell
curl melodia_API_HOST/v1/tracks/recommended/string


```

```http
GET melodia_API_HOST/v1/tracks/recommended/string HTTP/1.1

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("melodia_API_HOST/v1/tracks/recommended/string", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'melodia_API_HOST/v1/tracks/recommended/string',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('melodia_API_HOST/v1/tracks/recommended/string', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','melodia_API_HOST/v1/tracks/recommended/string', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("melodia_API_HOST/v1/tracks/recommended/string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "melodia_API_HOST/v1/tracks/recommended/string", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /tracks/recommended/{version}`

<h3 id="recommended-tracks-parameters">Paramètres de requête</h3>

| Name           | Type   | Required | Description                                                        |
| -------------- | ------ | -------- | ------------------------------------------------------------------ |
| genre          | string | false    | Recommended trending tracks for a specified genre                  |
| limit          | string | false    | Number of recommended tracks to fetch                              |
| exclusion_list | string | false    | List of track ids to exclude                                       |
| time           | string | false    | Trending tracks over a specified time range (week, month, allTime) |
| version        | string | true     | none                                                               |

> Exemple de réponse

> 200 réponses

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "string",
        "480x480": "string",
        "1000x1000": "string"
      },
      "description": "string",
      "genre": "string",
      "id": "string",
      "mood": "string",
      "release_date": "string",
      "remix_of": {
        "tracks": [
          {
            "parent_track_id": "string"
          }
        ]
      },
      "repost_count": 0,
      "favorite_count": 0,
      "tags": "string",
      "title": "string",
      "user": {
        "album_count": 0,
        "bio": "string",
        "cover_photo": {
          "640x": "string",
          "2000x": "string"
        },
        "followee_count": 0,
        "follower_count": 0,
        "handle": "string",
        "id": "string",
        "is_verified": true,
        "location": "string",
        "name": "string",
        "playlist_count": 0,
        "profile_picture": {
          "150x150": "string",
          "480x480": "string",
          "1000x1000": "string"
        },
        "repost_count": 0,
        "track_count": 0
      },
      "duration": 0,
      "downloadable": true,
      "play_count": 0,
      "permalink": "string"
    }
  ]
}
```

<h3 id="recommended-tracks-responses">Réponses</h3>

| Status | Meaning                                                                    | Description  | Schema                                    |
| ------ | -------------------------------------------------------------------------- | ------------ | ----------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | Success      | [tracks_response](#schematracks_response) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                      |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                      |

## Recherche de pistes

<a id="opIdSearch Tracks"></a>

> Exemple de code

```shell
curl melodia_API_HOST/v1/tracks/search?query=baauer b2b


```

```http
GET melodia_API_HOST/v1/tracks/search?query=baauer b2b HTTP/1.1

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("melodia_API_HOST/v1/tracks/search?query=baauer b2b", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'melodia_API_HOST/v1/tracks/search',
  params: {
  'query' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('melodia_API_HOST/v1/tracks/search', params={
  'query': 'baauer b2b'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','melodia_API_HOST/v1/tracks/search', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("melodia_API_HOST/v1/tracks/search?query=baauer b2b");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "melodia_API_HOST/v1/tracks/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /tracks/search`

_Recherche d'une piste_

<h3 id="search-tracks-parameters">Paramètres de requête</h3>

| Name              | Type   | Required | Description                     |
| ----------------- | ------ | -------- | ------------------------------- |
| query             | string | true     | Search Query                    |
| only_downloadable | string | false    | Return only downloadable tracks |

> Exemple de réponse

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "https://creatornode.melodia.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/150x150.jpg",
        "480x480": "https://creatornode.melodia.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/480x480.jpg",
        "1000x1000": "https://creatornode.melodia.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/1000x1000.jpg"
      },
      "description": "@baauer b2b @partyfavormusic live set at Brownies & Lemonade Block Party LA at The Shrine on 7.3.19.",
      "genre": "Electronic",
      "id": "D7KyD",
      "mood": "Fiery",
      "release_date": "Mon Sep 23 2019 12:35:10 GMT-0700",
      "repost_count": 47,
      "favorite_count": 143,
      "tags": "baauer,partyfavor,browniesandlemonade,live",
      "title": "Paauer | Baauer B2B Party Favor | B&L Block Party LA (Live Set)",
      "duration": 5265,
      "user": {
        "album_count": 0,
        "bio": "Makin' moves & keeping you on your toes. linktr.ee/browniesandlemonade",
        "cover_photo": {
          "640x": "https://creatornode.melodia.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/640x.jpg",
          "2000x": "https://creatornode.melodia.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg"
        },
        "followee_count": 19,
        "follower_count": 11141,
        "handle": "TeamBandL",
        "id": "nlGNe",
        "is_verified": true,
        "location": "Los Angeles, CA",
        "name": "Brownies & Lemonade",
        "playlist_count": 2,
        "profile_picture": {
          "150x150": "https://creatornode.melodia.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
          "480x480": "https://creatornode.melodia.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
          "1000x1000": "https://creatornode.melodia.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
        },
        "repost_count": 5,
        "track_count": 4
      }
    }
  ]
}
```

<h3 id="search-tracks-responses">Réponses</h3>

| Status | Meaning                                                                    | Description  | Schema                              |
| ------ | -------------------------------------------------------------------------- | ------------ | ----------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | none         | [track_search](#schematrack_search) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                |

## Pistes populaires

<a id="opIdTrending Tracks"></a>

> Exemple de code

```shell
curl melodia_API_HOST/v1/tracks/trending/string


```

```http
GET melodia_API_HOST/v1/tracks/trending/string HTTP/1.1

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("melodia_API_HOST/v1/tracks/trending/string", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'melodia_API_HOST/v1/tracks/trending/string',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('melodia_API_HOST/v1/tracks/trending/string', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','melodia_API_HOST/v1/tracks/trending/string', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("melodia_API_HOST/v1/tracks/trending/string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "melodia_API_HOST/v1/tracks/trending/string", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /tracks/trending/{version}`

_Obtenez les 100 pistes les plus populaires sur melodia_

<h3 id="trending-tracks-parameters">Paramètres de requête</h3>

| Name    | Type   | Required | Description                                                        |
| ------- | ------ | -------- | ------------------------------------------------------------------ |
| genre   | string | false    | Trending tracks for a specified genre                              |
| time    | string | false    | Trending tracks over a specified time range (week, month, allTime) |
| version | string | true     | none                                                               |

> Exemple de réponse

> 200 réponses

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "string",
        "480x480": "string",
        "1000x1000": "string"
      },
      "description": "string",
      "genre": "string",
      "id": "string",
      "mood": "string",
      "release_date": "string",
      "remix_of": {
        "tracks": [
          {
            "parent_track_id": "string"
          }
        ]
      },
      "repost_count": 0,
      "favorite_count": 0,
      "tags": "string",
      "title": "string",
      "user": {
        "album_count": 0,
        "bio": "string",
        "cover_photo": {
          "640x": "string",
          "2000x": "string"
        },
        "followee_count": 0,
        "follower_count": 0,
        "handle": "string",
        "id": "string",
        "is_verified": true,
        "location": "string",
        "name": "string",
        "playlist_count": 0,
        "profile_picture": {
          "150x150": "string",
          "480x480": "string",
          "1000x1000": "string"
        },
        "repost_count": 0,
        "track_count": 0
      },
      "duration": 0,
      "downloadable": true,
      "play_count": 0,
      "permalink": "string"
    }
  ]
}
```

<h3 id="trending-tracks-responses">Réponses</h3>

| Status | Meaning                                                                    | Description  | Schema                                    |
| ------ | -------------------------------------------------------------------------- | ------------ | ----------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | Success      | [tracks_response](#schematracks_response) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                      |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                      |

## Obtenir une piste

<a id="opIdGet Track"></a>

> Exemple de code

```shell
curl melodia_API_HOST/v1/tracks/D7KyD


```

```http
GET melodia_API_HOST/v1/tracks/D7KyD HTTP/1.1

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("melodia_API_HOST/v1/tracks/D7KyD", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'melodia_API_HOST/v1/tracks/D7KyD',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('melodia_API_HOST/v1/tracks/D7KyD', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','melodia_API_HOST/v1/tracks/D7KyD', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("melodia_API_HOST/v1/tracks/D7KyD");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "melodia_API_HOST/v1/tracks/D7KyD", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /tracks/{track_id}`

_Récupérer une piste_

<h3 id="get-track-parameters">Paramètres de requête</h3>

| Name     | Type   | Required | Description |
| -------- | ------ | -------- | ----------- |
| track_id | string | true     | A Track ID  |

> Exemple de réponse

```json
{
  "data": {
    "artwork": {
      "150x150": "https://creatornode.melodia.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/150x150.jpg",
      "480x480": "https://creatornode.melodia.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/480x480.jpg",
      "1000x1000": "https://creatornode.melodia.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/1000x1000.jpg"
    },
    "description": "@baauer b2b @partyfavormusic live set at Brownies & Lemonade Block Party LA at The Shrine on 7.3.19.",
    "genre": "Electronic",
    "id": "D7KyD",
    "mood": "Fiery",
    "release_date": "Mon Sep 23 2019 12:35:10 GMT-0700",
    "repost_count": 47,
    "favorite_count": 143,
    "tags": "baauer,partyfavor,browniesandlemonade,live",
    "title": "Paauer | Baauer B2B Party Favor | B&L Block Party LA (Live Set)",
    "duration": 5265,
    "user": {
      "album_count": 0,
      "bio": "Makin' moves & keeping you on your toes. linktr.ee/browniesandlemonade",
      "cover_photo": {
        "640x": "https://creatornode.melodia.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/640x.jpg",
        "2000x": "https://creatornode.melodia.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg"
      },
      "followee_count": 19,
      "follower_count": 11141,
      "handle": "TeamBandL",
      "id": "nlGNe",
      "is_verified": true,
      "location": "Los Angeles, CA",
      "name": "Brownies & Lemonade",
      "playlist_count": 2,
      "profile_picture": {
        "150x150": "https://creatornode.melodia.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
        "480x480": "https://creatornode.melodia.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
        "1000x1000": "https://creatornode.melodia.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
      },
      "repost_count": 5,
      "track_count": 4
    }
  }
}
```

<h3 id="get-track-responses">Réponses</h3>

| Status | Meaning                                                                    | Description  | Schema                                  |
| ------ | -------------------------------------------------------------------------- | ------------ | --------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | none         | [track_response](#schematrack_response) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                    |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                    |

## Piste de streaming

<a id="opIdStream Track"></a>

> Exemple de code

```shell
curl melodia_API_HOST/v1/tracks/D7KyD/stream

```

```http
GET melodia_API_HOST/v1/tracks/D7KyD/stream HTTP/1.1

```

```javascript
fetch("melodia_API_HOST/v1/tracks/D7KyD/stream", {
  method: "GET",
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'melodia_API_HOST/v1/tracks/D7KyD/stream',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('melodia_API_HOST/v1/tracks/D7KyD/stream')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','melodia_API_HOST/v1/tracks/D7KyD/stream', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("melodia_API_HOST/v1/tracks/D7KyD/stream");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "melodia_API_HOST/v1/tracks/D7KyD/stream", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /tracks/{track_id}/stream`

_Obtenir le fichier mp3 de la piste en streaming_

Ce endpoint accepte l'en-tête Range pour le streaming. https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests

<h3 id="stream-track-parameters">Paramètres de requête</h3>

| Name     | Type   | Required | Description |
| -------- | ------ | -------- | ----------- |
| track_id | string | true     | A Track ID  |

<h3 id="stream-track-responses">Réponses</h3>

| Status | Meaning                                                                    | Description           | Schema |
| ------ | -------------------------------------------------------------------------- | --------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | Success               | None   |
| 216    | Unknown                                                                    | Partial content       | None   |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request           | None   |
| 416    | [Range Not Satisfiable](https://tools.ietf.org/html/rfc7233#section-4.4)   | Content range invalid | None   |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error          | None   |

<h1 id="api-challenges">challenges</h1>

## get_undisbursed_challenges

<a id="opIdget_get_undisbursed_challenges"></a>

> Exemple de code

```shell
curl melodia_API_HOST/v1/challenges/undisbursed


```

```http
GET melodia_API_HOST/v1/challenges/undisbursed HTTP/1.1

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("melodia_API_HOST/v1/challenges/undisbursed", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'melodia_API_HOST/v1/challenges/undisbursed',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('melodia_API_HOST/v1/challenges/undisbursed', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','melodia_API_HOST/v1/challenges/undisbursed', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("melodia_API_HOST/v1/challenges/undisbursed");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "melodia_API_HOST/v1/challenges/undisbursed", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /challenges/undisbursed`

<h3 id="get_get_undisbursed_challenges-parameters">Paramètres de requête</h3>

| Name                  | Type   | Required | Description                                                       |
| --------------------- | ------ | -------- | ----------------------------------------------------------------- |
| limit                 | string | false    | The maximum number of response challenges                         |
| offset                | string | false    | The number of challenges to intially skip in the query            |
| completed_blocknumber | string | false    | Starting blocknumber to retrieve completed undisbursed challenges |

> Exemple de réponse

> 200 réponses

```json
{
  "data": [
    {
      "challenge_id": "string",
      "user_id": "string",
      "specifier": "string",
      "amount": "string",
      "completed_blocknumber": 0
    }
  ]
}
```

<h3 id="get_get_undisbursed_challenges-responses">Réponses</h3>

| Status | Meaning                                                                    | Description  | Schema                                                  |
| ------ | -------------------------------------------------------------------------- | ------------ | ------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | Success      | [undisbursed_challenges](#schemaundisbursed_challenges) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                                    |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                                    |

## get_attest

<a id="opIdget_attest"></a>

> Exemple de code

```shell
curl melodia_API_HOST/v1/challenges/string/attest?user_id=string&oracle=string&specifier=string


```

```http
GET melodia_API_HOST/v1/challenges/string/attest?user_id=string&oracle=string&specifier=string HTTP/1.1

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch(
  "melodia_API_HOST/v1/challenges/string/attest?user_id=string&oracle=string&specifier=string",
  {
    method: "GET",

    headers: headers,
  }
)
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'melodia_API_HOST/v1/challenges/string/attest',
  params: {
  'user_id' => 'string',
'oracle' => 'string',
'specifier' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('melodia_API_HOST/v1/challenges/string/attest', params={
  'user_id': 'string',  'oracle': 'string',  'specifier': 'string'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','melodia_API_HOST/v1/challenges/string/attest', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("melodia_API_HOST/v1/challenges/string/attest?user_id=string&oracle=string&specifier=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "melodia_API_HOST/v1/challenges/string/attest", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /challenges/{challenge_id}/attest`

<h3 id="get_attest-parameters">Paramètres de requête</h3>

| Name         | Type   | Required | Description |
| ------------ | ------ | -------- | ----------- |
| user_id      | string | true     | none        |
| oracle       | string | true     | none        |
| specifier    | string | true     | none        |
| challenge_id | string | true     | none        |

> Exemple de réponse

> 200 réponses

```json
{
  "data": {
    "owner_wallet": "string",
    "attestation": "string"
  }
}
```

<h3 id="get_attest-responses">Réponses</h3>

| Status | Meaning                                                 | Description | Schema                                            |
| ------ | ------------------------------------------------------- | ----------- | ------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Success     | [attestation_reponse](#schemaattestation_reponse) |

<h1 id="api-metrics">métriques</h1>

## get_trailing_app_name_metrics

<a id="opIdget_trailing_app_name_metrics"></a>

> Exemple de code

```shell
curl melodia_API_HOST/v1/metrics/app_name/trailing/string


```

```http
GET melodia_API_HOST/v1/metrics/app_name/trailing/string HTTP/1.1

```

```javascript
const headers = {
  Accept: "application/json",
};

fetch("melodia_API_HOST/v1/metrics/app_name/trailing/string", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'melodia_API_HOST/v1/metrics/app_name/trailing/string',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('melodia_API_HOST/v1/metrics/app_name/trailing/string', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','melodia_API_HOST/v1/metrics/app_name/trailing/string', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("melodia_API_HOST/v1/metrics/app_name/trailing/string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "melodia_API_HOST/v1/metrics/app_name/trailing/string", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /metrics/app_name/trailing/{time_range}`

_Récupère les métriques de nom de l'application depuis matview_

<h3 id="get_trailing_app_name_metrics-parameters">Paramètres de requête</h3>

| Name       | Type   | Required | Description |
| ---------- | ------ | -------- | ----------- |
| time_range | string | true     | none        |

> Exemple de réponse

> 200 réponses

```json
{
  "data": [
    {
      "count": 0,
      "name": "string"
    }
  ]
}
```

<h3 id="get_trailing_app_name_metrics-responses">Réponses</h3>

| Status | Meaning                                                 | Description | Schema                                                          |
| ------ | ------------------------------------------------------- | ----------- | --------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Success     | [app_name_trailing_response](#schemaapp_name_trailing_response) |

<h1 id="api-resolve">résoudre</h1>

## Résoudre

<a id="opIdResolve"></a>

> Exemple de code

```shell
curl melodia_API_HOST/v1/resolve?url=https://melodia.co/camouflybeats/hypermantra-86216


```

```http
GET melodia_API_HOST/v1/resolve?url=https://melodia.co/camouflybeats/hypermantra-86216 HTTP/1.1

```

```javascript
const headers = {
  Accept: "text/plain",
};

fetch(
  "melodia_API_HOST/v1/resolve?url=https://melodia.co/camouflybeats/hypermantra-86216",
  {
    method: "GET",

    headers: headers,
  }
)
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/plain'
}

result = RestClient.get 'melodia_API_HOST/v1/resolve',
  params: {
  'url' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'text/plain'
}

r = requests.get('melodia_API_HOST/v1/resolve', params={
  'url': 'https://melodia.co/camouflybeats/hypermantra-86216'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','melodia_API_HOST/v1/resolve', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("melodia_API_HOST/v1/resolve?url=https://melodia.co/camouflybeats/hypermantra-86216");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "melodia_API_HOST/v1/resolve", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /resolve`

_Résout et redirige l'URL de l'application melodia fournie vers l'URL de la ressource API qu'elle représente_

Ce endpoint vous permet de rechercher et d'accéder aux ressources de l'API lorsque vous ne connaissez que l'URL melodia.co. Les pistes, les listes de lecture et les utilisateurs sont pris en charge.

<h3 id="resolve-parameters">Paramètres de requête</h3>

| Name | Type   | Required | Description                                                                            |
| ---- | ------ | -------- | -------------------------------------------------------------------------------------- |
| url  | string | true     | URL to resolve. Either fully formed URL (https://melodia.co) or just the absolute path |

> Exemple de réponse

> Redirection interne

```
{"HTTP/1.1 302 Found Location":"/v1/tracks/V4W8r"}
```

<h3 id="resolve-responses">Réponses</h3>

| Status | Meaning                                                    | Description       | Schema |
| ------ | ---------------------------------------------------------- | ----------------- | ------ |
| 302    | [Found](https://tools.ietf.org/html/rfc7231#section-6.4.3) | Internal redirect | None   |

<h3 id="resolve-responseschema">Schéma de réponse</h3>

# Schémas

Voici des exemples de formats de réponse que vous pouvez vous attendre à recevoir de l'API.

<a id="schemauser_response"></a>
<a id="schema_user_response"></a>
<a id="tocSuser_response"></a>
<a id="tocsuser_response"></a>

<h2 id="tocS_user_response">user_response</h2>

```json
{
  "data": {
    "album_count": 0,
    "bio": "string",
    "cover_photo": {
      "640x": "string",
      "2000x": "string"
    },
    "followee_count": 0,
    "follower_count": 0,
    "handle": "string",
    "id": "string",
    "is_verified": true,
    "location": "string",
    "name": "string",
    "playlist_count": 0,
    "profile_picture": {
      "150x150": "string",
      "480x480": "string",
      "1000x1000": "string"
    },
    "repost_count": 0,
    "track_count": 0
  }
}
```

### Propriétés

| Name | Type                | Required | Restrictions | Description |
| ---- | ------------------- | -------- | ------------ | ----------- |
| data | [user](#schemauser) | false    | none         | none        |

<a id="schemauser"></a>
<a id="schema_user"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

<h2 id="tocS_user">utilisateur</h2>

```json
{
  "album_count": 0,
  "bio": "string",
  "cover_photo": {
    "640x": "string",
    "2000x": "string"
  },
  "followee_count": 0,
  "follower_count": 0,
  "handle": "string",
  "id": "string",
  "is_verified": true,
  "location": "string",
  "name": "string",
  "playlist_count": 0,
  "profile_picture": {
    "150x150": "string",
    "480x480": "string",
    "1000x1000": "string"
  },
  "repost_count": 0,
  "track_count": 0
}
```

### Propriétés

| Name            | Type                                      | Required | Restrictions | Description |
| --------------- | ----------------------------------------- | -------- | ------------ | ----------- |
| album_count     | integer                                   | true     | none         | none        |
| bio             | string                                    | false    | none         | none        |
| cover_photo     | [cover_photo](#schemacover_photo)         | false    | none         | none        |
| followee_count  | integer                                   | true     | none         | none        |
| follower_count  | integer                                   | true     | none         | none        |
| handle          | string                                    | true     | none         | none        |
| id              | string                                    | true     | none         | none        |
| is_verified     | boolean                                   | true     | none         | none        |
| location        | string                                    | false    | none         | none        |
| name            | string                                    | true     | none         | none        |
| playlist_count  | integer                                   | true     | none         | none        |
| profile_picture | [profile_picture](#schemaprofile_picture) | false    | none         | none        |
| repost_count    | integer                                   | true     | none         | none        |
| track_count     | integer                                   | true     | none         | none        |

<a id="schemacover_photo"></a>
<a id="schema_cover_photo"></a>
<a id="tocScover_photo"></a>
<a id="tocscover_photo"></a>

<h2 id="tocS_cover_photo">cover_photo</h2>

```json
{
  "640x": "string",
  "2000x": "string"
}
```

### Propriétés

| Name  | Type   | Required | Restrictions | Description |
| ----- | ------ | -------- | ------------ | ----------- |
| 640x  | string | false    | none         | none        |
| 2000x | string | false    | none         | none        |

<a id="schemaprofile_picture"></a>
<a id="schema_profile_picture"></a>
<a id="tocSprofile_picture"></a>
<a id="tocsprofile_picture"></a>

<h2 id="tocS_profile_picture">profile_picture</h2>

```json
{
  "150x150": "string",
  "480x480": "string",
  "1000x1000": "string"
}
```

### Propriétés

| Name      | Type   | Required | Restrictions | Description |
| --------- | ------ | -------- | ------------ | ----------- |
| 150x150   | string | false    | none         | none        |
| 480x480   | string | false    | none         | none        |
| 1000x1000 | string | false    | none         | none        |

<a id="schematracks_response"></a>
<a id="schema_tracks_response"></a>
<a id="tocStracks_response"></a>
<a id="tocstracks_response"></a>

<h2 id="tocS_tracks_response">tracks_response</h2>

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "string",
        "480x480": "string",
        "1000x1000": "string"
      },
      "description": "string",
      "genre": "string",
      "id": "string",
      "mood": "string",
      "release_date": "string",
      "remix_of": {
        "tracks": [
          {
            "parent_track_id": "string"
          }
        ]
      },
      "repost_count": 0,
      "favorite_count": 0,
      "tags": "string",
      "title": "string",
      "user": {
        "album_count": 0,
        "bio": "string",
        "cover_photo": {
          "640x": "string",
          "2000x": "string"
        },
        "followee_count": 0,
        "follower_count": 0,
        "handle": "string",
        "id": "string",
        "is_verified": true,
        "location": "string",
        "name": "string",
        "playlist_count": 0,
        "profile_picture": {
          "150x150": "string",
          "480x480": "string",
          "1000x1000": "string"
        },
        "repost_count": 0,
        "track_count": 0
      },
      "duration": 0,
      "downloadable": true,
      "play_count": 0,
      "permalink": "string"
    }
  ]
}
```

### Propriétés

| Name | Type                    | Required | Restrictions | Description |
| ---- | ----------------------- | -------- | ------------ | ----------- |
| data | [[Track](#schematrack)] | false    | none         | none        |

<a id="schematrack"></a>
<a id="schema_Track"></a>
<a id="tocStrack"></a>
<a id="tocstrack"></a>

<h2 id="tocS_Track">Pistes</h2>

```json
{
  "artwork": {
    "150x150": "string",
    "480x480": "string",
    "1000x1000": "string"
  },
  "description": "string",
  "genre": "string",
  "id": "string",
  "mood": "string",
  "release_date": "string",
  "remix_of": {
    "tracks": [
      {
        "parent_track_id": "string"
      }
    ]
  },
  "repost_count": 0,
  "favorite_count": 0,
  "tags": "string",
  "title": "string",
  "user": {
    "album_count": 0,
    "bio": "string",
    "cover_photo": {
      "640x": "string",
      "2000x": "string"
    },
    "followee_count": 0,
    "follower_count": 0,
    "handle": "string",
    "id": "string",
    "is_verified": true,
    "location": "string",
    "name": "string",
    "playlist_count": 0,
    "profile_picture": {
      "150x150": "string",
      "480x480": "string",
      "1000x1000": "string"
    },
    "repost_count": 0,
    "track_count": 0
  },
  "duration": 0,
  "downloadable": true,
  "play_count": 0,
  "permalink": "string"
}
```

### Propriétés

| Name           | Type                                  | Required | Restrictions | Description |
| -------------- | ------------------------------------- | -------- | ------------ | ----------- |
| artwork        | [track_artwork](#schematrack_artwork) | false    | none         | none        |
| description    | string                                | false    | none         | none        |
| genre          | string                                | false    | none         | none        |
| id             | string                                | true     | none         | none        |
| mood           | string                                | false    | none         | none        |
| release_date   | string                                | false    | none         | none        |
| remix_of       | [remix_parent](#schemaremix_parent)   | false    | none         | none        |
| repost_count   | integer                               | true     | none         | none        |
| favorite_count | integer                               | true     | none         | none        |
| tags           | string                                | false    | none         | none        |
| title          | string                                | true     | none         | none        |
| user           | [user](#schemauser)                   | true     | none         | none        |
| duration       | integer                               | true     | none         | none        |
| downloadable   | boolean                               | false    | none         | none        |
| play_count     | integer                               | true     | none         | none        |
| permalink      | string                                | false    | none         | none        |

<a id="schematrack_artwork"></a>
<a id="schema_track_artwork"></a>
<a id="tocStrack_artwork"></a>
<a id="tocstrack_artwork"></a>

<h2 id="tocS_track_artwork">track_artwork</h2>

```json
{
  "150x150": "string",
  "480x480": "string",
  "1000x1000": "string"
}
```

### Propriétés

| Name      | Type   | Required | Restrictions | Description |
| --------- | ------ | -------- | ------------ | ----------- |
| 150x150   | string | false    | none         | none        |
| 480x480   | string | false    | none         | none        |
| 1000x1000 | string | false    | none         | none        |

<a id="schemaremix_parent"></a>
<a id="schema_remix_parent"></a>
<a id="tocSremix_parent"></a>
<a id="tocsremix_parent"></a>

<h2 id="tocS_remix_parent">remix_parent</h2>

```json
{
  "tracks": [
    {
      "parent_track_id": "string"
    }
  ]
}
```

### Propriétés

| Name   | Type                                    | Required | Restrictions | Description |
| ------ | --------------------------------------- | -------- | ------------ | ----------- |
| tracks | [[track_element](#schematrack_element)] | false    | none         | none        |

<a id="schematrack_element"></a>
<a id="schema_track_element"></a>
<a id="tocStrack_element"></a>
<a id="tocstrack_element"></a>

<h2 id="tocS_track_element">track_element</h2>

```json
{
  "parent_track_id": "string"
}
```

### Propriétés

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| parent_track_id | string | true     | none         | none        |

<a id="schemareposts"></a>
<a id="schema_reposts"></a>
<a id="tocSreposts"></a>
<a id="tocsreposts"></a>

<h2 id="tocS_reposts">repostes</h2>

```json
{
  "data": [
    {
      "timestamp": "string",
      "item_type": {},
      "item": {}
    }
  ]
}
```

### Propriétés

| Name | Type                          | Required | Restrictions | Description |
| ---- | ----------------------------- | -------- | ------------ | ----------- |
| data | [[activity](#schemaactivity)] | false    | none         | none        |

<a id="schemaactivity"></a>
<a id="schema_activity"></a>
<a id="tocSactivity"></a>
<a id="tocsactivity"></a>

<h2 id="tocS_activity">activité</h2>

```json
{
  "timestamp": "string",
  "item_type": {},
  "item": {}
}
```

### Propriétés

| Name      | Type   | Required | Restrictions | Description |
| --------- | ------ | -------- | ------------ | ----------- |
| timestamp | string | false    | none         | none        |
| item_type | object | false    | none         | none        |
| item      | object | false    | none         | none        |

<a id="schemafavorites_response"></a>
<a id="schema_favorites_response"></a>
<a id="tocSfavorites_response"></a>
<a id="tocsfavorites_response"></a>

<h2 id="tocS_favorites_response">favorites_response</h2>

```json
{
  "data": [
    {
      "favorite_item_id": "string",
      "favorite_type": "string",
      "user_id": "string"
    }
  ]
}
```

### Propriétés

| Name | Type                          | Required | Restrictions | Description |
| ---- | ----------------------------- | -------- | ------------ | ----------- |
| data | [[favorite](#schemafavorite)] | false    | none         | none        |

<a id="schemafavorite"></a>
<a id="schema_favorite"></a>
<a id="tocSfavorite"></a>
<a id="tocsfavorite"></a>

<h2 id="tocS_favorite">favoris</h2>

```json
{
  "favorite_item_id": "string",
  "favorite_type": "string",
  "user_id": "string"
}
```

### Propriétés

| Name             | Type   | Required | Restrictions | Description |
| ---------------- | ------ | -------- | ------------ | ----------- |
| favorite_item_id | string | true     | none         | none        |
| favorite_type    | string | true     | none         | none        |
| user_id          | string | true     | none         | none        |

<a id="schematags_response"></a>
<a id="schema_tags_response"></a>
<a id="tocStags_response"></a>
<a id="tocstags_response"></a>

<h2 id="tocS_tags_response">tags_response</h2>

```json
{
  "data": ["string"]
}
```

### Propriétés

| Name | Type     | Required | Restrictions | Description |
| ---- | -------- | -------- | ------------ | ----------- |
| data | [string] | false    | none         | none        |

<a id="schemauser_search"></a>
<a id="schema_user_search"></a>
<a id="tocSuser_search"></a>
<a id="tocsuser_search"></a>

<h2 id="tocS_user_search">user_search</h2>

```json
{
  "data": [
    {
      "album_count": 0,
      "bio": "string",
      "cover_photo": {
        "640x": "string",
        "2000x": "string"
      },
      "followee_count": 0,
      "follower_count": 0,
      "handle": "string",
      "id": "string",
      "is_verified": true,
      "location": "string",
      "name": "string",
      "playlist_count": 0,
      "profile_picture": {
        "150x150": "string",
        "480x480": "string",
        "1000x1000": "string"
      },
      "repost_count": 0,
      "track_count": 0
    }
  ]
}
```

### Propriétés

| Name | Type                  | Required | Restrictions | Description |
| ---- | --------------------- | -------- | ------------ | ----------- |
| data | [[user](#schemauser)] | false    | none         | none        |

<a id="schemaassociated_wallets_response"></a>
<a id="schema_associated_wallets_response"></a>
<a id="tocSassociated_wallets_response"></a>
<a id="tocsassociated_wallets_response"></a>

<h2 id="tocS_associated_wallets_response">associated_wallets_response</h2>

```json
{
  "data": {
    "wallets": ["string"],
    "sol_wallets": ["string"]
  }
}
```

### Propriétés

| Name | Type                                            | Required | Restrictions | Description |
| ---- | ----------------------------------------------- | -------- | ------------ | ----------- |
| data | [associated_wallets](#schemaassociated_wallets) | false    | none         | none        |

<a id="schemaassociated_wallets"></a>
<a id="schema_associated_wallets"></a>
<a id="tocSassociated_wallets"></a>
<a id="tocsassociated_wallets"></a>

<h2 id="tocS_associated_wallets">associated_wallets</h2>

```json
{
  "wallets": ["string"],
  "sol_wallets": ["string"]
}
```

### Propriétés

| Name        | Type     | Required | Restrictions | Description |
| ----------- | -------- | -------- | ------------ | ----------- |
| wallets     | [string] | true     | none         | none        |
| sol_wallets | [string] | true     | none         | none        |

<a id="schemauser_associated_wallet_response"></a>
<a id="schema_user_associated_wallet_response"></a>
<a id="tocSuser_associated_wallet_response"></a>
<a id="tocsuser_associated_wallet_response"></a>

<h2 id="tocS_user_associated_wallet_response">user_associated_wallet_response</h2>

```json
{
  "data": {
    "user_id": "string"
  }
}
```

### Propriétés

| Name | Type                                      | Required | Restrictions | Description |
| ---- | ----------------------------------------- | -------- | ------------ | ----------- |
| data | [encoded_user_id](#schemaencoded_user_id) | false    | none         | none        |

<a id="schemaencoded_user_id"></a>
<a id="schema_encoded_user_id"></a>
<a id="tocSencoded_user_id"></a>
<a id="tocsencoded_user_id"></a>

<h2 id="tocS_encoded_user_id">encoded_user_id</h2>

```json
{
  "user_id": "string"
}
```

### Propriétés

| Name    | Type   | Required | Restrictions | Description |
| ------- | ------ | -------- | ------------ | ----------- |
| user_id | string | false    | none         | none        |

<a id="schemaget_challenges"></a>
<a id="schema_get_challenges"></a>
<a id="tocSget_challenges"></a>
<a id="tocsget_challenges"></a>

<h2 id="tocS_get_challenges">get_challenges</h2>

```json
{
  "data": [
    {
      "challenge_id": "string",
      "user_id": "string",
      "specifier": "string",
      "is_complete": true,
      "is_active": true,
      "is_disbursed": true,
      "current_step_count": 0,
      "max_steps": 0,
      "challenge_type": "string",
      "metadata": {}
    }
  ]
}
```

### Propriétés

| Name | Type                                              | Required | Restrictions | Description |
| ---- | ------------------------------------------------- | -------- | ------------ | ----------- |
| data | [[challenge_response](#schemachallenge_response)] | false    | none         | none        |

<a id="schemachallenge_response"></a>
<a id="schema_challenge_response"></a>
<a id="tocSchallenge_response"></a>
<a id="tocschallenge_response"></a>

<h2 id="tocS_challenge_response">challenge_response</h2>

```json
{
  "challenge_id": "string",
  "user_id": "string",
  "specifier": "string",
  "is_complete": true,
  "is_active": true,
  "is_disbursed": true,
  "current_step_count": 0,
  "max_steps": 0,
  "challenge_type": "string",
  "metadata": {}
}
```

### Propriétés

| Name               | Type    | Required | Restrictions | Description |
| ------------------ | ------- | -------- | ------------ | ----------- |
| challenge_id       | string  | true     | none         | none        |
| user_id            | string  | true     | none         | none        |
| specifier          | string  | false    | none         | none        |
| is_complete        | boolean | true     | none         | none        |
| is_active          | boolean | true     | none         | none        |
| is_disbursed       | boolean | true     | none         | none        |
| current_step_count | integer | false    | none         | none        |
| max_steps          | integer | false    | none         | none        |
| challenge_type     | string  | true     | none         | none        |
| metadata           | object  | true     | none         | none        |

<a id="schemaplaylist_response"></a>
<a id="schema_playlist_response"></a>
<a id="tocSplaylist_response"></a>
<a id="tocsplaylist_response"></a>

<h2 id="tocS_playlist_response">playlist_response</h2>

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "string",
        "480x480": "string",
        "1000x1000": "string"
      },
      "description": "string",
      "id": "string",
      "is_album": true,
      "playlist_name": "string",
      "repost_count": 0,
      "favorite_count": 0,
      "total_play_count": 0,
      "user": {
        "album_count": 0,
        "bio": "string",
        "cover_photo": {
          "640x": "string",
          "2000x": "string"
        },
        "followee_count": 0,
        "follower_count": 0,
        "handle": "string",
        "id": "string",
        "is_verified": true,
        "location": "string",
        "name": "string",
        "playlist_count": 0,
        "profile_picture": {
          "150x150": "string",
          "480x480": "string",
          "1000x1000": "string"
        },
        "repost_count": 0,
        "track_count": 0
      }
    }
  ]
}
```

### Propriétés

| Name | Type                          | Required | Restrictions | Description |
| ---- | ----------------------------- | -------- | ------------ | ----------- |
| data | [[playlist](#schemaplaylist)] | false    | none         | none        |

<a id="schemaplaylist"></a>
<a id="schema_playlist"></a>
<a id="tocSplaylist"></a>
<a id="tocsplaylist"></a>

<h2 id="tocS_playlist">playlists</h2>

```json
{
  "artwork": {
    "150x150": "string",
    "480x480": "string",
    "1000x1000": "string"
  },
  "description": "string",
  "id": "string",
  "is_album": true,
  "playlist_name": "string",
  "repost_count": 0,
  "favorite_count": 0,
  "total_play_count": 0,
  "user": {
    "album_count": 0,
    "bio": "string",
    "cover_photo": {
      "640x": "string",
      "2000x": "string"
    },
    "followee_count": 0,
    "follower_count": 0,
    "handle": "string",
    "id": "string",
    "is_verified": true,
    "location": "string",
    "name": "string",
    "playlist_count": 0,
    "profile_picture": {
      "150x150": "string",
      "480x480": "string",
      "1000x1000": "string"
    },
    "repost_count": 0,
    "track_count": 0
  }
}
```

### Propriétés

| Name             | Type                                        | Required | Restrictions | Description |
| ---------------- | ------------------------------------------- | -------- | ------------ | ----------- |
| artwork          | [playlist_artwork](#schemaplaylist_artwork) | false    | none         | none        |
| description      | string                                      | false    | none         | none        |
| id               | string                                      | true     | none         | none        |
| is_album         | boolean                                     | true     | none         | none        |
| playlist_name    | string                                      | true     | none         | none        |
| repost_count     | integer                                     | true     | none         | none        |
| favorite_count   | integer                                     | true     | none         | none        |
| total_play_count | integer                                     | true     | none         | none        |
| user             | [user](#schemauser)                         | true     | none         | none        |

<a id="schemaplaylist_artwork"></a>
<a id="schema_playlist_artwork"></a>
<a id="tocSplaylist_artwork"></a>
<a id="tocsplaylist_artwork"></a>

<h2 id="tocS_playlist_artwork">playlist_artwork</h2>

```json
{
  "150x150": "string",
  "480x480": "string",
  "1000x1000": "string"
}
```

### Propriétés

| Name      | Type   | Required | Restrictions | Description |
| --------- | ------ | -------- | ------------ | ----------- |
| 150x150   | string | false    | none         | none        |
| 480x480   | string | false    | none         | none        |
| 1000x1000 | string | false    | none         | none        |

<a id="schemaplaylist_tracks_response"></a>
<a id="schema_playlist_tracks_response"></a>
<a id="tocSplaylist_tracks_response"></a>
<a id="tocsplaylist_tracks_response"></a>

<h2 id="tocS_playlist_tracks_response">playlist_tracks_response</h2>

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "string",
        "480x480": "string",
        "1000x1000": "string"
      },
      "description": "string",
      "genre": "string",
      "id": "string",
      "mood": "string",
      "release_date": "string",
      "remix_of": {
        "tracks": [
          {
            "parent_track_id": "string"
          }
        ]
      },
      "repost_count": 0,
      "favorite_count": 0,
      "tags": "string",
      "title": "string",
      "user": {
        "album_count": 0,
        "bio": "string",
        "cover_photo": {
          "640x": "string",
          "2000x": "string"
        },
        "followee_count": 0,
        "follower_count": 0,
        "handle": "string",
        "id": "string",
        "is_verified": true,
        "location": "string",
        "name": "string",
        "playlist_count": 0,
        "profile_picture": {
          "150x150": "string",
          "480x480": "string",
          "1000x1000": "string"
        },
        "repost_count": 0,
        "track_count": 0
      },
      "duration": 0,
      "downloadable": true,
      "play_count": 0,
      "permalink": "string"
    }
  ]
}
```

### Propriétés

| Name | Type                    | Required | Restrictions | Description |
| ---- | ----------------------- | -------- | ------------ | ----------- |
| data | [[Track](#schematrack)] | false    | none         | none        |

<a id="schemaplaylist_search_result"></a>
<a id="schema_playlist_search_result"></a>
<a id="tocSplaylist_search_result"></a>
<a id="tocsplaylist_search_result"></a>

<h2 id="tocS_playlist_search_result">playlist_search_result</h2>

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "string",
        "480x480": "string",
        "1000x1000": "string"
      },
      "description": "string",
      "id": "string",
      "is_album": true,
      "playlist_name": "string",
      "repost_count": 0,
      "favorite_count": 0,
      "total_play_count": 0,
      "user": {
        "album_count": 0,
        "bio": "string",
        "cover_photo": {
          "640x": "string",
          "2000x": "string"
        },
        "followee_count": 0,
        "follower_count": 0,
        "handle": "string",
        "id": "string",
        "is_verified": true,
        "location": "string",
        "name": "string",
        "playlist_count": 0,
        "profile_picture": {
          "150x150": "string",
          "480x480": "string",
          "1000x1000": "string"
        },
        "repost_count": 0,
        "track_count": 0
      }
    }
  ]
}
```

### Propriétés

| Name | Type                          | Required | Restrictions | Description |
| ---- | ----------------------------- | -------- | ------------ | ----------- |
| data | [[playlist](#schemaplaylist)] | false    | none         | none        |

<a id="schematrending_playlists_response"></a>
<a id="schema_trending_playlists_response"></a>
<a id="tocStrending_playlists_response"></a>
<a id="tocstrending_playlists_response"></a>

<h2 id="tocS_trending_playlists_response">trending_playlists_response</h2>

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "string",
        "480x480": "string",
        "1000x1000": "string"
      },
      "description": "string",
      "id": "string",
      "is_album": true,
      "playlist_name": "string",
      "repost_count": 0,
      "favorite_count": 0,
      "total_play_count": 0,
      "user": {
        "album_count": 0,
        "bio": "string",
        "cover_photo": {
          "640x": "string",
          "2000x": "string"
        },
        "followee_count": 0,
        "follower_count": 0,
        "handle": "string",
        "id": "string",
        "is_verified": true,
        "location": "string",
        "name": "string",
        "playlist_count": 0,
        "profile_picture": {
          "150x150": "string",
          "480x480": "string",
          "1000x1000": "string"
        },
        "repost_count": 0,
        "track_count": 0
      }
    }
  ]
}
```

### Propriétés

| Name | Type                          | Required | Restrictions | Description |
| ---- | ----------------------------- | -------- | ------------ | ----------- |
| data | [[playlist](#schemaplaylist)] | false    | none         | none        |

<a id="schematrack_response"></a>
<a id="schema_track_response"></a>
<a id="tocStrack_response"></a>
<a id="tocstrack_response"></a>

<h2 id="tocS_track_response">track_response</h2>

```json
{
  "data": {
    "artwork": {
      "150x150": "string",
      "480x480": "string",
      "1000x1000": "string"
    },
    "description": "string",
    "genre": "string",
    "id": "string",
    "mood": "string",
    "release_date": "string",
    "remix_of": {
      "tracks": [
        {
          "parent_track_id": "string"
        }
      ]
    },
    "repost_count": 0,
    "favorite_count": 0,
    "tags": "string",
    "title": "string",
    "user": {
      "album_count": 0,
      "bio": "string",
      "cover_photo": {
        "640x": "string",
        "2000x": "string"
      },
      "followee_count": 0,
      "follower_count": 0,
      "handle": "string",
      "id": "string",
      "is_verified": true,
      "location": "string",
      "name": "string",
      "playlist_count": 0,
      "profile_picture": {
        "150x150": "string",
        "480x480": "string",
        "1000x1000": "string"
      },
      "repost_count": 0,
      "track_count": 0
    },
    "duration": 0,
    "downloadable": true,
    "play_count": 0,
    "permalink": "string"
  }
}
```

### Propriétés

| Name | Type                  | Required | Restrictions | Description |
| ---- | --------------------- | -------- | ------------ | ----------- |
| data | [Track](#schematrack) | false    | none         | none        |

<a id="schematrack_search"></a>
<a id="schema_track_search"></a>
<a id="tocStrack_search"></a>
<a id="tocstrack_search"></a>

<h2 id="tocS_track_search">track_search</h2>

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "string",
        "480x480": "string",
        "1000x1000": "string"
      },
      "description": "string",
      "genre": "string",
      "id": "string",
      "mood": "string",
      "release_date": "string",
      "remix_of": {
        "tracks": [
          {
            "parent_track_id": "string"
          }
        ]
      },
      "repost_count": 0,
      "favorite_count": 0,
      "tags": "string",
      "title": "string",
      "user": {
        "album_count": 0,
        "bio": "string",
        "cover_photo": {
          "640x": "string",
          "2000x": "string"
        },
        "followee_count": 0,
        "follower_count": 0,
        "handle": "string",
        "id": "string",
        "is_verified": true,
        "location": "string",
        "name": "string",
        "playlist_count": 0,
        "profile_picture": {
          "150x150": "string",
          "480x480": "string",
          "1000x1000": "string"
        },
        "repost_count": 0,
        "track_count": 0
      },
      "duration": 0,
      "downloadable": true,
      "play_count": 0,
      "permalink": "string"
    }
  ]
}
```

### Propriétés

| Name | Type                    | Required | Restrictions | Description |
| ---- | ----------------------- | -------- | ------------ | ----------- |
| data | [[Track](#schematrack)] | false    | none         | none        |

<a id="schemaattestation_reponse"></a>
<a id="schema_attestation_reponse"></a>
<a id="tocSattestation_reponse"></a>
<a id="tocsattestation_reponse"></a>

<h2 id="tocS_attestation_reponse">attestation_reponse</h2>

```json
{
  "data": {
    "owner_wallet": "string",
    "attestation": "string"
  }
}
```

### Propriétés

| Name | Type                              | Required | Restrictions | Description |
| ---- | --------------------------------- | -------- | ------------ | ----------- |
| data | [attestation](#schemaattestation) | false    | none         | none        |

<a id="schemaattestation"></a>
<a id="schema_attestation"></a>
<a id="tocSattestation"></a>
<a id="tocsattestation"></a>

<h2 id="tocS_attestation">attestation</h2>

```json
{
  "owner_wallet": "string",
  "attestation": "string"
}
```

### Propriétés

| Name         | Type   | Required | Restrictions | Description |
| ------------ | ------ | -------- | ------------ | ----------- |
| owner_wallet | string | true     | none         | none        |
| attestation  | string | true     | none         | none        |

<a id="schemaundisbursed_challenges"></a>
<a id="schema_undisbursed_challenges"></a>
<a id="tocSundisbursed_challenges"></a>
<a id="tocsundisbursed_challenges"></a>

<h2 id="tocS_undisbursed_challenges">undisbursed_challenges</h2>

```json
{
  "data": [
    {
      "challenge_id": "string",
      "user_id": "string",
      "specifier": "string",
      "amount": "string",
      "completed_blocknumber": 0
    }
  ]
}
```

### Propriétés

| Name | Type                                                    | Required | Restrictions | Description |
| ---- | ------------------------------------------------------- | -------- | ------------ | ----------- |
| data | [[undisbursed_challenge](#schemaundisbursed_challenge)] | false    | none         | none        |

<a id="schemaundisbursed_challenge"></a>
<a id="schema_undisbursed_challenge"></a>
<a id="tocSundisbursed_challenge"></a>
<a id="tocsundisbursed_challenge"></a>

<h2 id="tocS_undisbursed_challenge">undisbursed_challenge</h2>

```json
{
  "challenge_id": "string",
  "user_id": "string",
  "specifier": "string",
  "amount": "string",
  "completed_blocknumber": 0
}
```

### Propriétés

| Name                  | Type    | Required | Restrictions | Description |
| --------------------- | ------- | -------- | ------------ | ----------- |
| challenge_id          | string  | true     | none         | none        |
| user_id               | string  | true     | none         | none        |
| specifier             | string  | true     | none         | none        |
| amount                | string  | true     | none         | none        |
| completed_blocknumber | integer | true     | none         | none        |

<a id="schemaapp_name_trailing_response"></a>
<a id="schema_app_name_trailing_response"></a>
<a id="tocSapp_name_trailing_response"></a>
<a id="tocsapp_name_trailing_response"></a>

<h2 id="tocS_app_name_trailing_response">app_name_trailing_response</h2>

```json
{
  "data": [
    {
      "count": 0,
      "name": "string"
    }
  ]
}
```

### Propriétés

| Name | Type                                                          | Required | Restrictions | Description |
| ---- | ------------------------------------------------------------- | -------- | ------------ | ----------- |
| data | [[app_name_trailing_metric](#schemaapp_name_trailing_metric)] | false    | none         | none        |

<a id="schemaapp_name_trailing_metric"></a>
<a id="schema_app_name_trailing_metric"></a>
<a id="tocSapp_name_trailing_metric"></a>
<a id="tocsapp_name_trailing_metric"></a>

<h2 id="tocS_app_name_trailing_metric">app_name_trailing_metric</h2>

```json
{
  "count": 0,
  "name": "string"
}
```

### Propriétés

| Name  | Type    | Required | Restrictions | Description |
| ----- | ------- | -------- | ------------ | ----------- |
| count | integer | false    | none         | none        |
| name  | string  | false    | none         | none        |
