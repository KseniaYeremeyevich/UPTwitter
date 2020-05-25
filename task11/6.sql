SELECT u.USER_ID, u.NAME, sum(case when date(p.CREATED_AT) = date('2020-03-01') then 1 else 0 end) cnt_posts
FROM tweetsdb.user u
inner join tweetsdb.post p
on u.USER_ID = p.USER_ID
GROUP BY u.USER_ID,u.NAME;