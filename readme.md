

## About 
This is a Sqlite-Express API using Knex [ORM].The migrations tools can be used to create database table as follows

### Create knex file
This process is already performed for this project
```npx knex init```

### Create the migration file
This process is already performed for this project
```npx knex migrate:make create-table-name```

### Run migration
To create the data tables (in the data folder) and database , we can simply run the file.
```npx knex migrate:latest```


## Updating the tables
To recreate the tables `delete` the sqlite file in the data folder and run the `npx knex migrate:lates` which will recreate the database and tables

For more guides and tutorials visit my [blog](http://developermblog.wordpress.com)
