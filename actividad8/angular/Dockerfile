FROM node:20

RUN npm install -g @angular/cli

WORKDIR /app

RUN apt-get update && apt-get install -y git

# Clonar tu repositorio
RUN git clone https://github.com/racso3424/Curso_Lunes_Equipo_1_Sept_Dec.git /tmp/app

# Copiar SOLO la carpeta Angular
RUN cp -r /tmp/app/app-angular/* /app \
    && rm -rf /tmp/app

RUN npm install

RUN ng build --configuration production

EXPOSE 4200
