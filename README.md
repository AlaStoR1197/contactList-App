App para gestionar contactos

**Frontend**
- **Ruta**: `Frontend`
- **Tecnología**: Angular
- **Puerto**: 4200
- **Comandos**:

```powershell
cd Frontend
npm install
npm run start
```
- **Acceso**: `http://localhost:4200`

**Backend**
- **Ruta**: `Backend`
- **Tecnología**: NestJS (con Prisma y Docker)
- **Puerto**: 3001
- **Comandos**:

```powershell
cd Backend
npm install
npm run start:dev
```
- **Base de datos (Postgres)**: Levantada con Docker Compose.
- **Comando para la DB**:

```powershell
docker compose up -d
```
- **Notas**: Asegúrate de tener Docker en ejecución antes de levantar la base de datos. Si hay problemas al levantar el servidor, asegurarse de ejecutar el comando de npx prisma generate para que funcionen prisma correctamente.