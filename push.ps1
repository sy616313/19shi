# ============================================================
#  推送 19shi 项目到 GitHub + 自动部署到公网
#  使用方法：右键 → "使用 PowerShell 运行"
# ============================================================

Set-Location "C:\Users\617\Desktop\19shi"

Write-Host "📦 当前分支：" -NoNewline
git branch --show-current

Write-Host "📋 检查变更..."
$status = git status --porcelain

if ($status) {
    Write-Host "🔧 提交变更..."
    git add -A
    git commit -m "更新项目文件"
}

Write-Host "🚀 推送到 GitHub..."
git push --all origin

Write-Host ""
Write-Host "============================================"
Write-Host "  ✅ 推送完成！"
Write-Host ""
Write-Host "  🌐 公网地址（GitHub Pages 自动部署）："
Write-Host "     https://sy616313.github.io/19shi/"
Write-Host ""
Write-Host "  📋 首次使用需在 GitHub 启用 Pages："
Write-Host "     https://github.com/sy616313/19shi/settings/pages"
Write-Host "     Source 选择 GitHub Actions"
Write-Host "============================================"
pause
