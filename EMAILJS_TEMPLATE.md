# EmailJS Template Configuration

## Template Code for EmailJS Dashboard

Copy and paste this template code into your EmailJS template editor:

### Subject Line:
```
New Contact Form Message from {{from_name}}
```

### Email Body (HTML):
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            background-color: #ffffff;
            border-radius: 8px;
            padding: 30px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 8px 8px 0 0;
            margin: -30px -30px 30px -30px;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
        }
        .info-section {
            background-color: #f8f9fa;
            border-left: 4px solid #667eea;
            padding: 15px;
            margin: 20px 0;
            border-radius: 4px;
        }
        .info-row {
            margin: 10px 0;
            display: flex;
            align-items: center;
        }
        .info-label {
            font-weight: 600;
            color: #555;
            min-width: 80px;
            margin-right: 10px;
        }
        .info-value {
            color: #333;
            word-break: break-word;
        }
        .message-section {
            background-color: #ffffff;
            border: 1px solid #e0e0e0;
            border-radius: 6px;
            padding: 20px;
            margin: 20px 0;
            min-height: 100px;
        }
        .message-label {
            font-weight: 600;
            color: #667eea;
            margin-bottom: 10px;
            display: block;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .message-content {
            color: #333;
            white-space: pre-wrap;
            line-height: 1.8;
        }
        .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e0e0e0;
            text-align: center;
            color: #888;
            font-size: 12px;
        }
        .email-link {
            color: #667eea;
            text-decoration: none;
            font-weight: 500;
        }
        .email-link:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📧 New Contact Form Message</h1>
        </div>
        
        <div class="info-section">
            <div class="info-row">
                <span class="info-label">From:</span>
                <span class="info-value">{{from_name}}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Email:</span>
                <span class="info-value">
                    <a href="mailto:{{from_email}}" class="email-link">{{from_email}}</a>
                </span>
            </div>
            <div class="info-row">
                <span class="info-label">To:</span>
                <span class="info-value">{{to_name}}</span>
            </div>
        </div>
        
        <div class="message-section">
            <span class="message-label">Message:</span>
            <div class="message-content">{{message}}</div>
        </div>
        
        <div class="footer">
            <p>This message was sent from your portfolio contact form.</p>
            <p>Reply directly to: <a href="mailto:{{from_email}}" class="email-link">{{from_email}}</a></p>
        </div>
    </div>
</body>
</html>
```

### Plain Text Version (Alternative):
```
New Contact Form Message

From: {{from_name}}
Email: {{from_email}}
To: {{to_name}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply directly to: {{from_email}}
```

## Setup Instructions:

1. **Go to EmailJS Dashboard**: https://dashboard.emailjs.com/admin/template
2. **Click "Create New Template"**
3. **Template Name**: "Portfolio Contact Form"
4. **Service**: Select your service (service_52lkgym)
5. **Subject**: Copy the subject line above
6. **Content**: 
   - Choose "HTML" format
   - Paste the HTML template code above
7. **Click "Save"**
8. **Copy the Template ID** from the template settings
9. **Add Template ID to your code**:
   - Update `TEMPLATE_ID` in Contact.jsx or add to `.env` file

## Template Variables Used:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email address
- `{{message}}` - Message content
- `{{to_name}}` - Your name (Dhaneera)

## Testing:
After setting up, test the form to ensure emails are received correctly formatted.

