# Guía de Despliegue en WHM

Esta guía detalla los pasos necesarios para desplegar la aplicación Next.js en un servidor con WHM/cPanel.

## Requisitos Previos

- Acceso a WHM/cPanel
- Node.js 20
- PM2
- npm 11.6.1 o superior
- Acceso SSH al servidor
- Dominio configurado y apuntando al servidor

## Preparación del Servidor

### 1. Instalar Node.js y PM2 (si no está instalado, se trabajar con NVM)


```bash
# Instalar Node Version Manager (nvm)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash 

# Cargar nvm
# Para bash (editar ~/.bashrc) 
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bashrc 
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.bashrc 
echo '[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"' >> ~/.bashrc 
 
# Recargar el perfil 
source ~/.bashrc 

# Instalar Node.js 
nvm install 20.16.0 

# Instalar PM2 
npm install pm2 -g

# Verificar instalación
node --version
npm --version
pm2 --version
```

### 2. Configurar el servidor WHM

1. Crear el archivo de configuración
  > /etc/apache2/conf.d/userdata/ssl/2_4/grandresidencesr/next.grandresidencesrivieracancun.com/include.conf\
  > **grandresidencesr** => Nombre de usuario del servidor\
  > **next.grandresidencesrivieracancun.com** => Dominio del servidor

2. Contenido del archivo:

```apache
ProxyPreserveHost On
ProxyPass /.well-known !

# >>>> En caso de querer proteger el acceso 
<Proxy http://64.91.241.6:3000/*>
    AuthType Basic
    AuthName "Acceso Restringido"
    AuthUserFile /home/grandresidencesr/.htpasswds/passwd
    Require valid-user
</Proxy>
# <<<< En caso de querer proteger el acceso

ProxyPass / http://64.91.241.6:3000/
ProxyPassReverse / http://64.91.241.6:3000/
```

3. Restart Apache
```bash
   /usr/local/cpanel/scripts/rebuildhttpdconf #Reconstruir la configuración
   /usr/local/cpanel/scripts/restartsrv_httpd #Reiniciar el servicio
```

### 3. Levantar el servicio

```bash
# Levantar el servicio
  npm run build #Construir el proyecto
  pm2 start ecosystem.config.js #Levantar el servicio
```





