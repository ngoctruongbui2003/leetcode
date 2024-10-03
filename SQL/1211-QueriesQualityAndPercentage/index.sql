-- Cách 1
SELECT
    query_name,
    ROUND(SUM(rating / position) / COUNT(query_name), 2) 
        AS quality,
    ROUND(SUM(IF (rating < 3, 1, 0)) / COUNT(query_name) * 100, 2) AS poor_query_percentage
FROM Queries
GROUP BY query_name 
HAVING query_name IS NOT NULL

-- Cách 2
select query_name, 
round(avg(rating/position),2) as quality, 
round(avg(case when rating < 3 then 1 else 0 end)*100,2) as poor_query_percentage
from queries
where query_name is not null
group by query_name