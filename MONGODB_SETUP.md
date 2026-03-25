# MongoDB Setup Guide

## ⚡ Quick Setup (Recommended - 5 minutes)

### Option 1: MongoDB Atlas (Cloud - FREE)
Perfect for development and no installation needed!

1. **Go to**: https://www.mongodb.com/cloud/atlas
2. **Sign up** (FREE - no credit card needed)
3. **Create a Project** and a Cluster
4. **Get Connection String**:
   - In Atlas, go to "Database Deployments"
   - Click "Connect" on your cluster
   - Choose "Drivers" → "Node.js"
   - Copy the connection string
5. **Update .env file**:
   ```
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/employees?retryWrites=true&w=majority
   ```
6. **Replace**:
   - `username` with your MongoDB user
   - `password` with your password
   - `cluster` with your cluster name

### Option 2: Local MongoDB Installation
If you prefer local installation:

1. **Download**: https://www.mongodb.com/try/download/community
2. **Install** with default settings
3. **MongoDB will start automatically** (Windows Service)
4. **Update .env file**:
   ```
   MONGO_URI=mongodb://localhost:27017/employees
   ```

### Option 3: Docker (If installed)
```bash
docker run -d -p 27017:27017 --name mongodb mongo
```

Then update .env:
```
MONGO_URI=mongodb://localhost:27017/employees
```

---

## 🔧 Install dotenv package

```bash
npm install dotenv
```

## ✅ Verify Connection

After updating .env, restart the server:
```bash
npm start
```

You should see: ✅ MongoDB Connected Successfully

If connection fails, check:
- ✓ MongoDB URI is correct
- ✓ Database credentials are correct
- ✓ No firewall blocking port 27017
- ✓ MongoDB service is running
