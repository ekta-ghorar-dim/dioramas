@echo off
rem Starts the dev server, shares it on your tailnet via Tailscale, opens the demo index.
cd /d "%~dp0"
start "dioramas dev" cmd /k npm run dev
tailscale serve --bg 5190
for /f "usebackq delims=" %%h in (`powershell -NoProfile -Command "(tailscale status --json | ConvertFrom-Json).Self.DNSName.TrimEnd('.')"`) do set TSHOST=%%h
if "%TSHOST%"=="" (echo Tailscale not connected. & pause & exit /b 1)
timeout /t 4 >nul
start "" "https://%TSHOST%/demos.html"
echo Open on any tailnet device: https://%TSHOST%/demos.html
