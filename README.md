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
git clone https://github.com/yourusername/policypal.git
cd policypal
```

### 2. Set up the backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # or .\venv\Scripts\activate on Windows
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

## 💡 Future Features

- Custom branding for cookie banners and policies
- Automatic legal updates (e.g., GDPR changes) to policies
- Hosting policies under the app’s domain for users (e.g., yourapp.policypal.com/privacy)

## 💬 Inspiration

Built to solve the problem of receiving form submissions without relying on external services like Formspree, Typeform, or email APIs. Perfect for freelancers, creators, or developers looking for a quick solution that they control.

## 📄 License

MIT License
