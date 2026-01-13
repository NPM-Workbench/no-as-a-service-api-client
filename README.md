![no-hero-banner-illustration](https://github.com/user-attachments/assets/123832c1-475e-4670-ab10-7002945da2c4)
![npm](https://img.shields.io/npm/v/no-as-a-service-api-client)
![downloads](https://img.shields.io/npm/dw/no-as-a-service-api-client)
![license](https://img.shields.io/npm/l/no-as-a-service-api-client)
# No As A Service API Client
A tiny JavaScript client for the “No As A Service” API (https://naas.isalman.dev/no) that delivers random rejection reasons with a consistent, typed response format.

### 📦 Installation
```console
npm install no-as-a-service-api-client
```

### 📜 Features
1. Zero configurations
2. Native `fetch` (no dependencies)
3. Fully typed responses
4. Consistent API success/error wrapper
5. Works in modern browsers and Node.js (ES6 Imports)

### 🔤 Example Usage
```javascript
import { getANo } from "no-as-a-service-api-client";

async function run() {
  const response = await getANo();
  if (response.code === "api-ok") {
    console.log(response.payload?.reason);
  } else {
    console.error(response.message);
  }
}

run();

// Sample Success Response
/*
{
  "code": "api-ok",
  "message": "No errors encountered, check payload",
  "payload": {
    "reason": "I didn’t receive the memo that I was supposed to care."
  }
}
*/

// Sample Error Response
/*
{
  "code": "api-fail",
  "message": "Something went wrong",
  "payload": null
}
*/
```

### 📘 Contributing
Contributions, suggestions, and improvements are welcome.
Feel free to open issues or pull requests.

### ❤️ Support
Like this project? Support it with a github star, it would mean a lot to me! Cheers and Happy Coding.
