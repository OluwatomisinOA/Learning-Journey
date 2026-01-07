-- GROUP BY
# When you use the 'GROUP BY' Clause in MySQL, it is going to group together rows that has the same values in the specified column(s) that you are grouping on. Once you have group those rows together, you can run an aggregate functions on those rows.

SELECT * 
FROM employee_demographics;

SELECT gender
FROM employee_demographics
GROUP BY gender;

SELECT gender, AVG(age)
FROM employee_demographics
GROUP BY gender;

SELECT gender, AVG(age), MAX(age), MIN(age), COUNT(age)
FROM employee_demographics
GROUP BY gender;

SELECT occupation
FROM employee_salary
GROUP BY occupation;



SELECT occupation, salary
FROM employee_salary
GROUP BY occupation, salary;

-- ORDER BY
# 'ORDER BY' is going to sort the result set in either ascending or descending order.

SELECT * 
FROM employee_demographics
ORDER BY first_name;

SELECT * 
FROM employee_demographics
ORDER BY first_name ASC;

SELECT * 
FROM employee_demographics
ORDER BY first_name DESC;

SELECT * 
FROM employee_demographics
ORDER BY gender;

SELECT * 
FROM employee_demographics
ORDER BY gender, age;

SELECT * 
FROM employee_demographics
ORDER BY age, gender;

SELECT * 
FROM employee_demographics
ORDER BY 5, 4;

SELECT * 
FROM employee_demographics
ORDER BY gender, age;