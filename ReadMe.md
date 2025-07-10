# 🐾 AdoptMe API

Proyecto final Backend 3: API para la gestion de usuarios, mascotas y adopciónes.  
Desarrollado con Node.js, Express y MongoDB.

---

## Imagen Docker

Link de DockerHub a la imágen:

[https://hub.docker.com/repository/docker/goriaberasturi13/adoptme-api/general](https://hub.docker.com/repository/docker/goriaberasturi13/adoptme-api/general)

---

## Ejecucion del proyecto con Docker

### 1. Descargar la imagen

```bash
docker pull goriaberasturi13/adoptme-api
```

### 2. Ejecucion del contenedor

```bash
docker run -p 8080:8080 \
  -e MONGO_URL=MONGO_URL=mongodb+srv://goricarhue2015:baseprueba123@cluster0.ft6cz.mongodb.net/adoptme-74605-dev \
  goriaberasturi13/adoptme-api
```

---

## Sobre el proyecto

### Endpoints

- `POST /api/sessions/register` – Registro de usuario
- `POST /api/sessions/login` – Login de usuario
- `GET /api/pets` – Obtener mascotas
- `POST /api/pets` – Crear mascota
- `POST /api/adoptions/:uid/:pid` – Registrar adopción
- `GET /api/adoptions` – Obtener todas las adopciones
- `GET /api/adoptions/:aid` – Obtener una adopción específica
- `GET /api/mocks/mockingusers` – Usuarios falsos
- `GET /api/mocks/mockingpets` – Mascotas falsas

---

## 🧪 Tests

El proyecto incluye tests funcionales usando:

- Mocha
- Chai
- Supertest

Para correr los tests:

```bash
npm test
```

---

## Tecnologías utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- Docker
- Mocha + Chai + Supertest