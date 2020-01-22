@echo off
setlocal EnableDelayedExpansion
title 修改config
color 8

set lines=0
set append=0
set configall=config.xml
set config=config.xml
set cmdPath=E:\myCommand
SET uid=123456
:: 输入默认路径
SET pluginsPath=F:\WebWorkspace\projects\shell
SET assetsPathUpdate=F:\WebWorkspace\projects\shell
SET assetsPathStable=F:\WebWorkspace\projects\shell
SET assetsPathInline=F:\WebWorkspace\projects\shell
SET assetsPath=F:\WebWorkspace\projects\shell
::脚本路径
CD /d %cmdPath%
for /f "tokens=1 delims= " %%i in (UUID.txt) do (
  set uid=%%i
)
::选择要添加config的版本
:MENU
ECHO.=-=-=-=-=请选择安装版本=-=-=-=-=
ECHO.
ECHO.          1 - 最新版
ECHO.
ECHO.          2 - 稳定版
ECHO.
ECHO.          3 - 在线联调版
ECHO.
ECHO.          4 - 退出
ECHO.
ECHO.=-=-=-=-=请输入选择序号=-=-=-=-=
set /p  ID=

if "%id%"=="1" (
 goto cmd1
) else if "%id%"=="2" (
 goto cmd2
) else if "%id%"=="3" (
 goto cmd3
) else if "%id%"=="4" (
cmd /k
) else (
echo 输入无效，请重新输入
ECHO.
 goto :MENU
)

:cmd1
CD /d %assetsPathUpdate%
SET assetsPath=%assetsPathUpdate%
goto :NEXT

:cmd2
CD /d %assetsPathStable%
SET assetsPath=%assetsPathStable%
goto :NEXT

:cmd3
CD /d %assetsPathInline%
SET assetsPath=%assetsPathInline%
goto :NEXT


:NEXT
::将release包解压
"C:\Program Files\7-Zip\7z.exe" x -y -aoa -orelease release.zip
echo release包解压完毕
CD release

::过滤对应uid的config中的第一行内容
set path=F:\WebWorkspace\projects\shell\%uid%
cd /d %path%\config
set config=%path%\config\config.xml
set configline=0
for /f "tokens=*" %%i in (!config!) do (
  set /A configline=!configline!+1
  if !configline! gtr 1 (
    echo %%i>>val.txt
  )
)
::将过滤后的内容复制到release包的config中
set configall=%assetsPath%^\release^\config.xml
cd /d %assetsPath%^\release

for /f "tokens=*" %%i in (!configall!) do (
  set /A lines=!lines!+1
)
set /A append=%lines%-1
set lines=0
for /f "tokens=*" %%i in (!configall!) do (
  set /A lines=!lines!+1
  if !lines! lss !append! (
    ::echo 现在是%%i
    echo %%i>>$
  ) else if !lines! equ !append! (
    echo %%i>>$
    type %path%^\config^\val.txt>>$
  )
)
echo.>>$
echo ^<^/devices^>>>$
del %path%^\config^\val.txt
del %configall%
move $ %configall%

::还原release包
"C:\Program Files\7-Zip\7z.exe" -tZip -aoa a release.zip ../release\*
echo 压缩完毕
copy release.zip ../assets
echo release压缩包复制完毕
CD ../
rd /s /q release
echo release文件夹删除完毕, 修改完成