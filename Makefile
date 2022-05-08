APP=comic

setup: deps migrate
	

deps:
	npm install

migrate:
	npx sequelize-cli db:migrate