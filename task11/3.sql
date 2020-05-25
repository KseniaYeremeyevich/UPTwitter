SELECT *
FROM tweetsdb.post p
WHERE p.USER_ID = 10
and p.DESCRIPTION lik '%hello%';