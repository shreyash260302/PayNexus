# **PayNexus**  

A simple eCommerce payment integration system using **Next.js** (frontend) and **NestJS + Prisma** (backend) with **Razorpay** for payments.  

## **Tech Stack**  
- **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS  
- **Backend:** NestJS, Prisma, PostgreSQL  
- **Payments:** Razorpay  
- **Database:** PostgreSQL  
- **Package Manager:** Yarn  

---

## **Frontend Setup**  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/shreyash260302/PayNexus.git
cd PayNexus/frontend
```

### **2️⃣ Install Dependencies**  
```sh
yarn install
```

### **3️⃣ Create `.env` File**  
Inside the `frontend/` folder, create a `.env.local` file and add:  
```
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
NEXT_PUBLIC_BACKEND_URL=http://localhost:4000
```

### **4️⃣ Start the Development Server**  
```sh
yarn dev
```
Your frontend will run at [http://localhost:3000](http://localhost:3000).  

---

## **Backend Setup**  

### **1️⃣ Navigate to Backend**  
```sh
cd ../backend
```

### **2️⃣ Install Dependencies**  
```sh
yarn install
```

### **3️⃣ Create `.env` File**  
Inside the `backend/` folder, create a `.env` file and add:  
```
DATABASE_URL=postgresql://user:password@localhost:5432/paynexus_db
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

### **4️⃣ Run Prisma Migrations**  
```sh
npx prisma migrate dev --name init
npx prisma generate
```

### **5️⃣ Start the Backend Server**  
```sh
yarn start:dev
```
Your backend will run at [http://localhost:4000](http://localhost:4000).  

---

## **API Endpoints**  

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/order/create` | Create a Razorpay order |
| `POST` | `/order/verify` | Verify Razorpay payment |

---

## **Prisma Commands**  

- **Run Migrations** → `npx prisma migrate dev --name init`  
- **Generate Prisma Client** → `npx prisma generate`  
- **Reset DB (if needed)** → `npx prisma migrate reset`  

---

## **Contributing**  
1. Fork the repository  
2. Create a new branch (`git checkout -b feature-branch`)  
3. Commit your changes (`git commit -m "Add new feature"`)  
4. Push to the branch (`git push origin feature-branch`)  
5. Open a Pull Request  

---

## **License**  
This project is open-source and available under the MIT License.  
