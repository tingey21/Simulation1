SELECT shelves.bin_count, shelves.shelf_name AS shelf_name, bins.*
FROM shelves LEFT JOIN bins ON shelves.shelf_id = bins.shelf_id WHERE shelves.shelf_id = $1 