# Etapa 1: Construcción de la aplicación Angular
FROM node:20 as build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración y dependencias de Angular
COPY package*.json ./

# Instala las dependencias de Angular
RUN npm install --legacy-peer-deps

# Copia el código fuente de Angular
COPY . .

# Compila la aplicación Angular para producción
RUN npm run build --prod

# Etapa 2: Servir con Nginx
FROM nginx:alpine

# Copia los archivos compilados de Angular al directorio de Nginx
COPY --from=build /app/dist/quintero-bank-front /usr/share/nginx/html

# Exponer el puerto en el que correrá la aplicación (80 por defecto)
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
