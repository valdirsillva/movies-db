# syntax=docker/dockerfile:1 Versão do dockerfile

# Define imagem node:18-alpine, é uma imagem leve do Node.JS baseado no Alpine 
FROM node:18-alpine

# Especificando diretório de trabalho 
WORKDIR /app

# Copia os arquivos/diretórios e adiciona no diretório de trabalho no container
COPY . .

# Executa comando RUN para instalar as dependências do projeto
RUN npm install --production

CMD [ "npm", "start" ]

EXPOSE 3000
