-- Subqueries
# A subquery is a query within another query

# we want to select the employees that worked in actual parks and recreation department
SELECT *
FROM employee_demographics
WHERE employee_id IN (
	SELECT employee_id
    FROM employee_salary
    WHERE dept_id = 1 );
    
# we want to look at all the salaries but in a column next to it, we want to compare it to the average salary for eveeryone.
# so we'll know whether somebody's salary is above average or below average
SELECT first_name, salary,
( SELECT AVG(salary)
FROM employee_salary) AS Avg_Salary
FROM employee_salary; 

SELECT gender, AVG(age), MAX(age), MIN(age), COUNT(age)
FROM employee_demographics
GROUP BY gender;

SELECT AVG(max_age)
FROM (
SELECT gender, AVG(age) AS avg_age, MAX(age) AS max_age, MIN(age) AS min_age, COUNT(age) AS count_age
FROM employee_demographics
GROUP BY gender) AS Agg_table;