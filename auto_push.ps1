while ($true) {
    git add .
    git commit -m "Auto update"
    git push origin master
    Start-Sleep -Seconds 0.1
}
