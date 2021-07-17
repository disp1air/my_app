#!/bin/bash

set -e
set -u

function create_database() {
  local database=$1
  echo "Creating database '$database'"
  psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    SELECT 'CREATE DATABASE $database'
    WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = '$database')\gexec
    GRANT ALL PRIVILEGES ON DATABASE $database TO $POSTGRES_USER;
EOSQL
}

function create_datatable() {
  echo "Table creating......."
  psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE TABLE IF NOT EXISTS product (
      product_id INT NOT NULL,
      name varchar(250) NOT NULL,
      PRIMARY KEY (product_id)
    );
EOSQL
}

create_database $POSTGRES_DB
create_datatable
