select user_id, count(task.id) as myCount from task group by user_id having mycount > 2