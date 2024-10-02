select name from SalesPerson
where sales_id NOT in (
    select o.sales_id 
    from Orders o
    left join Company c
    on o.com_id = c.com_id
    where c.name = 'RED'
)