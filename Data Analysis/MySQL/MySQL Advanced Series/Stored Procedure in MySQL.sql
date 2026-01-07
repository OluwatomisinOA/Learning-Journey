-- Stored Procedures
# They are ways to save your SQL code that you can reuse over and over again.
# When you save it, you can call that store procedure and it's going to execute all the code that you wrote within your store procedure.
# it's really helpful for storing complex queries, simplifying repititive code and just enhancing performance overall.

SELECT *
FROM employee_salary
WHERE salary >= 50000;

CREATE PROCEDURE large_salaries()
SELECT *
FROM employee_salary
WHERE salary >= 50000;

CALL large_salaries();

DELIMITER $$
CREATE PROCEDURE large_salaries2()
BEGIN
	SELECT *
    FROM employee_salary
    WHERE salary >= 50000;
    SELECT *
    FROM employee_salary
    WHERE salary >= 10000;
END $$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE large_salaries3()
BEGIN
	SELECT *
    FROM employee_salary
    WHERE salary >= 50000;
    SELECT *
    FROM employee_salary
    WHERE salary >= 10000;
END $$
DELIMITER ;

CALL large_salaries3()

-- Parameters
# They are variables that are passed as an input into a stored procedure and they allow the stored prcedure to accept an input value and place it into your code.

DELIMITER $$
CREATE PROCEDURE large_salaries4(p_employee_id INT)
BEGIN
	SELECT salary
    FROM employee_salary
    WHERE employee_id = p_employee_id;
END $$
DELIMITER ;

CALL large_salaries4(1);

