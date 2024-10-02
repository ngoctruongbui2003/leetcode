-- Cách 1
DELETE p
FROM Person p
LEFT JOIN (
    SELECT MIN(id) AS minimum, email
    FROM Person
    GROUP BY email
) t ON p.id = t.minimum
WHERE t.minimum IS NULL;

-- Cách 2
DELETE p1
FROM Person p1
JOIN Person p2
ON p1.email = p2.email
WHERE p1.id > p2.id