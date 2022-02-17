# Passo a Passo

Instalar dependencias
```
yarn
```

ou

```
npm install
```

## Banco de Dados

Criando container postgres na maquina local

``` 
docker-compose up
```

ou

```
docker run --name contact-list -e "POSTGRES_USER=vrsoftware-test" -e "POSTGRES_PASSWORD=Docker" -p 5432:5432 -d postgres
```

## Variaveis ambiente

Criar arquivo .env e alterar as variaveis ambientes conforme o exemplo no arquivo (.env.example)

## Prisma

Utilizar migrations para banco de dados ja configuradas

```
yarn prisma migrate dev
```

## Iniciando api

Utilizar comando para iniciar api (DEV MODE)

```
yarn dev
```
