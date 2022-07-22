---
sidebar_label: melodia SDK
sidebar_position: 3
---

# melodia JavaScript SDK

## Overview

The melodia SDK allows you to easily build upon and interact with the melodia network. Currently, we only have a Typescript/Javascript SDK.

We're actively working on building out more SDK features and functionality - stay tuned!

## Installation

- [In the browser/Vanilla JS](#in-the-browservanilla-js)
- [In Node.js](#in-nodejs)

### In the browser/Vanilla JS

#### 0. Include Web3.js

```html
<script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
```

#### 1. Include the SDK script tag

```html
<!-- Put this AFTER web3.js -->
<script src="https://cdn.jsdelivr.net/npm/@melodia/sdk@latest/dist/sdk.min.js"></script>
```

The melodia SDK will then be assigned to `window.melodiaSdk`.

#### 2. Initialize the SDK

```js
const melodiaSdk = window.melodiaSdk({ appName: "Name of your app goes here" });
```

#### 3. Make your first API call using the SDK!

```js
const tracks = await melodiaSdk.discoveryNode.getTracks();
```

#### Full example

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@melodia/sdk@latest/dist/sdk.min.js"></script>
    <script>
      const melodiaSdk = window.melodiaSdk({
        appName: "My Example App",
      });
      const tracks = await melodiaSdk.discoveryNode.getTracks();
      console.log(tracks, "Tracks fetched!");
    </script>
  </head>
  <body>
    <h1>Example content</h1>
  </body>
</html>
```

### In Node.js

#### 0. Install the SDK package using your preferred JS package manager

In your terminal, run:

```bash
npm install @melodia/sdk
```

#### 1. [Skip if not in browser environment] Install web3.js

In your terminal, run:

```bash
npm install web3
```

#### 2. [Skip if not in browser environment] Assign web3.js to `window.Web3`

```js
import Web3 from "web3";
window.Web3 = Web3;
```

#### 3. Initialize the SDK

```js
import { sdk } from "@melodia/sdk";

const melodiaSdk = sdk({ appName: "Name of your app goes here" });
```

#### 4. Make your first API call using the SDK!

```js
const tracks = melodiaSdk.discoveryNode.getTracks();
console.log(tracks, "Tracks fetched!");
```

#### Full example

```js title="app.js"
import Web3 from "web3";
import { sdk } from "@melodia/sdk";

window.Web3 = Web3;
const melodiaSdk = sdk({ appName: "My Example App" });
const tracks = melodiaSdk.discoveryNode.getTracks();
console.log(tracks, "Tracks fetched!");
```
