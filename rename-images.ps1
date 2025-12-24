# Interactive Image Renaming Script for LAYL Products

$productsPath = "public\products"
$images = Get-ChildItem -Path $productsPath -Filter "Gemini_Generated*.png" | Sort-Object Name

Write-Host "================================================"
Write-Host "    LAYL Product Image Renaming Helper"
Write-Host "================================================"

Write-Host "Found $($images.Count) images to rename"

$productNames = @(
    "salicylic-cleanser.png",
    "gentle-cleanser.png",
    "niacinamide-toner.png",
    "niacinamide-serum.png",
    "azelaic-acid.png",
    "ceramide-cream.png",
    "squalane.png",
    "mineral-spf-tinted.png",
    "ultra-light-spf.png",
    "retinol.png",
    "vitamin-c.png",
    "glycolic-body-lotion.png",
    "body-cream.png"
)

Write-Host ""
Write-Host "Available product names:"
for ($i = 0; $i -lt $productNames.Count; $i++) {
    Write-Host "  $($i + 1). $($productNames[$i])"
}

Write-Host ""
Write-Host "================================================"
Write-Host ""

foreach ($image in $images) {
    Write-Host "Current image: $($image.Name)"
    Write-Host "Opening image..."
    
    Start-Process $image.FullName
    Start-Sleep -Seconds 1
    
    Write-Host ""
    Write-Host "Which product is this? Enter number (1-$($productNames.Count)) or 's' to skip:"
    $choice = Read-Host
    
    if ($choice -eq 's') {
        Write-Host "Skipped"
        Write-Host ""
        continue
    }
    
    $index = [int]$choice - 1
    if ($index -ge 0 -and $index -lt $productNames.Count) {
        $newName = $productNames[$index]
        $newPath = Join-Path $productsPath $newName
        
        if (Test-Path $newPath) {
            Write-Host "Warning: $newName already exists. Overwrite? (y/n):"
            $confirm = Read-Host
            if ($confirm -ne 'y') {
                Write-Host "Skipped"
                Write-Host ""
                continue
            }
        }
        
        Rename-Item -Path $image.FullName -NewName $newName -Force
        Write-Host "Renamed to: $newName"
        Write-Host ""
    }
    else {
        Write-Host "Invalid choice. Skipped"
        Write-Host ""
    }
}

Write-Host ""
Write-Host "================================================"
Write-Host "    Renaming Complete!"
Write-Host "================================================"
Write-Host ""
Write-Host "Next step: Run node update-all-images.js"
