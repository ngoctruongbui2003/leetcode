-- Cách 1
SELECT u.name, IFNULL(SUM(r.distance), 0) AS travelled_distance
FROM Users u
LEFT JOIN Rides r
ON u.id = r.user_id
GROUP BY r.user_id
ORDER BY SUM(r.distance) DESC, u.name

-- Cách 2
SELECT u.name, COALESCE(SUM(r.distance), 0) as travelled_distance
FROM Users u
LEFT JOIN Rides r
ON u.id = r.user_id
GROUP BY u.id
ORDER BY travelled_distance DESC, u.name
