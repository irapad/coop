# 📦 Installation Guide - COSMA Coop

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16 or higher)
  - Download from: https://nodejs.org/
  - Check version: `node --version`

- **npm** (comes with Node.js)
  - Check version: `npm --version`

## Installation Steps

### 1. Navigate to Project Directory

```bash
cd /Users/jirapadjarunkunparnid/Desktop/comas/cosma-coop
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages:
- react & react-dom (18.2.0)
- react-router-dom (6.20.0)
- lucide-react (0.294.0)
- recharts (2.10.3)
- framer-motion (10.16.16)
- typescript (5.2.2)
- vite (5.0.8)
- tailwindcss (3.3.6)
- And more...

**Installation time:** ~2-3 minutes (depending on internet speed)

### 3. Start Development Server

```bash
npm run dev
```

You should see output like:

```
  VITE v5.0.8  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

### 4. Open in Browser

Open your browser and navigate to:
```
http://localhost:5173
```

## 🎯 Testing on Mobile View

### Chrome DevTools
1. Press `F12` or `Cmd+Option+I` (Mac)
2. Click the device toolbar icon (or press `Cmd+Shift+M`)
3. Select a mobile device or set custom dimensions:
   - Width: 390px or 375px
   - Height: 844px or 667px

### Recommended Devices
- iPhone 14 Pro (390 x 844)
- iPhone 13 (390 x 844)
- iPhone SE (375 x 667)

## 🏗️ Build for Production

### Build

```bash
npm run build
```

This creates optimized files in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

Preview the production build at `http://localhost:4173`

## 🔧 Troubleshooting

### Issue: `npm install` fails

**Solution 1:** Clear npm cache
```bash
npm cache clean --force
npm install
```

**Solution 2:** Delete node_modules and reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Port 5173 already in use

**Solution:** Use a different port
```bash
npm run dev -- --port 3000
```

### Issue: Missing dependencies

**Solution:** Ensure you're in the correct directory
```bash
pwd  # Should show: /Users/jirapadjarunkunparnid/Desktop/comas/cosma-coop
npm install
```

### Issue: TypeScript errors

**Solution:** These are just warnings, the app will still work
```bash
# To check TypeScript errors without running:
npx tsc --noEmit
```

## 📱 Mobile Testing Tips

1. **Use Chrome DevTools Mobile Simulator**
   - Best for quick testing
   - Toggle device toolbar with `Cmd+Shift+M`

2. **Test on Real Device**
   - Connect to same WiFi
   - Use your computer's IP address
   - Example: `http://192.168.1.100:5173`

3. **Responsive Testing**
   - Test at 375px, 390px, 414px widths
   - App is optimized for max 430px

## 🎨 Customization

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#8b3f9e',  // Change this
    light: '#a855f7',    // And this
  },
  // ...
}
```

### Change Max Width

Edit `tailwind.config.js`:

```javascript
maxWidth: {
  'app': '430px',  // Change to your preferred width
}
```

### Add New Fonts

Edit `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

Then update `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
}
```

## 📚 Useful Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build

# Check versions
node --version           # Check Node version
npm --version            # Check npm version

# Clear and reinstall
rm -rf node_modules      # Remove dependencies
npm install              # Reinstall dependencies

# Format and check
npx prettier --write .   # Format code (if prettier installed)
npx tsc --noEmit        # Check TypeScript errors
```

## 🚀 Quick Start (TL;DR)

```bash
cd cosma-coop
npm install
npm run dev
# Open http://localhost:5173
```

Login with:
- เลขสมาชิก: `CM-001234`
- รหัสผ่าน: anything
- Or PIN: `123456`

## 📖 Next Steps

1. Read `QUICKSTART.md` for usage guide
2. Check `README.md` for features overview
3. See `PROJECT_SUMMARY.md` for complete details

## 💡 Tips

- Use Chrome for best compatibility
- Enable mobile view in DevTools
- Check console for any errors
- Hot reload is enabled (changes reflect immediately)

## 🆘 Need Help?

If you encounter any issues:

1. Check the console for error messages
2. Ensure Node.js version is 16+
3. Try clearing cache and reinstalling
4. Check that you're in the correct directory

---

Happy coding! 🎉
