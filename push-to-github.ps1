# =====================================================================
# 把「雙語版」整包推上 GitHub（jerrylin0202 / LTC-personal-brand）。
# 這會覆蓋遠端目前的程式碼（Pages 設定與 deploy.yml 都保留）。
# 用法：在這個資料夾對本檔按右鍵 →「用 PowerShell 執行」，
#       或在 PowerShell：  powershell -ExecutionPolicy Bypass -File .\push-to-github.ps1
# push 時會跳出 GitHub 登入，用你的帳號登入一次即可。
# =====================================================================
$ErrorActionPreference = "Stop"
$remote = "https://github.com/jerrylin0202/LTC-personal-brand.git"

if (Test-Path ".git") { Remove-Item -Recurse -Force ".git" }
git init
git config user.name  "Jerry Lin"
git config user.email "jerrylin0202@gmail.com"
git add .
git commit -m "content: bilingual (ZH/EN) copy + language toggle"
git branch -M main
git remote add origin $remote

Write-Host "`n>> 強制推送到 $remote（會覆蓋遠端程式碼）" -ForegroundColor Yellow
git push -u origin main --force

Write-Host "`n完成！GitHub Actions 會自動重新建置部署。" -ForegroundColor Green
Write-Host "約 1-2 分鐘後看： https://jerrylin0202.github.io/LTC-personal-brand/" -ForegroundColor Green
