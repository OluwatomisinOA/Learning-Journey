-- WHERE Clause
# The "WHERE" Clause is used to help filter our records or rows of data.
# whereas the "SELECT" statement is used to filter or select actual columns
# So when we use the "WHERE' clause, we're going to return the rows that fulfill a specific condition

SELECT * 
FROM employee_salary;

SELECT * 
FROM employee_demographics;

SELECT * 
FROM employee_salary
WHERE first_name = 'Leslie';

SELECT * 
FROM employee_salary
WHERE salary > 50000;

SELECT * 
FROM employee_salary
WHERE salary >= 50000;

SELECT * 
FROM employee_salary
WHERE salary <= 50000;

SELECT *
FROM employee_demographics
WHERE gender = 'Female';

SELECT *
FROM employee_demographics
WHERE gender != 'Female';

SELECT *
FROM employee_demographics
WHERE birth_date > '1985-01-01';

-- AND OR NOT -- LOGICAL OPERATORS

SELECT *
FROM employee_demographics
WHERE birth_date > '1985-01-01'
AND gender = 'Male';

SELECT *
FROM employee_demographics
WHERE birth_date > '1985-01-01'
OR gender = 'Male';

SELECT *
FROM employee_demographics
WHERE birth_date > '1985-01-01'
OR NOT gender = 'Male';

SELECT * 
FROM employee_demographics
WHERE (first_name = 'Leslie' AND age = 44) OR age > 55;

-- LIKE Statement
# It is unique because we are looking for specific patterns, we are not necessarily looking for an exact match
# Two special sequences or characters you can add within your like statement: '%' which means anything and '_' means a specific value

SELECT * 
FROM employee_demographics
WHERE first_name LIKE 'a%';

SELECT * 
FROM employee_demographics
WHERE first_name LIKE '%e%';

SELECT * 
FROM employee_demographics
WHERE first_name LIKE 'a__';

SELECT * 
FROM employee_demographics
WHERE first_name LIKE 'a___';

SELECT * 
FROM employee_demographics
WHERE first_name LIKE 'a___%';

SELECT * 
FROM employee_demographics
WHERE birth_date LIKE '1989%';


