@echo off&setlocal enabledelayedexpansion
echo 当前UUID是：
type UUID.txt
choice /c yn /m "确认修改请按Y，取消请按N"
if %errorlevel%==1 (
 goto :NEXT
) else if %errorlevel%==2 (
cmd /k
)


:NEXT
set firVal=1
set secVal=2
set /p uid=请输入uid：
echo uid=%uid%
::CD /d E:\myCommand
echo  当前工作路径为：%cd%
for /f "tokens=1 delims= " %%i in (UUID.txt) do (
  set secVal=%%i
)
for /f "tokens=1 delims= " %%i in (UUID.txt) do (
  set firVal=%%i
  set "firVal=!firVal:%secVal%=%uid%!"
  :: 把修改后的全部行存入$
  echo !firVal!>>$
)
echo  当前工作路径为：%cd%
:: 用$的内容替换原来内容
move $ UUID.txt
pause