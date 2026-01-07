-- Temporary Tables
# They are tables that are only visible to the session that they're created in.
# so if you create a temp table right now and you exit out of MySQL and come back in, it's not going to be there anymore.
# It can be used for storing intermediate results for complex queries, somewhat like a CTE.
# But also for using it to manipilate data before i insert it into a more permanent table.

-- First way to create a temporary table
CREATE TEMPORARY TABLE temp_table (
first_name varchar(50),
last_name varchar(50),
favourite_movie varchar(100));

SELECT * 
FROM temp_table;

# another thing about temp tables is that you can insert data into it.alter
INSERT INTO temp_table
VALUES('Oluwatomisin','Akinsola','Reacher'),('Emmanuel','Oswald','Percy Jackson and the Olympians');

SELECT * 
FROM temp_table;

-- Second way
CREATE TEMPORARY TABLE salary_over_50k
SELECT *
FROM employee_salary
WHERE salary > 50000;

SELECT * 
FROM salary_over_50k;

# another thing about temp tables is that they last as long as you are within that session.
# if you create another query tab and run it will still work but if you exit out of MySQL, it won't.