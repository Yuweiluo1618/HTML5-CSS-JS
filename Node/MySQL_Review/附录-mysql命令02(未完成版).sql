--数据库操作前的准备
	--参见课件12.1


-- 查询练习
	-- 查询所有字段
	-- select * from 表名;
	select * from students;

 


	-- 查询指定字段
	-- select 列1,列2,... from 表名;
	select name, age from students;


	
	-- 使用 as 给字段起别名
	-- select 字段 as 名字.... from 表名;
	select name as n, age as a from students;



	-- select 表名.字段 .... from 表名;
	select students.name from students;


	
	
	-- 可以通过 as 给表起别名
	-- select 别名.字段 .... from 表名 as 别名;
	select s.name from students as s;




	-- 消除重复行(查性别)
	-- distinct 字段 
	select distinct gender from students;


	

-- 条件查询
	-- 比较运算符
		-- select .... from 表名 where .....
		-- >
		-- 查询年纪大于18岁的学生信息
		select * from students where age >= 18;



		-- <
		-- 查询年纪小于18岁的学生信息
		select * from students where age <= 18;

		
		

		-- >=
		-- <=
		-- 查询小于或者等于18岁的学生信息
		select * from students where age <= 18;



		-- =
		-- 查询年龄为18岁的所有学生信息
		select * from students where age = 18;




		-- != 或者 <>
		-- 查询年龄不为18岁的所有学生信息
		select * from students where age != 18;

		

	-- 逻辑运算符
		-- and  /  between .. and ..
		-- 18和28之间的所以学生信息
		select * from students where age >= 18 and age <= 28;
		select * from students where age between 18 and 28;


		-- 18岁以上的女性的学生信息
		select * from students where age > 18 and gender = "女";


		-- or
		-- 18以上或者身高高过180(包含)以上的学生信息
		select * from students where age > 18 or height >= 180.00;
		

		-- not
		-- 不在 18岁以上的女性 这个范围内的信息
		-- select * from students where not (age>18 and gender=2);
		select * from students where not(age > 18 and gender = "女");



	-- 模糊查询(where name like 要查询的数据)
		-- like 
		-- % 替换任意个
		-- _ 替换1个
		-- 查询姓名中 以 "小" 开始的名字的学生信息
		select * from students where name like "x%";

		

		-- 查询姓名中 有 "小" 所有的名字的学生信息
		select * from students where name like "%x%";

		

		-- 查询有2个字的名字的学生信息
		select * from students where name like "__";

		


		-- 查询有3个字的名字的学生信息
		select * from students where name like "___";


		

		-- 查询至少有2个字的名字的学生信息
		select * from students where name like "__%";

		


	-- 范围查询
		-- in (1, 3, 8)表示在一个非连续的范围内
		-- 查询 年龄为18或34的姓名的学生信息
		select * from students where age in(18, 34);
	


		

		-- not in 不非连续的范围之内
		-- 年龄不是 18或34岁的学生信息
		select * from students where age not in(18, 34);



		
		-- between ... and ...表示在一个连续的范围内
		-- 查询 年龄在18到34之间的学生信息
		select * from students where age between 18 and 34;
	

		
		

		
		-- not between ... and ...表示不在一个连续的范围内
		-- 查询 年龄不在18到34之间的学生信息
		select * from students where age not between 18 and 34;

		
		

	-- 空判断
		-- 判空is null
		-- 查询身高为空的学生信息
		select * from students where height is null;
		
		


		-- 判非空is not null
		select * from students where height is not null;
		


-- 排序
	-- order by 字段
	-- asc
	-- asc从小到大排列，即升序
	-- desc
	-- desc从大到小排序，即降序
	-- 查询年龄在18到34岁之间的男性，按照年龄从小到大到排序
	select * from students where gender = 1 and age between 18 and 34 order by age asc;

	

	


	-- 查询年龄在18到34岁之间的女性，身高从高到矮排序
	select * from students where gender = 2 and age between 18 and 34 order by height desc;
	
	

	-- order by 多个字段
	-- 查询年龄在18到34岁之间的女性，身高从高到矮排序, 如果身高相同的情况下按照年龄从小到大排序
	select * from students where gender = 2 and age between 18 and 34 order by height desc, age asc;
	


	
    -- 如果年龄也相同那么按照id从大到小排序
	select * from students where gender = 2 and age between 18 and 34 order by height desc, age asc, id desc;
    	


	
	r


