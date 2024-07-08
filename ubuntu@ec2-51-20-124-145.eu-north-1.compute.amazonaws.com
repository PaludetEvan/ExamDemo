version: '3.8'

services:  
  pre-esame-db:
    image: postgres:latest
    ports:
      - '5432:5432'
    restart: always
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: pre-esame-db
    volumes:
      - pre-esame-db:/var/lib/psql
    networks:
      - pre-esame-network
    healthcheck:
      test:
        [
          'CMD',
          'ping',
          'pg_isready -h psql-next -U ${DB_USER} -p ${DB_PASSWORD}'
        ]
      interval: 45s
      retries: 5
      start_period: 20s
      timeout: 10s


  pre-esame-app:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: pre-esame-app
    hostname: pr-esame-app
    restart: always
    ports:
      - '80:3000'
    env_file:
      - .env
    networks:
      - pre-esame-network
    depends_on:
      - pre-esame-db

networks:
  pre-esame-network:
    driver: bridge

volumes:
  pre-esame-db:
