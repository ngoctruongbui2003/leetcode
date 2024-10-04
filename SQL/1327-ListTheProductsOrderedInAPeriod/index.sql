-- Cách 1
SELECT p.product_name, SUM(o.unit) AS unit
FROM Products p, Orders o
WHERE p.product_id = o.product_id AND o.order_date BETWEEN '2020-02-01' AND '2020-02-29'
GROUP BY p.product_id
HAVING SUM(o.unit) >= 100

-- Cách 2
SELECT p.product_name, 
        SUM(o.unit) AS unit
FROM Products p
JOIN Orders o 
    ON p.product_id = o.product_id
WHERE o.order_date LIKE '2020-02-%'
GROUP BY o.product_id
HAVING unit >= 100;

-- Cách 3
SELECT
    product_name,
    SUM(unit) AS unit
FROM Orders o
LEFT JOIN Products p ON o.product_id = p.product_id
WHERE DATE_FORMAT(order_date, '%Y-%m') = '2020-02'
GROUP BY 1
HAVING SUM(unit) >= 100

-- Cách 4
select p.product_name, sum(o.unit) as unit
from products p
left join orders o
on p.product_id   = o.product_id   
where extract(year_month from o.order_date) = 202002
group by o.product_id
having sum(o.unit) >=100
