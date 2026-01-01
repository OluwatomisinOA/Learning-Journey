-- JOINS
# Joins allow you to combine two tables or more if they have a common column that doesn't mean the column name has to be the exact same but at least the data within it are similar that you can use.
# There are several Joins like inner joins, outer joins and self joins.

-- INNER JOINS
# Inner Joins is going to return rows that are the same in both columns from both tables.alter

SELECT *
FROM employee_demographics;

SELECT *
FROM employee_salary;

SELECT *
FROM employee_demographics
JOIN employee_salary
	ON employee_demographics.employee_id = employee_salary.employee_id;
    
SELECT *
FROM employee_demographics
INNER JOIN employee_salary
	ON employee_demographics.employee_id = employee_salary.employee_id;
    
SELECT *
FROM employee_demographics AS dem
INNER JOIN employee_salary AS sal
	ON dem.employee_id = sal.employee_id;
    
SELECT dem.employee_id, age, occupation
FROM employee_demographics AS dem
INNER JOIN employee_salary AS sal
	ON dem.employee_id = sal.employee_id;

SELECT dem.employee_id, sal.first_name, age, occupation
FROM employee_demographics AS dem
INNER JOIN employee_salary AS sal
	ON dem.employee_id = sal.employee_id;
    
-- OUTER JOINS
# For outer joins, we have a left (outer) join and a right (outer) join.
# A left join is going to take everything from the left table even if there's no match in the join and then it will only return the matches from the right table.
# The exact opposite is true for a right join.alter

SELECT *
FROM employee_demographics AS dem
LEFT JOIN employee_salary AS sal
	ON dem.employee_id = sal.employee_id;

SELECT *
FROM employee_demographics AS dem
LEFT OUTER JOIN employee_salary AS sal
	ON dem.employee_id = sal.employee_id;
    
SELECT *
FROM employee_demographics AS dem
RIGHT JOIN employee_salary AS sa
	ON dem.employee_id = sal.employee_id;
    
-- SELF JOIN
# It is a join where you tie the table to itself.

SELECT *
FROM employee_salary;

SELECT *
FROM employee_salary emp1
JOIN employee_salary emp2
	ON emp1.employee_id = emp2.employee_id;
    
SELECT *
FROM employee_salary emp1
JOIN employee_salary emp2
	ON emp1.employee_id + 1 = emp2.employee_id;
    
SELECT emp1.employee_id AS emp_santa,
emp1.first_name AS first_name_santa,
emp1.last_name AS last_name_santa,
emp2.employee_id AS emp_num,
emp2.first_name AS emp_first_name,
emp2.last_name AS emp_last_name
FROM employee_salary emp1
JOIN employee_salary emp2
	ON emp1.employee_id + 1 = emp2.employee_id;
    
-- Joining Multiple Tables Together

SELECT *
FROM employee_demographics AS dem
INNER JOIN employee_salary AS sal
	ON dem.employee_id = sal.employee_id;
    
SELECT *
FROM parks_departments;

SELECT *
FROM employee_demographics AS dem
INNER JOIN employee_salary AS sal
	ON dem.employee_id = sal.employee_id
INNER JOIN parks_departments pd
	 ON sal.dept_id = pd.department_id;