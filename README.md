MyDuka Frontend
A modern, responsive frontend for the MyDuka inventory management system, built with React, Vite, Tailwind CSS, and React Router. It integrates with a Flask API to manage user authentication, stores, products, inventory, transactions, supply requests, and reports for Merchants, Admins, and Clerks.
Features

User Authentication: Register and login for Merchants, Admins, and Clerks with JWT-based authentication (access and refresh tokens).
Store Management: Create, view, edit, and delete stores (Merchants only; Admins can view/edit).
Product Management: Add, view, update, and delete products (Merchants and Admins).
Inventory Tracking: Record and update inventory levels, including stock and spoilt items (Clerks, Admins, Merchants).
Transactions: Record sales transactions (Clerks) and view transaction history (all roles).
Supply Requests: Create (Clerks), approve/decline (Admins), and delete (Merchants) supply requests.
Reports: Generate sales, stock, spoilt items, and payment status reports (Merchants and Admins).
Admin Invitations: Merchants can invite Admins via email with tokenized registration links.
Responsive Design: Mobile-first UI with Tailwind CSS.
Accessibility: WCAG-compliant with ARIA labels and semantic HTML.
Error Handling: Handles API errors with token refresh on 401 Unauthorized responses.
Protected Routes: Restricts access based on user roles (Merchant, Admin, Clerk).
Unit Tests: Tests for login functionality using Jest and React Testing Library.

🛠 Technologies Used

JavaScript (ES Modules)
React 18
Vite (Build tool and development server)
Tailwind CSS (via CDN for styling)
React Router (Client-side routing)
Jest and React Testing Library (Unit testing)
Postman (API testing)

📁 Project Structure
myduka-frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Login.jsx
│   │   ├── RegisterMerchant.jsx
│   │   ├── RegisterAdmin.jsx
│   │   ├── RegisterClerk.jsx
│   │   ├── Profile.jsx
│   │   ├── Stores.jsx
│   │   ├── StoreForm.jsx
│   │   ├── Products.jsx
│   │   ├── ProductForm.jsx
│   │   ├── Inventory.jsx
│   │   ├── InventoryForm.jsx
│   │   ├── Transactions.jsx
│   │   ├── TransactionForm.jsx
│   │   ├── SupplyRequests.jsx
│   │   ├── SupplyRequestForm.jsx
│   │   ├── Reports.jsx
│   │   ├── InviteAdmin.jsx
│   │   ├── Login.test.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
├── index.html
├── package.json
├── vite.config.js
├── .env
├── README.md

Setup Instructions

Clone the repository:
git clone https://github.com/your-username/myduka-frontend.git
cd myduka-frontend


Install dependencies:
npm install


Set environment variables:Create a .env file in the myduka-frontend/ directory and add:
VITE_API_URL=http://localhost:5000

This points to the Flask backend API. Update the URL if your backend runs on a different port or host.

Run the development server:
npm run dev

The app will be available at http://localhost:5173 (or the port shown by Vite).

Ensure the backend is running:Follow the backend setup instructions in myduka-backend/README.md to start the Flask API at http://localhost:5000. Key steps:

Set up a virtual environment: python -m venv venv && source venv/bin/activate
Install dependencies: pip install -r requirements.txt
Set environment variables in myduka-backend/.env:FLASK_APP=main.py
DATABASE_URL=postgresql://user:password@localhost/myduka_db
JWT_SECRET_KEY=your-jwt-secret-key-here
SECRET_KEY=your-secret-key-change-this-in-production
MAIL_SERVER=smtp.gmail.com
MAIL_PORT=587
MAIL_USE_TLS=True
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-specific-password
MAIL_DEFAULT_SENDER=your-email@gmail.com
CORS_ORIGINS=http://localhost:5173


Run migrations: flask db init && flask db migrate && flask db upgrade
Start the server: flask run


Run tests (optional):
npm test

This runs unit tests (e.g., Login.test.jsx) using Jest and React Testing Library.


Authentication Flow

Register:
Merchants: Navigate to /register-merchant to create a superuser (one-time setup).
Admins: Use /register-admin with a tokenized invitation link from Merchants.
Clerks: Registered by Admins via /register-clerk.
Stores JWT access_token, refresh_token, user_type, and user_id in localStorage.


Login: Navigate to /login to authenticate with email and password, receiving JWT tokens and user_type.
Token Refresh: Automatically refreshes access token on 401 errors using /auth/refresh.
Protected Routes: Restricts access based on user_type:
Merchants: All routes, including /invite-admin and /store management.
Admins: /store, /products, /inventory, /reports, /register-clerk.
Clerks: /inventory, /transactions, /supply-requests.


Logout: Clears JWT tokens and redirects to /login via /auth/logout.

📬 Frontend Routes



Path
Auth Required?
Description



/
No
Redirects to /login


/login
No
Login to authenticate


/register-merchant
No
Register a new Merchant (superuser)


/register-admin
No
Register Admin with invitation token


/register-clerk
Yes (Admin)
Register a new Clerk


/dashboard
Yes
Dashboard with role-based navigation


