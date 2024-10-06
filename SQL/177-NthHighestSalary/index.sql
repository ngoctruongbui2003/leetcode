CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
    DECLARE nth_highest_salary INT;
    DECLARE offset1 INT;

    SET offset1 = N - 1;

    SELECT DISTINCT salary INTO nth_highest_salary
    FROM Employee
    ORDER BY salary DESC
    LIMIT 1 OFFSET offset1;

    RETURN nth_highest_salary;
END;