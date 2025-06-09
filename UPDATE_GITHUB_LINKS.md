# 🔗 Update GitHub Repository Links

## 📝 Instructions

To make the "View Code" and "Live Demo" buttons work with your actual repositories:

### 1. **Edit the Portfolio Data File**
Open `src/data/portfolio.ts` and update the GitHub URLs for each project:

```typescript
{
  title: "Your Project Name",
  // ... other properties
  githubUrl: "https://github.com/tashidu/your-actual-repo-name",
  liveUrl: "https://your-live-demo-url.com"
}
```

### 2. **Current Placeholder URLs**
I've added placeholder URLs that you need to replace:

#### **Garment Management System**
- GitHub: `https://github.com/tashidu/garment-management-system`
- Live: `https://garment-management-demo.vercel.app`

#### **VinTrek Adventure Planning App**
- GitHub: `https://github.com/tashidu/vintrek-adventure-app`
- Live: `https://vintrek-demo.herokuapp.com`

#### **Distributed Voting Application**
- GitHub: `https://github.com/tashidu/distributed-voting-app`
- Live: `https://voting-app-demo.netlify.app`

#### **Inventory Management System**
- GitHub: `https://github.com/tashidu/inventory-management-java`
- Live: `https://inventory-demo.herokuapp.com`

#### **Inventory Management Web Application**
- GitHub: `https://github.com/tashidu/inventory-web-app`
- Live: `https://inventory-web-demo.vercel.app`

#### **Helarasa Recipe App**
- GitHub: `https://github.com/tashidu/helarasa-recipe-app`
- Live: `https://play.google.com/store/apps/details?id=com.tashidu.helarasa`

#### **Java-based LMS**
- GitHub: `https://github.com/tashidu/java-lms`
- Live: `https://java-lms-demo.herokuapp.com`

#### **Flappy Bird Game (C++)**
- GitHub: `https://github.com/tashidu/flappy-bird-cpp`
- Live: `https://github.com/tashidu/flappy-bird-cpp/releases`

#### **Personalized Ad-Copy Generation**
- GitHub: `https://github.com/tashidu/ad-copy-generation`
- Live: `https://ad-copy-generator-demo.streamlit.app`

### 3. **How to Update**

1. **Open** `src/data/portfolio.ts`
2. **Find** the project you want to update
3. **Replace** the `githubUrl` with your actual GitHub repository URL
4. **Replace** the `liveUrl` with your actual live demo URL (if available)
5. **Save** the file

### 4. **Example Update**

**Before:**
```typescript
{
  title: "Garment Management System",
  githubUrl: "https://github.com/tashidu/garment-management-system",
  liveUrl: "https://garment-management-demo.vercel.app"
}
```

**After (with your actual URLs):**
```typescript
{
  title: "Garment Management System",
  githubUrl: "https://github.com/tashidu/my-actual-garment-repo",
  liveUrl: "https://my-garment-app.vercel.app"
}
```

### 5. **If You Don't Have Live Demos**

You can:
- **Point to GitHub repo**: Use the same URL for both buttons
- **Remove the button**: Set `liveUrl: "#"` to disable it
- **Add "Coming Soon"**: Set `liveUrl: "#"` and it will show as disabled

### 6. **Testing**

After updating:
1. **Save** the file
2. **Refresh** your browser
3. **Click** "View Code" buttons to test
4. **Click** "Live Demo" buttons to test

### 7. **Pro Tips**

- **Use your actual GitHub username** instead of "tashidu"
- **Make sure repositories are public** so visitors can view them
- **Add good README files** to your repositories
- **Include screenshots** in your GitHub repos
- **Deploy your projects** to platforms like:
  - Vercel (for React/Next.js apps)
  - Netlify (for static sites)
  - Heroku (for full-stack apps)
  - GitHub Pages (for static sites)

---

## 🚀 **Current Status**

✅ **Buttons are functional** - they will open links in new tabs  
✅ **Hover effects work** - buttons scale and change colors  
✅ **Responsive design** - works on all devices  
✅ **TypeScript support** - proper type checking  

**Just update the URLs and you're ready to go!** 🎉
