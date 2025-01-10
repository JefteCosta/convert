FROM node:22-alpine
WORKDIR /app
COPY package.json ./
RUN npm install pm2 -g
ENV PM2_PUBLIC_KEY ugnftm5irmpp0m9
ENV PM2_SECRET_KEY k2xwdc00z4al044
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3333
CMD ["pm2-runtime", "build/ace", "--", "serve", "--watch"]
