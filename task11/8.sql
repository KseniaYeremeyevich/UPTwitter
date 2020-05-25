SELECT u.USER_ID, u.NAME, count(*) as cnt_rec
FROM tweetsdb.user u
inner join tweetsdb.post p
on u.USER_ID = p.USER_ID
WHERE date(p.CREATED_AT) = current_date()
GROUP BY u.USER_ID,u.NAME
HAVING count(*) > 3;
