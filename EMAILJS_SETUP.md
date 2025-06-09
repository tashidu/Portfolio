# EmailJS Setup Guide

Your contact form is now ready to send real emails! Follow these steps to complete the setup:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy the Service ID** (you'll need this)

## Step 3: Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}}
Email: {{from_email}}

Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Copy the Template ID** (you'll need this)

## Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key**
3. **Copy the Public Key** (you'll need this)

## Step 5: Configure Your Project
1. Create a `.env` file in your project root (copy from `.env.example`)
2. Add your EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

## Step 6: Test Your Contact Form
1. Start your development server: `npm run dev`
2. Go to your contact form
3. Fill out and submit a test message
4. Check your email inbox!

## Alternative: Quick Setup (For Testing)
If you want to test immediately, you can temporarily hardcode the values in `src/config/emailjs.ts`:

```typescript
export const emailjsConfig = {
  serviceId: 'service_xxxxxxx',    // Replace with your actual Service ID
  templateId: 'template_xxxxxxx',  // Replace with your actual Template ID
  publicKey: 'xxxxxxxxxxxxxxx',   // Replace with your actual Public Key
};
```

## Free Tier Limits
- 200 emails per month
- Perfect for a portfolio website!

## Troubleshooting
- Make sure your email service is properly connected
- Check that template variable names match exactly
- Verify your public key is correct
- Check browser console for any error messages

Your contact form will now send real emails to your inbox! 🎉
