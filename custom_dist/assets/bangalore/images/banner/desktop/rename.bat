@echo off
setlocal enabledelayedexpansion
set count=1
for %%a in (*.webp) do (
    set newname=!count!.webp
    rename "%%a" "!newname!"
    set /a count+=1
)
