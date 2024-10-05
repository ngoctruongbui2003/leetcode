-- Cách 1
SELECT (
    SELECT DISTINCT salary 
    FROM Employee
    ORDER BY salary DESC
    LIMIT 1 OFFSET 1
    
) AS SecondHighestSalary 

-- Cách 2
SELECT MAX(salary) AS SecondHighestSalary 
FROM Employee
WHERE salary < (SELECT MAX(salary) FROM Employee);