/profile
Yes
View and update user profile


/stores
Yes (Merchant/Admin)
View, create, edit, delete stores


/products
Yes (Merchant/Admin)
View, create, edit, delete products


/inventory
Yes
View, create, update inventory records


/transactions
Yes
View, create transactions


/supply-requests
Yes (Merchant/Clerk)
View, create, approve, delete supply requests


/reports
Yes (Merchant/Admin)
View sales, stock, spoilt items, payment reports


/invite-admin
Yes (Merchant)
Send Admin invitation email


🖼 UI Components

Navbar: Displays navigation links based on user_type (e.g., Stores, Products, Logout for authenticated users; Login, Register Merchant for guests).
Login: Form for user authentication with email and password.
RegisterMerchant: Form for Merchant registration (username, email, password).
RegisterAdmin: Form for Admin registration using an invitation token.
RegisterClerk: Form for Admins to register Clerks.
Profile: Displays and allows updating of user details (username, email).
Stores: Lists stores with options to create, edit, or delete (Merchant/Admin).
StoreForm: Form for creating or updating stores.
Products: Lists products with options to create, edit, or delete (Merchant/Admin).
ProductForm: Form for creating or updating products.
Inventory: Lists inventory records with options to create or update.
InventoryForm: Form for creating or updating inventory records.
Transactions: Lists transactions with options to create (Clerks).
TransactionForm: Form for recording transactions.
SupplyRequests: Lists supply requests with options to create (Clerks), approve (Admins), or delete (Merchants).
SupplyRequestForm: Form for creating or updating supply requests.
Reports: Displays sales, stock, spoilt items, and payment status reports (Merchant/Admin).
InviteAdmin: Form for Merchants to send Admin invitation emails.

Styling

Uses Tailwind CSS (via CDN) for responsive, utility-first styling.
Custom styles in src/index.css for MyDuka-specific components (e.g., forms, tables, dashboards).
Mobile-first design with responsive layouts for all screen sizes.
WCAG Compliance:
Semantic HTML (<header>, <main>, <section>) for better structure.
ARIA labels on inputs, buttons, and navigation for screen reader support.
Keyboard navigation for all interactive elements.
High-contrast Tailwind classes for visual accessibility.



Testing

Unit tests in src/components/Login.test.jsx verify login form rendering, submission, and error handling.
Uses Jest and React Testing Library.
Test API endpoints with Postman to ensure backend compatibility before running the frontend.

Sample Postman Requests:

Register Merchant:POST http://localhost:5000/merchant/register
Content-Type: application/json
{
  "username": "testmerchant",
  "email": "merchant@example.com",
  "password": "Password123"
}


Login:POST http://localhost:5000/auth/login
Content-Type: application/json
{
  "email": "merchant@example.com",
  "password": "Password123"
}


Get Stores:GET http://localhost:5000/store/
Authorization: Bearer <access_token>


Create Store:POST http://localhost:5000/store/
Authorization: Bearer <access_token>
Content-Type: application/json
{
  "name": "Main Store",
  "location": "Downtown"
}


Create Inventory Record:POST http://localhost:5000/inventory/
Authorization: Bearer <access_token>
Content-Type: application/json
{
  "product_id": 1,
  "store_id": 1,
  "quantity_received": 100,
  "items_spoilt": 0,
  "payment_status": false
}



🔗 Backend Integration

Communicates with Flask API at http://localhost:5000.
Endpoints Used:
Authentication: /auth/login, /auth/logout, /auth/refresh, /merchant/register, /auth/register-admin-with-token, /clerk/register
Stores: /store/, /store/<store_id>
Products: /product/, /product/<product_id>
Inventory: /inventory/, /inventory/<record_id>
Transactions: /transaction/, /transaction/<transaction_id>
Supply Requests: /supply-requests/, /supply-requests/<request_id>
Reports: /reports/sales, /reports/stock, /reports/spoilt-items, /reports/payment-status
Admin Invitations: /auth/invite-admin
Profiles: /merchant/profile, /admin/profile, /clerk/profile



 Notes

Ensure the backend is running at http://localhost:5000 before starting the frontend to avoid API errors.
The frontend uses localStorage for JWT tokens; consider secure alternatives (e.g., HttpOnly cookies) in production.
For production, replace Tailwind CSS CDN with a local installation via npm for better performance.
Additional unit tests for components like Stores.jsx, Products.jsx, etc., can be added for better coverage.
The 401 Unauthorized error (e.g., in Stores.jsx) is handled by refreshing the access token using /auth/refresh. Ensure refresh_token is stored during login.

Deployment

Frontend: Deploy to Vercel by pushing the myduka-frontend/ directory to a Vercel project. Set the VITE_API_URL environment variable to the backend URL (e.g., https://myduka-backend.onrender.com).
Example vercel.json:{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "dist" }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/"
    }
  ]
}




Backend: Deploy to Render, ensuring environment variables (DATABASE_URL, JWT_SECRET_KEY, MAIL_*, etc.) are configured. Use Gunicorn for production:gunicorn --bind 0.0.0.0:5000 main:app



