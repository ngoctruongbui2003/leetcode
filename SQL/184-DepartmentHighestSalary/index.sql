-- Cách 1
SELECT
    d.name AS Department,
    e.name AS Employee,
    salary AS Salary
FROM Employee e, Department d
WHERE 
    e.departmentId = d.id
    AND e.salary = (
        SELECT MAX(salary)
        FROM Employee
        WHERE departmentId = d.id
    )

-- Cách 2
SELECT d.name Department, e.name Employee, e.salary Salary
FROM Employee e, Department d
WHERE e.departmentId = d.id AND (e.salary, e.departmentId) IN
(SELECT MAX(salary), departmentId FROM Employee GROUP BY departmentId)