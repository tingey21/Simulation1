Create Table shelves(
shelf_id serial primary key Not Null,
shelf_name varchar(40) Not Null,
bin_count integer not null
)


Create Table bins(
bin_id serial primary key Not Null,
shelf_id integer Not Null,
name varchar(40) Not Null,
price decimal Not Null,
bin_number integer Not Null
)




