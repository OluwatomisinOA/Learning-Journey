-- String Functions
# They are built-it within functions in MySQL that would help us use strings and work with strings differently.

-- LENGTH

# gives the length of how long the string is.
SELECT LENGTH('skyfall');

SELECT first_name, LENGTH(first_name)
FROM employee_demographics
ORDER BY 2;

-- UPPER
SELECT first_name, UPPER(first_name)
FROM employee_demographics;

SELECT first_name, LOWER(first_name)
FROM employee_demographics;

-- TRIM
SELECT TRIM('				sky				');

SELECT LTRIM('				sky				');

SELECT RTRIM('				sky				');

-- LEFT & RIGHT & SUBSTRINGS
SELECT first_name,
LEFT(first_name, 4),
RIGHT(first_name, 3),
SUBSTRING(first_name, 3, 2)
FROM employee_demographics;

# Use case: let's say we have the birth date and the middle column/value is the month and we are running some query, we want to find the month that everyone is born, we can do that very easily using SUBSTRING.
SELECT first_name,
birth_date,
SUBSTRING(birth_date, 6, 2)
FROM employee_demographics;

-- REPLACE
# It will replace a specific character with a differemt character that you want.

SELECT first_name, 
REPLACE(first_name, 'A', 'B')
FROM employee_demographics; 

-- LOCATE
SELECT LOCATE('x', 'Alexander');

SELECT first_name, LOCATE('An', first_name)
FROM employee_demographics;

-- CONCAT
SELECT first_name, last_name, 
CONCAT(first_name, ' ', last_name)
FROM employee_demographics;