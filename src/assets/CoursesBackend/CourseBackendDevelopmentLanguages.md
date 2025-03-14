 Curso de Lenguajes y Entornos de Desarrollo Backend

📖 Módulo 1: Introducción a los Lenguajes de Backend

🔹 1.1 ¿Qué es un lenguaje de programación backend?

Un lenguaje de backend es aquel que permite desarrollar la lógica del servidor, gestionar bases de datos, manejar autenticaciones y procesar peticiones del cliente.

🔹 1.2 Principales lenguajes de backend

Lenguaje   ----  -------- Características      ------      Frameworks populares
JavaScript (Node.js)-----Asíncrono, basado en eventos----- Express.js, NestJS
Java----------------------Tipado fuerte, orientado a objetos----- Spring Boot, Quarkus
Python-------------------Fácil de aprender, versátil----- Django, Flask
PHP ----------------------Ampliamente usado, integración con HTML----- Laravel, Symfony
Ruby----------------------Elegante, fácil de leer----- Ruby on Rails, Sinatra

Módulo 2: Configuración del Entorno de Desarrollo

🔹 2.1 Herramientas esenciales

Para desarrollar en backend, es necesario contar con:

Editor de código: VS Code, IntelliJ IDEA, Eclipse.

Terminal: Git Bash, PowerShell, Terminal de Linux.

Sistema de control de versiones: Git y GitHub.

Base de datos: MySQL, PostgreSQL, MongoDB.

Entorno de ejecución: Node.js, JDK para Java, Python.

2.2 Instalación y configuración

🔸 Instalando Node.js y NPM

Descarga Node.js.

Verifica la instalación:
node -v
npm -v

Instalando Java y Maven

Descarga el JDK desde Oracle o usa OpenJDK.

Instala Maven para gestionar dependencias.

Verifica la instalación:

Instalando Java y Maven

Descarga el JDK desde Oracle o usa OpenJDK.

Instala Maven para gestionar dependencias.

Verifica la instalación:
java -version
mvn -version

Instalando Python y pip

Descarga e instala Python desde python.org.

Verifica la instalación:
python --version
pip --version

Módulo 3: Uso de Git y GitHub en Proyectos Backend

🔹 3.1 Introducción a Git

Git es un sistema de control de versiones que permite rastrear cambios en el código y colaborar con otros desarrolladores.

🔹 3.2 Comandos básicos de Git
# Configurar Git
git config --global user.name "Tu Nombre"
git config --global user.email "tuemail@example.com"

# Inicializar un repositorio
git init

# Agregar archivos al seguimiento
git add .

# Confirmar cambios
git commit -m "Primer commit"

# Vincular con GitHub
git remote add origin https://github.com/usuario/repo.git
git push -u origin main
🔹 3.3 Trabajar con ramas
# Crear una nueva rama
git branch feature/nueva-funcionalidad

# Cambiar a la nueva rama
git checkout feature/nueva-funcionalidad

# Subir cambios
git push origin feature/nueva-funcionalidad
