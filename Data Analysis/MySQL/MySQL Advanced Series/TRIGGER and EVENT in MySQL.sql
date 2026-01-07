-- Triggers and Events

-- TRIGGER
# A trigger is a block of code that executes automatically when an event takes place on a specific table.
# A trigger happens when an event takes place.

SELECT *
FROM employee_demographics;

SELECT *
FROM employee_salary;

DELIMITER $$
CREATE TRIGGER employee_insert
	AFTER INSERT ON employee_salary
    FOR EACH ROW
BEGIN
	INSERT INTO employee_demographics (employee_id, first_name, last_name)
    VALUES (NEW.employee_id, NEW.first_name, NEW.last_name);
END $$
DELIMITER ;

INSERT INTO employee_salary (employee_id, first_name, last_name, occupation, salary, dept_id)
VALUES (24, 'Emmanuel', ' Oswald', 'Tech', 1000000, NULL);

-- EVENTS
# An event takes place when it is scheduled.
# it is useful for a lot of things like when you are importing data, you can pull data from a specific file path on a schedule.
# You can build reports that are exported to a file on a schedule, you can do a daily, weekly, monthly, yearly...alter
# SCENARIO : Let's say the Pawnee council comes up with some new legislation, they need to save some money especially in the Parks and Rec Department, they are spending too much and what they want to do is retire people who are over the age of 60 immediately and give them lifetime pay.
# So what we want to do is create an event that checks let's say every month or every day and then if they're over a specific age, we are going to delete them from the table and they will be retired.
DELIMITER $$
CREATE EVENT delete_retirees
ON SCHEDULE EVERY 1 DAY
DO
BEGIN
	DELETE
    FROM employee_demographics
    WHERE age >= 60;
END $$
DELIMITER ;

SELECT *
FROM employee_demographics;

# Let's say ypu couldn't create your event at all
SHOW VARIABLES LIKE 'event%';