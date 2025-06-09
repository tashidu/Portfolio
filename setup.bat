@echo off
echo ========================================
echo   Tashidu's Portfolio Setup Script
echo ========================================
echo.

echo Installing dependencies...
npm install

if %errorlevel% neq 0 (
    echo.
    echo ❌ Installation failed. Please check your Node.js installation.
    echo.
    echo Make sure you have:
    echo - Node.js v16 or higher
    echo - npm package manager
    echo.
    pause
    exit /b 1
)

echo.
echo ✅ Dependencies installed successfully!
echo.
echo Starting development server...
echo.
echo 🚀 Your portfolio will open at: http://localhost:3000
echo.

npm run dev

pause
