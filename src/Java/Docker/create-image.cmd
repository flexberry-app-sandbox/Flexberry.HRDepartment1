docker build --no-cache -f SQL\Dockerfile.PostgreSql -t hrdepartment-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t hrdepartment-java/app ../../..
