-- Case Statements
# A case statement allows you to have logic in your select statement.

SELECT first_name, last_name, age,
CASE
	WHEN age <= 40 THEN 'Young'
    WHEN age BETWEEN 40 AND 60 THEN 'Old'
    WHEN age >= 60 THEN 'Too Old'
END AS Age_Bracket
FROM employee_demographics;

# Scenario : The Pawnee Council sent out a memo of their bonus and pay increase for end of year and we need to follow it and determine people's end of the year salary or the salary going into the new year and if they got a bonus, how much was it.
-- Pay increase and Bonus
-- < 50000 = 5%
-- > 50000 = 7%
-- Finance = 10% bonus
# Our job is to figure out those pay increases as well as the bonus.

SELECT first_name, last_name, salary,
CASE
	WHEN salary < 50000 THEN salary * 1.05
    WHEN salary > 50000 THEN salary * 1.07
END AS New_Salary,
CASE
	WHEN dept_id = 6 THEN salary * .10
END AS Bonus
FROM employee_salary;