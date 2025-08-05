# 🚀 TP Final - React Router, Login y Rutas Privadas

![React](https://img.shields.io/badge/React-18.0.0-blue?logo=react)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-Completed-brightgreen)

Este proyecto es un *Trabajo Práctico Final* desarrollado en *React, que implementa un sistema de rutas públicas y privadas con autenticación básica, usando **Context API* y persistencia de sesión en *LocalStorage*.

---

## 📌 Características principales
✅ Login y Logout con persistencia de sesión  
✅ Rutas privadas con redirección automática al login  
✅ Página de error 404 personalizada  
✅ Uso de *Context API* para manejo global del usuario  
✅ Estructura modular y mantenible  

---

## 📂 Estructura del proyecto
src/
├── components/    # Componentes reutilizables
├── context/       # Contexto global de usuario
├── pages/         # Páginas (Home, Login, Dashboard, NotFound)
├── router/        # Configuración de rutas y rutas privadas
└── styles/        # Estilos CSS
## ⚙ Instalación y ejecución

1️⃣ *Clonar el repositorio*
```bash
git 
cd https://github.com/matute1987/tp-1.git
 
 instalar dependencia
 npm install

 Ejetutar un modo desarrollo
 bash
 npm run dev

 🔑 Flujo de autenticación
	1.	El usuario ingresa sus credenciales en Login.
	2.	Se guarda la sesión en LocalStorage.
	3.	Las rutas privadas (/dashboard) solo son accesibles si hay sesión activa.
	4.	Si no hay sesión, PrivateRoute redirige automáticamente a /login.
	5.	Logout limpia la sesión y redirige al inicio.

⸻

🛠 Tecnologías usadas
	•	React
	•	React Router DOM
	•	Context API
	•	LocalStorage
	•	CSS

  👨‍💻 Autor

Rodrigo Freire
📧 freirerodrigo87@gmail.com
🌐 Mi GitHub https://github.com/matute1987

📜 Licencia

Este proyecto está bajo la licencia MIT - ver el archivo LICENSE para más detalles.

### 📌 Próximos pasos para agregarlo
1. Crear el archivo en la raíz del proyecto:
```bash
touch README.md 
