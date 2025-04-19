# PolicyPal - Legal Made Simple

**PolicyPal** is an easy-to-use web app that helps website owners and developers generate Terms of Service, Privacy Policies, and Cookie Banners. Quickly get legal coverage for your website and stay compliant with laws like GDPR, CCPA, and PECR.

## 🚀 Features

- 📝 Generate Terms of Service & Privacy Policies with just a few questions
- 🍪 Embed a customizable cookie consent banner with a single script
- 🔐 Simple user authentication (Flask + React)
- 📑 Download generated policies as PDF or HTML
- 📡 Optionally host the policies on your domain
- 🎨 Customizable branding for paid users (coming soon)

---

## 🧱 Tech Stack

- **Frontend:** React + Tailwind CSS
- **Backend:** Python Flask (REST API)
- **Database:** MySQL
- **Email:** Optional SMTP integration for policy changes and confirmations

---

## 🛠️ Local Development

### 1. Clone the repo

```bash
git clone https://github.com/Computer-Anything/policy_pal.git
cd policypal
```

### 2. Set up the backend

```bash
pip install -r requirements.txt

# Add your .env config
cp .env.example .env

# Run the Flask API
flask run
```

### 3. Set up the frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔐 .env Configuration (Backend)

```bash
SECRET_KEY=your_secret_key
MYSQL_USER=root
MYSQL_PASSWORD=your_password
MYSQL_HOST=localhost
MYSQL_DB=policypal

# Optional SMTP configuration for email notifications
SMTP_HOST=smtp.yourhost.com
SMTP_PORT=587
```

---

## ✅ Example: A real user story

Imagine a freelancer building a site for a bakery.

- The baker doesn’t know what GDPR is
- She doesn't want to touch ChatGPT
- She just wants a box that says “Answer these 5 things and you’ll be legally okay”
- Bonus points if the cookie banner is copy-paste and works on Squarespace

That’s PolicyPal.

---

## 🧪 MVP Features

1. Create Policies:
    - Simple form where users fill out their website info (name, email, cookie usage, etc.)
    - Auto-generates Terms of Service & Privacy Policy pages
    - Display a preview or export to HTML/PDF

2. Cookie Banner Generator:
    - Users receive a simple JavaScript snippet they can embed in their website
    - The banner stores consent in the browser’s localStorage

3. Account Management:
    - User profile, with ability to view/edit previously generated policies

### 👤 Workflow

1. User logs in → Dashboard (/dashboard)
2. User clicks "➕ Create New Policy" button
3. User gets routed to /create-policy
4. Full form appears with all needed fields
5. Submit → generate + save the Policy
6. Redirect back to /dashboard (and show their new Policy!)

---

## 💡 Future Features

- Custom branding for cookie banners and policies
- Automatic legal updates (e.g., GDPR changes) to policies
- Hosting policies under the app’s domain for users (e.g., yourapp.policypal.com/privacy)

---

## 💬 Inspiration

Built to solve the problem of receiving form submissions without relying on external services like Formspree, Typeform, or email APIs. Perfect for freelancers, creators, or developers looking for a quick solution that they control.

---

## 📄 License

MIT License
