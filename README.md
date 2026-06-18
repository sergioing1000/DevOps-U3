# Laboratorio de DevOps - Integración Continua y Calidad de Software

#  DevOps

## Integrantes

* Sergio Cruz

---

# Descripción

Este laboratorio implementa un proceso completo de aseguramiento de calidad para una aplicación desarrollada con **Spring Boot**, integrando pruebas automatizadas, análisis de calidad de código y un pipeline de Integración Continua (CI).

Durante el desarrollo se implementaron:

* Pruebas unitarias
* Pruebas de integración
* Uso de Mockito
* Base de datos H2
* Cobertura con JaCoCo
* Análisis estático con SonarQube
* Pipeline de GitHub Actions

El objetivo principal consiste en garantizar que cada cambio realizado al proyecto sea validado automáticamente antes de ser integrado al repositorio principal.

---

# Arquitectura

```
Cliente
   │
   ▼
REST Controller
   │
   ▼
Service
   │
   ▼
Repository
   │
   ▼
H2 Database
```

---

# Tecnologías utilizadas

| Tecnología      | Versión |
| --------------- | ------- |
| Java            | 25 LTS  |
| Maven           | 3.9.x   |
| Spring Boot     | 4.x     |
| Spring Data JPA | ✔       |
| H2 Database     | ✔       |
| JUnit 5         | ✔       |
| Mockito         | ✔       |
| JaCoCo          | ✔       |
| SonarQube       | ✔       |
| GitHub Actions  | ✔       |

---

# Estructura del proyecto

```
src
 ├── main
 │    ├── java
 │    └── resources
 │
 └── test
      ├── unit
      ├── integration
      └── mockito
```

---

# Tipos de pruebas implementadas

## 1. Pruebas Unitarias

Validan el comportamiento individual de los métodos del sistema.

Se ejecutan mediante:

```bash
mvn test
```

Incluyen pruebas sobre:

* Servicios
* Validaciones
* Reglas de negocio

---

## 2. Pruebas con Mockito

Se utilizan objetos simulados (Mocks) para aislar dependencias.

Objetivos:

* Verificar llamadas a repositorios
* Simular respuestas
* Validar lógica del Service

---

## 3. Pruebas de Integración

Comprueban la interacción entre:

* Controller
* Service
* Repository
* Base de datos H2

Se utiliza una base de datos embebida para ejecutar pruebas sin afectar entornos reales.

---

# Base de datos H2

La aplicación utiliza H2 en memoria durante las pruebas.

Consola:

```
http://localhost:8080/h2-console
```

Parámetros de conexión:

```
JDBC URL:
jdbc:h2:mem:testdb

User:
sa

Password:
(password vacío)
```

---

# Ejecución del proyecto

Compilar

```bash
mvn clean compile
```

Ejecutar

```bash
mvn spring-boot:run
```

---

# Ejecución de pruebas

Todas las pruebas

```bash
mvn clean test
```

Pruebas de integración

```bash
mvn verify
```

---

# Cobertura con JaCoCo

Generar reporte

```bash
mvn clean test jacoco:report
```

El reporte queda disponible en:

```
target/site/jacoco/index.html
```

---

# SonarQube

Para analizar la calidad del código:

```bash
mvn clean verify sonar:sonar
```

O mediante Sonar Scanner:

```bash
npx sonar-scanner
```

Se analizan:

* Bugs
* Vulnerabilidades
* Code Smells
* Cobertura
* Duplicación

---

# Integración Continua (GitHub Actions)

El proyecto incluye un pipeline automático que se ejecuta en cada:

* Push
* Pull Request

El pipeline realiza automáticamente:

1. Checkout del proyecto
2. Configuración de Java
3. Compilación
4. Ejecución de pruebas
5. Generación de cobertura
6. Análisis con SonarQube

Si alguna prueba falla, el pipeline finaliza con error y el merge queda bloqueado.

---

# Flujo DevOps implementado

```
Developer

    │

git push

    │

GitHub

    │

GitHub Actions

    │

Compile

    │

Unit Tests

    │

Integration Tests

    │

JaCoCo

    │

SonarQube

    │

Resultado del Pipeline
```

---

# Calidad del software

Durante este laboratorio se verificó:

* Correcto funcionamiento de la lógica de negocio.
* Integración entre capas.
* Cobertura mediante pruebas automatizadas.
* Calidad del código con SonarQube.
* Automatización del proceso mediante CI.

---

# Comandos útiles

Compilar

```bash
mvn clean compile
```

Ejecutar

```bash
mvn spring-boot:run
```

Pruebas

```bash
mvn test
```

Verificación completa

```bash
mvn verify
```

Cobertura

```bash
mvn jacoco:report
```

Sonar

```bash
npx sonar-scanner
```

---

# Resultados obtenidos

✔ Compilación exitosa

✔ Pruebas unitarias exitosas

✔ Pruebas de integración exitosas

✔ Mockito funcionando correctamente

✔ Cobertura generada mediante JaCoCo

✔ Pipeline GitHub Actions ejecutándose correctamente

✔ Integración con SonarQube

---

# Autor

**Sergio Cruz**

Fundamentos DevOps

Universidad de La Sabana

2026
