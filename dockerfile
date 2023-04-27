# Usa a imagem base do Nginx
FROM nginx

# Remove o arquivo padrão de configuração do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia o conteúdo do projeto compilado para o diretório raiz do servidor web do Nginx
COPY build /usr/share/nginx/html

# Copia o arquivo de configuração personalizado para o diretório de configuração do Nginx
COPY nginx.conf /etc/nginx/conf.d/

# Expõe a porta 80 para o tráfego da web
EXPOSE 80