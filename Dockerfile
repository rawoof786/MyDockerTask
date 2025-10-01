FROM nginx
MAINTAINER name is RAWOOF
LABEL this is my Docker deployment task in jenkins pipeline
copy index.html /usr/share/nginx/html
