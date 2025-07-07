
# 🛍️ Angular Products Frontend

This is the **Angular frontend** application for the Products management system, built to interface with the Spring Boot backend API.

📌 GitHub Link: [angular-products-ex-frontend](https://github.com/2BarrCoder/angular-products-ex-frontend)  
🔗 Backend Repo: [angular-products-ex-backend](https://github.com/2BarrCoder/angular-products-ex-backend)

---

## 🌟 Features

- Angular 15+ SPA (Single Page Application)
- Product listing and management
- Integrated service layer for API communication
- Modular structure with routing
- Styled with CSS Bootstrap

---

## 📁 Project Structure

```
angular-products-ex-frontend/
├── src/
│   ├── app/
│   │   ├── home/                # Home Component
│   │   ├── products/            # Product list/view logic
│   │   ├── services/            # HTTP service to communicate with backend
│   │   ├── app.routes.ts        # Application routes
│   │   └── app.config.ts        # Optional config settings
│   ├── assets/
│   ├── index.html               # Main HTML entry
│   └── styles.css               # Global styles
├── package.json
├── angular.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/2BarrCoder/angular-products-ex-frontend.git
cd angular-products-ex-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
ng serve
```

Visit: [http://localhost:4200](http://localhost:4200)

---

## 🔌 API Integration

Make sure the backend Spring Boot server is running at:

```
http://localhost:8089/products
```

You can configure the API base URL in the `product.service.ts` file:

```ts
private baseUrl = 'http://localhost:8089/products';
```

---
## 🧪 Testing

---

![image](https://github.com/user-attachments/assets/5d4c39f6-e330-496b-b4f7-b59459aee814)
![image](https://github.com/user-attachments/assets/d7ba8f29-0e49-4b9c-a35f-ae37528c818c)
![image](https://github.com/user-attachments/assets/41026fa4-fd22-4bfd-b4ff-3245560e878c)
![image](https://github.com/user-attachments/assets/b09c806b-255e-44bc-a9bc-18499363e630)

---


> Made with 💙 by [2BarrCoder](https://github.com/2BarrCoder)
