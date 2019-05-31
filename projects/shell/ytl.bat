@ECHO OFF
title 安装APP
color 8
::输入默认路径
SET rootPath=F:\WebWorkspace\projects\shell
::公共变量，不要改
SET uid=10001
::脚本路径
::CD /d E:\myCommand
for /f "tokens=1 delims= " %%i in (UUID.txt) do (
  set uid=%%i
)
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
call pack.bat
CD /d %rootPath%
SET greeAssetsPath=%rootPath%
goto :NEXT

:cmd2
call pack.bat
CD /d %rootPath%
SET greeAssetsPath=%rootPath%
goto :NEXT

:cmd3
call pack.bat
CD /d %rootPath%
SET greeAssetsPath=%rootPath%
adb reverse tcp:8081 tcp:8081
adb reverse tcp:8098 tcp:8098
echo 8081, 8098端口映射成功！
goto :NEXT

:NEXT
"C:\Program Files\7-Zip\7z.exe" x -y -aoa -oshell shell.zip
echo shell包解压完毕
CD shell\Plugins
rd /s /q %uid%
echo %uid%文件夹删除完毕
CD ../../
xcopy %pluginsPath% %greeAssetsPath%\shell\Plugins /y /c /e /i
echo 插件复制完毕
CD shell
"C:\Program Files\7-Zip\7z.exe" -tZip -aoa a shell.zip ../shell\*
echo 压缩完毕
copy shell.zip ../assets
echo shell压缩包复制完毕
CD ../
rd /s /q shell
echo shell文件夹删除完毕
CD ../../../../
echo 开始安装，如果安装失败，请检查设备是否连接成功！
gradlew installDebug