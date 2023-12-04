docker build --no-cache -f SQL\Dockerfile.PostgreSql -t hrdepartment/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t hrdepartment/app ../..
