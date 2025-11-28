# README - Frontend Estadísticas y Acortador de URL

## 📊 Módulo 4: Frontend de Estadísticas

Este módulo proporciona una interfaz web elegante y minimalista que se
conecta al servicio de estadísticas para visualizar datos relevantes de
forma clara y moderna.

### 🚀 Tecnologías utilizadas

-   **AWS S3 + CloudFront** para hosting y CDN del frontend\
-   **Terraform** para la creación y gestión de recursos del frontend\
-   **GitHub Actions** para el pipeline de despliegue automático

### 🧩 Responsabilidades del módulo

-   Desarrollo de una interfaz web simple y visualmente atractiva\
-   Infraestructura con Terraform para S3 y CloudFront\
-   Implementación de un pipeline de CI/CD en GitHub Actions\
-   Integración con APIs del backend para consumir estadísticas

------------------------------------------------------------------------

## 🔗 Módulo 5: Frontend para Formulario Acortador de URL y Redirección

Este módulo permite generar enlaces cortos y gestionar la redirección
con una experiencia fluida y agradable para el usuario.

### ✨ Funcionalidades principales

-   Enviar una URL al backend para generar un enlace acortado\
-   Mostrar el link generado junto con un botón para copiarlo\
-   Manejar la ruta:\
    **`/short/{codigo}`**
    -   Mostrar pantalla de carga durante 5 segundos\
    -   Luego redirigir a la URL original\
-   Si el código no existe, mostrar un banner de advertencia indicando
    que el enlace no fue encontrado

### 🚀 Tecnologías utilizadas

-   **AWS S3 + CloudFront** para hosting\
-   **Terraform** para la infraestructura del frontend\
-   **GitHub Actions** para despliegue automatizado

### 🧩 Responsabilidades del módulo

-   Crear una interfaz web clara y funcional\
-   Configurar recursos S3 y CloudFront mediante Terraform\
-   Implementar pipeline de despliegue con GitHub Actions\
-   Integrarse con los servicios backend del acortador de URL

------------------------------------------------------------------------

## 📁 Estructura del proyecto

Este README resume las responsabilidades y tecnologías de ambos
frontends, orientados a desplegarse en AWS con infraestructura como
código y pipelines automatizados.
