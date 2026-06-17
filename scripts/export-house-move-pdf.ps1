param(
  [string]$Url = "http://localhost:3055/house-move",
  [string]$Out = "$env:USERPROFILE\Downloads\Tom-house-move-proposal.pdf"
)

$chrome = "${env:ProgramFiles}\Google\Chrome\Application\chrome.exe"
if (-not (Test-Path $chrome)) {
  Write-Error "Chrome not found at $chrome"
  exit 1
}

# A4 portrait at 96dpi — matches @page size in deck.css
& $chrome `
  --headless=new `
  --disable-gpu `
  --window-size=794,1123 `
  --run-all-compositor-stages-before-draw `
  --virtual-time-budget=12000 `
  --print-to-pdf="$Out" `
  --no-pdf-header-footer `
  --print-background `
  $Url

Start-Sleep -Seconds 1

if (Test-Path $Out) {
  $item = Get-Item $Out
  Write-Host "Saved $($item.FullName) ($([math]::Round($item.Length / 1KB, 1)) KB)"
} else {
  Write-Error "PDF was not created"
  exit 1
}
