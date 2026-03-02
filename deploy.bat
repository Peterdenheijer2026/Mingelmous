@echo off
cd /d "%~dp0"
REM Zoek Git (vaak niet in PATH als je het bat dubbelklikt)
if exist "C:\Program Files\Git\bin\git.exe" set "PATH=C:\Program Files\Git\bin;%PATH%"
if exist "C:\Program Files (x86)\Git\bin\git.exe" set "PATH=C:\Program Files (x86)\Git\bin;%PATH%"
REM GitHub Desktop meegestuurde Git
for /d %%d in ("%LOCALAPPDATA%\GitHubDesktop\app-*") do set "GITDESKTOP=%%d"
if defined GITDESKTOP if exist "%GITDESKTOP%\resources\app\git\cmd\git.exe" set "PATH=%GITDESKTOP%\resources\app\git\cmd;%PATH%"
git --version >nul 2>&1
if errorlevel 1 (
  echo Git niet gevonden. Installeer Git voor Windows of voeg Git aan je PATH toe.
  echo Bijv.: https://git-scm.com/download/win
  pause
  exit /b 1
)
echo ===== Git status =====
git status
echo.

set "msg=%~1"
if "%msg%"=="" (
  set /p "msg=Commit message: "
)
if "%msg%"=="" (
  echo Geen commit message. Gestopt.
  pause
  exit /b 1
)

echo.
echo ===== Stagen =====
git add .
echo.
echo ===== Committen =====
git commit -m "%msg%"
if errorlevel 1 (
  echo Commit mislukt of niets te committen.
  pause
  exit /b 1
)
echo.
echo ===== Pushen naar GitHub =====
git push
if errorlevel 1 (
  echo Push mislukt.
  pause
  exit /b 1
)
echo.
echo Klaar. Vercel deployt nu automatisch na de push.
echo.
pause
