@echo off
cd /d "%~dp0.." 

if "%1" == "prod" (
    if "%2" == "down" (
        set "fileEnv=docker-compose.prod.yaml"
        set "downOrUp=down"
    ) else if "%2" == "up" (
        set "fileEnv=docker-compose.prod.yaml"
        set "downOrUp=up"
    )
) else if "%1" == "dev" (
    if "%2" == "down" (
        set "fileEnv=docker-compose.dev.yaml"
        set "downOrUp=down"
    ) else if "%2" == "up" (
        set "fileEnv=docker-compose.dev.yaml"
        set "downOrUp=up"
    )
)

if not "%fileEnv%" == "" (
    echo Running docker-compose -f docker-compose.yaml -f %fileEnv% %downOrUp%
    docker-compose -f docker-compose.yaml -f %fileEnv% %downOrUp%
) else (
    echo Need to follow format ./deploy.bat prod | dev  down | up
)
