# ============================================================
#  推送 19shi 项目到 GitHub
#  使用方法：右键此文件 → "使用 PowerShell 运行"
#  或在终端输入：.\push.ps1
# ============================================================

Set-Location "C:\Users\617\Desktop\19shi"

Write-Host "📦 当前分支：" -NoNewline
git branch --show-current

Write-Host "📋 检查变更..."
$status = git status --porcelain

if ($status) {
    Write-Host "🔧 有未提交的变更，正在提交..."
    git add -A
    git commit -m "更新项目说明文档"
}
else {
    Write-Host "✅ 工作区干净，无需提交"
}

Write-Host "🚀 推送所有分支到 GitHub..."
git push --all origin

Write-Host "`n✨ 完成！访问 https://github.com/sy616313/19shi 查看"
pause
