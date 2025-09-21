FROM nginx
MAINTAINER name RAWOOF
LABEL this is my first ever image on Docker
EXPOSE 80
COPY index.html /usr/share/nginx/html

