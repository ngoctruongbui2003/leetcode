-- Cách 1
WITH tb_temp AS (
    SELECT
        num,
        LAG(num, 1) OVER (ORDER BY id) AS num_1_prev,
        LAG(num, 2) OVER (ORDER BY id) AS num_2_prev
    FROM Logs
)

SELECT DISTINCT num AS ConsecutiveNums
FROM tb_temp
WHERE num = num_1_prev AND num = num_2_prev

-- Cách 2
SELECT DISTINCT l1.num as ConsecutiveNums
FROM Logs l1, Logs l2, Logs l3
WHERE l1.id = l2.id - 1 AND l2.id = l3.id - 1
    AND l1.num = l2.num AND l2.num = l3.num