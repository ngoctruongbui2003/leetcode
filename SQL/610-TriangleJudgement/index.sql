-- Cách 1
SELECT x,y,z, IF(x+y > z AND y+z > x AND z+x > y , "Yes","No") AS triangle
FROM Triangle

-- Cách 2
SELECT *, IF (x + y > z AND x + z > y AND y + z > x AND x - y < z AND y - z < x AND x - z < y, 'Yes', 'No') AS triangle
FROM Triangle

-- Cách 3
select x,y,z, case when x+y<= z or x+z<=y or y+z<=x then 'No'
else 'Yes' end triangle 
from triangle