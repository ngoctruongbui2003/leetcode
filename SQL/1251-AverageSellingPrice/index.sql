-- Cách 1
SELECT 
    p.product_id,
    IFNULL(ROUND(SUM(p.price * us.units) / SUM(us.units), 2), 0) AS average_price
FROM Prices p
LEFT JOIN UnitsSold us
ON p.product_id = us.product_id AND  us.purchase_date >= p.start_date AND us.purchase_date <= p.end_date
GROUP BY p.product_id

-- Cách 2
with cte as (
select a.product_id, round( (sum(b.units * a.price) / sum(units)), 2) as average_price
from Prices a left join UnitsSold b
on a.product_id = b.product_id
where b.purchase_date between start_date and end_date
group by a.product_id )

select * from cte

union

select product_id , 0 as average_price
from Prices
where product_id not in(select product_id from UnitsSold)