-- 聚合函数
	-- 总数
	-- count
	-- 查询男性有多少人
	select count(*) from students where gender = 1;

	
	
	-- 最大值
	-- max
	-- 查询最大的年龄
	select max(age) as max_age from students;

	
	
	-- 查询女性的最高 身高
	select max(height) as max_height from students where gender = 2;
	


	-- 最小值
	-- min
	select min(height) from students where gender = 2;
	


	-- 求和
	-- sum
	-- 计算所有人的年龄总和
	select sum(age) from students;


	
	
	-- 平均值
	-- avg
	-- 计算平均年龄
	select avg(age) from students;
	
	
	


	-- 计算平均年龄 sum(age)/count(*)
	select sum(age)/count(*) from students;
	


	-- 四舍五入 round(123.23 , 1) 保留1位小数
	-- 计算所有人的平均年龄，保留2位小数
	select round(avg(age), 2) from students; 

	


	-- 计算男性的平均身高 保留2位小数
	select round(avg(height), 2) from students where gender = 1;

	# 聚合函数计算的时候不会把null计算进去
	


-- 分组

	-- 分组的口诀
	-- select 分组的字段 from 表名 group by 分组字段;

	-- group by
	-- 按照性别分组,查询所有的性别
	select gender from students group by gender;




	# 每种   每类   
	-- 计算每种性别中的人数
	select gender, count(*) from students group by gender;
	select gender, count(gender) from students group by gender;
	




	-- group_concat(...)
	-- 查询同种性别中的姓名group_concat(name)
	select gender, group_concat(name) from students group by gender;
	


	
	-- 查询每组性别的平均年龄
	select gender, round(avg(age), 2) from students group by gender;

	


	-- having(注意having和group by 连用 having后通常也要跟 聚合函数)
	-- 查询平均年龄超过30岁的性别，以及姓名
	select gender, group_concat(name) from students group by gender having avg(age) > 30;
	
	

	
	-- 查询每种性别中的人数多于2个的信息
	-- select gender, count(*) from students group by gender having count(*) > 2;
	select gender, count(*) from students group by gender having count(*) > 2;

	


-- 分页
	-- limit start, count
	-- limit 放在最后面(注意)
	-- limit (要显示第几页-1) * 每页分多少个, 每页分多少个;

	-- 限制查询出来的数据个数
	-- 查询前5个数据
	select * from students limit 5;


	-- 每页分2个，要显示第1页
	select * from students limit 0, 2;
	

	-- 每页分2个，要显示第2页
	select * from students limit 2, 2;
	
	
	-- 每页分2个，要显示第3页
	select * from students limit 4, 2;


	-- 每页分2个，要显示第4页
	select * from students limit 6, 2;

	

	-- 每页分2个，显示第6页的信息, 按照年龄从小到大排序
		select * from students order by age asc limit 10, 2;
	

	
	
	 
-- select * from students where 
-- select 分组 from students group by 分组字段 having 条件查询
-- select * from 表a inner join 表b on 连接的条件

-- 连接查询
	-- inner join ... on
	-- select ... from 表A inner join 表B;
	-- 查询 有能够对应班级的学生以及班级信息
	select * from students inner join classes on students.cls_id = classes.id;
	


	-- 按照要求显示姓名、班级
	select students.name as stn, classes.name as cln from students inner join classes on students.cls_id = classes.id; 
	


	-- 给数据表起名字
	select s.name, c.name from students as s inner join classes as c on s.cls_id = c.id;



	-- 查询 有能够对应班级的学生以及班级信息，显示学生的所有信息 students.*，只显示班级名称 classes.name.
	select c.name, s.* from students as s inner join classes as c on s.cls_id = c.id;


	

	
	-- 在以上的查询中，将班级名显示在第1列
	select c.name, s.* from students as s inner join classes as c on s.cls_id = c.id;


	-- 查询 有能够对应班级的学生以及班级信息, 按照班级名进行排序
	select c.name, s.* from students as s inner join classes as c on s.cls_id = c.id order by c.name;
	

	
	-- 当时同一个班级的时候，按照学生的id进行从小到大排序
	select c.name, s.* from students as s inner join classes as c on s.cls_id = c.id order by c.name, s.id asc;


	

-- 子查询
	-- 标量子查询: 子查询返回的结果是一个数据(一行一列)
	-- 列子查询: 返回的结果是一列(一列多行)
	-- 行子查询: 返回的结果是一行(一行多列)
	
	-- 查询出高于平均身高的信息(height)
	select * from students where age > (select avg(age) from students);
	

	



	-- 查询学生的班级号能够对应的 学生名字
	-- select * from students where cls_id in(1,2);
	-- select id from classes;

	select name from students where cls_id in(select id from classes);



