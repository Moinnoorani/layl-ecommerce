# Auto-rename based on image analysis
$mapping = @{
    "Gemini_Generated_Image_2we50m2we50m2we5.png" = "niacinamide-serum.png"
    "Gemini_Generated_Image_5yav315yav315yav.png" = "gentle-cleanser.png"
    "Gemini_Generated_Image_9f4c2c9f4c2c9f4c.png" = "salicylic-cleanser.png"
    "Gemini_Generated_Image_9n8gm9n8gm9n8gm9.png" = "ceramide-cream.png"
    "Gemini_Generated_Image_a2hjcwa2hjcwa2hj.png" = "vitamin-c.png"
    "Gemini_Generated_Image_csk0xbcsk0xbcsk0.png" = "retinol.png"
    "Gemini_Generated_Image_exj0r0exj0r0exj0.png" = "mineral-spf-tinted.png"
    "Gemini_Generated_Image_fdthizfdthizfdth.png" = "ultra-light-spf.png"
    "Gemini_Generated_Image_flwdedflwdedflwd.png" = "squalane.png"
    "Gemini_Generated_Image_fzlwzffzlwzffzlw.png" = "azelaic-acid.png"
    "Gemini_Generated_Image_g1netmg1netmg1ne.png" = "niacinamide-toner.png"
    "Gemini_Generated_Image_ltckjeltckjeltck.png" = "body-cream.png"
    "Gemini_Generated_Image_nfrr86nfrr86nfrr.png" = "glycolic-body-lotion.png"
    "Gemini_Generated_Image_q1budgq1budgq1bu.png" = "spf-50-sunscreen.png"
    "Gemini_Generated_Image_tset66tset66tset.png" = "lactic-acid.png"
    "Gemini_Generated_Image_wrtnd3wrtnd3wrtn.png" = "glycolic-toner.png"
    "Gemini_Generated_Image_z21btcz21btcz21b.png" = "centella-serum.png"
}

$productsPath = "public\products"

Write-Host "Renaming LAYL product images..."
Write-Host ""

foreach ($oldName in $mapping.Keys) {
    $newName = $mapping[$oldName]
    $oldPath = Join-Path $productsPath $oldName
    $newPath = Join-Path $productsPath $newName
    
    if (Test-Path $oldPath) {
        if (Test-Path $newPath) {
            Remove-Item $newPath -Force
        }
        Rename-Item -Path $oldPath -NewName $newName -Force
        Write-Host "✓ Renamed: $oldName -> $newName"
    }
    else {
        Write-Host "✗ Not found: $oldName"
    }
}

Write-Host ""
Write-Host "Done! All images renamed."
Write-Host ""
Write-Host "Next: Run node update-all-images.js to update database"
