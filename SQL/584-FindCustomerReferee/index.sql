-- Cách 1: Sử dụng WHERE
SELECT name 
FROM Customer 
WHERE referee_id != 2 OR referee_id IS null

-- Cách 2: Sử dụng NOT IN
SELECT name
FROM Customer
WHERE id NOT IN (
    SELECT id
    FROM Customer
    WHERE referee_id = 2
)