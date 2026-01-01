-- CTEs
# CTE stands for Common Table Expression 
# They are going to allow you to define a subquery block that you can then reference within the mian query.
# It's kind of like a query within a query except we are going to name the subquery block it'll be more standardize a little bit better formatted than actually using a subquery.
# Another puprpose of this CTE is to beable to perform more advanced calculations, something that you can easily do or you can't do at all within just one query.

WITH CTE_Example AS (
SELECT gender, AVG(salary) AS avg_salary, MAX(salary) AS max_salary, MIN(salary) AS min_salary, COUNT(salary) as count_salary
FROM employee_demographics dem
JOIN employee_salary sal
	ON dem.employee_id = sal.employee_id
GROUP BY gender)
SELECT * 
FROM CTE_Example;

WITH CTE_Example AS (
SELECT gender, AVG(salary) AS avg_salary, MAX(salary) AS max_salary, MIN(salary) AS min_salary, COUNT(salary) as count_salary
FROM employee_demographics dem
JOIN employee_salary sal
	ON dem.employee_id = sal.employee_id
GROUP BY gender)
SELECT AVG(avg_salary)
FROM CTE_Example;

# Another reason to use a CTE is just the readability 
# We can absolutely write this using a subquery, it's just going to be a little bit tougher to read.

SELECT AVG(avg_salary)
FROM (
SELECT gender, AVG(salary) AS avg_salary, MAX(salary) AS max_salary, MIN(salary) AS min_salary, COUNT(salary) as count_salary
FROM employee_demographics dem
JOIN employee_salary sal
	ON dem.employee_id = sal.employee_id
GROUP BY gender) AS example_subquery;

-- Additional functionalities
# when we build a CTE, we can only use it immediately after, we can use it right below it and reuse it.
WITH CTE_Example AS (
SELECT gender, AVG(salary) AS avg_salary, MAX(salary) AS max_salary, MIN(salary) AS min_salary, COUNT(salary) as count_salary
FROM employee_demographics dem
JOIN employee_salary sal
	ON dem.employee_id = sal.employee_id
GROUP BY gender)
SELECT AVG(avg_salary)
FROM CTE_Example;

SELECT AVG(avg_salary)
FROM CTE_Example;

# we can create multiple CTEs within just one.
# if we want to do more complex query or join multiple queries, you can do that within a CTE
WITH CTE_Example AS (
SELECT employee_id, gender, birth_date
FROM employee_demographics
WHERE birth_date > '1985-01-01'),
CTE_Example_2 AS (
SELECT employee_id, salary
FROM employee_salary
WHERE salary > 50000)
SELECT *
FROM CTE_Example
JOIN CTE_Example_2
	ON CTE_Example.employee_id = CTE_Example_2.employee_id;
    
WITH CTE_Example (Gender, Avg_Sal, Max_Sal, Min_Sal, Count_Sal) AS (
SELECT gender, AVG(salary), MAX(salary), MIN(salary), COUNT(salary)
FROM employee_demographics dem
JOIN employee_salary sal
	ON dem.employee_id = sal.employee_id
GROUP BY gender)
SELECT *
FROM CTE_Example;