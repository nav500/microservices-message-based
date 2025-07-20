# NestJS Microservices Demo Using Request/Response Message Based Pattern(API Gateway + Orders & Products)

This is a boilerplate/demo microservice project built using **NestJS**. It demonstrates a simple **request-response message-based** communication pattern between an API Gateway and two microservices: `orders` and `products`.

![Microservices architecture image](https://iili.io/FwEyhF4.png "Optional Tooltip")


---

## 📁 Project Structure

```
nestjs-microservices-demo/
│
├── api-gateway/       # HTTP server, handles client requests
│   ├── src/
│   ├── package.json
│
├── orders/            # Orders microservice (TCP transport)
│   ├── src/
│   ├── package.json
│
├── products/          # Products microservice (TCP transport)
│   ├── src/
│   ├── package.json

```

---

## ⚙️ Tech Stack

- **NestJS**
- **TCP Transport** (for microservice-to-microservice communication)
- **HTTP** (for client-to-API gateway communication)


---

## 📌 Features

- API Gateway listens on HTTP and delegates to microservices over TCP
- Microservices (`orders` & `products`) expose handlers for commands
- Demonstrates separation of concerns and scalable architecture

---

## 🚀 How to Run Locally

Each service has its own `package.json`. Run them in **separate terminals**:

### 1. Start API Gateway (HTTP + TCP client)

```bash
cd api-gateway
npm install
npm run start:dev
```

Listens on: `http://localhost:3000`

### 2. Start Products Microservice

```bash
cd products
npm install
npm run start:dev
```

Listens via TCP on: `localhost:3001`

### 3. Start Orders Microservice

```bash
cd orders
npm install
npm run start
```

Listens via TCP on: `localhost:3002`

---

## 🔄 Request-Response Flow

* Clients send HTTP requests to `api-gateway` (e.g. `/products`)
* The gateway forwards the request to the appropriate microservice via TCP
* The microservice processes the request and responds back through the same channel
* The gateway returns the response to the client over HTTP

---

## 📦 Sample Endpoints (via API Gateway)

* `GET /products` → fetch products from Products Service
* `GET /orders` → fetch orders from Orders Service

