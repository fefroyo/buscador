@echo off
echo Deteniendo spoolsv.
echo.
net stop spooler
echo Eliminando documentos temporales de la cola
echo.
del /Q /F /S "%systemroot%System32SpoolPrinters*.*"
echo Iniciando spoolsv.
echo.
net start spooler