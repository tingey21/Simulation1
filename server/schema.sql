Create Table Shelves(
Shelf_id serial primary key Not Null,
shelf_name varchar(40) Not Null,
Bin_count integer not null
)


Create Table bins(
Bin_id serial primary key Not Null,
shelf_id integer Not Null,
name varchar(40) Not Null,
price decimal Not Null
)




