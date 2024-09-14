# Etapa de construcción
FROM node:20 AS builder

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia solo los archivos de dependencias
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install --legacy-peer-deps

# Instala globalmente Angular CLI
RUN npm install -g @angular/cli@17

# Copia el resto de los archivos del proyecto
COPY . .

# Construye la aplicación en modo producción
RUN ng build --configuration=production

# Etapa de producción con Nginx
FROM nginx:latest

# Copia la configuración personalizada de Nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copia los archivos construidos desde la etapa de construcción
COPY --from=builder /app/dist/quintero-bank-front/browser /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Instrucción para ejecutar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
