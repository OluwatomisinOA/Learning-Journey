-- LIMIT & ALIASING
# 'LIMIT' is used to specify how many rows you want in your output.

SELECT *
FROM employee_demographics;

SELECT *
FROM employee_demographics
LIMIT 3;

# Top 3 oldest people
SELECT *
FROM employee_demographics
ORDER BY age DESC
LIMIT 3;

SELECT *
FROM employee_demographics
LIMIT 2, 1;

SELECT *
FROM employee_demographics
ORDER BY age DESC
LIMIT 1, 1;

-- Aliasing
# Aliasing is just a way to change the name of the column.

SELECT gender, AVG(age) 
FROM employee_demographics
GROUP BY gender
HAVING AVG(age) < 40;

SELECT gender, AVG(age) AS avg_age
FROM employee_demographics
GROUP BY gender
HAVING avg_age < 40;

SELECT gender, AVG(age) avg_age
FROM employee_demographics
GROUP BY gender
HAVING avg_age < 40;