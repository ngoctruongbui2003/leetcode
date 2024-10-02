# Write your MySQL query statement below
SELECT w2.id
FROM weather w1
JOIN weather w2
ON w1.recordDate = DATE_SUB(w2.recordDate, INTERVAL 1 DAY)
where w1.temperature < w2.temperature