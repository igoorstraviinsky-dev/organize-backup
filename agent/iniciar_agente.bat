@echo off
echo Iniciando Agente Python...
if exist venv (
    call venv\Scripts\activate
)
python main.py
pause
