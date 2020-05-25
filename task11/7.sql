SELECT datediff(current_date(), min(date(p.CREATED_AT))) as diff_days
FROM tweetsdb.post p;

#SELECT min(date(p.CREATED_AT)) as min_date, current_date() as cur_date, 
#datediff(current_date(), min(date(p.CREATED_AT))) as diff
#FROM tweetsdb.post p;

