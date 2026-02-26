# Usa una imagen base oficial de Node
FROM node:23

# Crea el directorio de trabajo
WORKDIR /app

# Copia los archivos
COPY package*.json ./
RUN npm install

COPY . .

# Compila el sitio Astro para producción
RUN npm run build

# Instala un servidor simple para servir los archivos
RUN npm install -g serve

# Expone el puerto donde se sirve el sitio
EXPOSE 4321

# Comando para servir los archivos estáticos
CMD ["serve", "dist", "-l", "4321"]
