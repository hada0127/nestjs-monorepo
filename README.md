# nestjs
nestjs monorepo 방식 + TypeORM + mysql

## test
하위모듈만
```
nest start api
```
watch 실행
```
nest start api --watch
```
## build
단일 실행파일로 생성되서 서버에서 의존성 체크 없이 바로 실행할 수 있음
```
nest build api
```

## clone 이후 설치
루트 디렉토리에 .env 파일 생성
```
API_PORT=3000
ADMIN_PORT=3001

JWT_EXPIRE=jwt 토큰 만료시간
JWT_SECRET=jwt 시크릿키

RDS_TYPE=mysql
RDS_HOSTNAME=127.0.0.1
RDS_PORT=3306
RDS_USERNAME=user
RDS_PASSWORD=password
RDS_DB_NAME=dbname
DB_SYNC=true
```

## 초기 설치(참고용)
@nestjs/cli는 미설치된 경우에만 설치
```
npm install -g @nestjs/cli
yarn add @nestjs/typeorm typeorm mysql typeorm-naming-strategies class-transformer
yarn add @nestjs/config
nest new monorepo-nestjs-typeorm
nest g app api
nest g app admin
nest g lib entity
```

> ./apps/monorepo-nestjs-typeorm 폴더 제거
> nest-cli.json 에서 monorepo-nestjs-typeorm 관련내용 제거
