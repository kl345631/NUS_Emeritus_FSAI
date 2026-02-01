-- 2) 
-- Inserting into Books
INSERT INTO `library_mgt_system`.Books (book_id, title, author, isbn, quantity, unit_price, purchase_date) VALUES
(1, 'Lost Lambs', 'Madeline Cash', '9780374619237', 10, 50, 2024-01-02),
(2, 'The School of Night', 'Karl Ove Knausgaard', '9780593832806', 2, 60, 2022-02-02),
(3, 'Now I Surrender', 'Álvaro Enrigue', '9780593084076', 5, 70, 2022-03-02),
(4, 'My Husband''s Wife', 'Alice Feeney', '9781250284532', 4, 80, 2022-04-02),
(5, 'Dear Debbie', 'Freida McFadden', '9781728296210', 6, 90, 2022-05-02),
(6, 'Vigil', 'George Saunders', '9780525511380', 3, 40, 2022-06-02),
(7, 'Half His Age', 'Jennette McCurdy', '9781982185855', 5, 30, 2022-07-02),
(8, 'Woman Down', 'Colleen Hoover', '9781538742570', 8, 50, 2022-08-02),
(9, 'Anatomy of an Alibi', 'Ashley Elston', '9781984849281', 4, 60, 2022-09-02),
(10, 'London Falling', 'Patrick Radden Keefe', '9780385544979', 2, 70, 2022-10-02),
(11, 'The First Time I Saw Him', 'Laura Dave', '9781501160370', 5, 80, 2022-11-02),
(12, 'The Future Saints', 'Ashley Winstead', '9781728284477', 3, 90, 2022-12-02),
(13, 'Kin', 'Tayari Jones', '9781616208776', 4, 40, 2022-12-30);

UPDATE `library_mgt_system`.`books` SET `total_price` = unit_price * quantity WHERE (`book_id` = '1');
UPDATE `library_mgt_system`.`books` SET `total_price` = unit_price * quantity WHERE (`book_id` = '2');
UPDATE `library_mgt_system`.`books` SET `total_price` = unit_price * quantity WHERE (`book_id` = '3');
UPDATE `library_mgt_system`.`books` SET `total_price` = unit_price * quantity WHERE (`book_id` = '4');
UPDATE `library_mgt_system`.`books` SET `total_price` = unit_price * quantity WHERE (`book_id` = '5');
UPDATE `library_mgt_system`.`books` SET `total_price` = unit_price * quantity WHERE (`book_id` = '6');
UPDATE `library_mgt_system`.`books` SET `total_price` = unit_price * quantity WHERE (`book_id` = '7');
UPDATE `library_mgt_system`.`books` SET `total_price` = unit_price * quantity WHERE (`book_id` = '8');
UPDATE `library_mgt_system`.`books` SET `total_price` = unit_price * quantity WHERE (`book_id` = '9');
UPDATE `library_mgt_system`.`books` SET `total_price` = unit_price * quantity WHERE (`book_id` = '10');
UPDATE `library_mgt_system`.`books` SET `total_price` = unit_price * quantity WHERE (`book_id` = '11');
UPDATE `library_mgt_system`.`books` SET `total_price` = unit_price * quantity WHERE (`book_id` = '12');
UPDATE `library_mgt_system`.`books` SET `total_price` = unit_price * quantity WHERE (`book_id` = '13');

-- Inserting into Members
INSERT INTO `library_mgt_system`.`members` (member_id, name, email, join_date) VALUES (101, 'Alice Smith', 'alice.s@example.com', '2026-01-05');
INSERT INTO `library_mgt_system`.`members` (member_id, name, email, join_date) VALUES (102, 'Bob Johnson', 'bob.j@email.com', '2026-01-12');
INSERT INTO `library_mgt_system`.`members` (`member_id`, `Name`, `email`, `join_date`) VALUES ('103', 'Harry Dotter', 'harrydot@email.com', '2023-01-11');
INSERT INTO `library_mgt_system`.`members` (`member_id`, `Name`, `email`, `join_date`) VALUES ('104', 'Tom Riddley', 'tom.riddy@email.com', '2024-01-03');
INSERT INTO `library_mgt_system`.`members` (`member_id`, `Name`, `email`, `join_date`) VALUES ('105', 'David Foo', 'davefoo@email.com', '2023-02-28');
INSERT INTO `library_mgt_system`.`members` (`member_id`, `Name`, `email`, `join_date`) VALUES ('106', 'Chloe Ng', 'chloe.ng@email.com', '2026-02-11');
INSERT INTO `library_mgt_system`.`members` (`member_id`, `Name`, `email`, `join_date`) VALUES ('107', 'Noel Wu', 'noelwu@email.com','2024-06-01');
INSERT INTO `library_mgt_system`.`members` (`member_id`, `Name`, `email`, `join_date`) VALUES ('108', 'Ryan Hoo','ryanhoo@email.com','2025-05-06');
--- update email of member
update `library_mgt_system`.`members`
set email = 'davidfoo@email.com'
where member_id = '105'
and email = 'davefoo@email.com'

-- Inserting into Borrow_Record
INSERT INTO `library_mgt_system`.borrow_record (book_id, member_id, issue_date, due_date, return_date) VALUES
(1, 101, '2026-01-02', '2026-01-16','2026-01-14'),
(3, 102, '2026-01-15', '2026-01-29','2026-02-03'),
(11, 105, '2025-01-20', '2025-02-04','2026-02-04');
INSERT INTO `library_mgt_system`.borrow_record (book_id, member_id, issue_date, due_date, return_date) VALUES
(4, 105, '2024-01-03', '2024-01-17','2024-01-14'),
(10, 104, '2024-01-30', '2024-02-13','2024-02-16'),
(13, 107, '2024-06-02', '2024-06-16','2024-06-15'),
(1, 104, '2024-06-02', '2026-06-16','2026-06-24'), 
(5, 105, '2023-03-01', '2023-03-14','2023-03-24');
-- delete borrow record id
delete from  `library_mgt_system`.borrow_record
where record_id = '3'

-- 3)
-- a) Orders were placed in January 2024
SELECT * FROM library_mgt_system.borrow_record as br
inner join  library_mgt_system.books as bk
on br.book_id = bk.book_id
inner join library_mgt_system.members as m
on m.member_id = br.member_id
WHERE br.issue_date >= '2024-01-01'

-- b) The order total exceeds $500
-- c) Your query should only include columns for OrderID, OrderDate, and TotalAmount in the result. 
SELECT book_id, title, purchase_date, sum(total_price) FROM library_mgt_system.books
where total_price >= 500
and purchase_date >= '2024-01-01'
group by book_id, title, purchase_date

-- 4)
-- a) Using the tables Products, Orders, and OrderDetails, write an SQL query.
-- b) The query should retrieve information on products ordered in June 2024.
-- c) The result should display: 
-- ProductName: The name of the product. 
-- QuantityOrdered: The quantity of each product in the order. 
-- OrderDate: The date the order was placed. 

select distinct cast(OrderDate as date) as OrderDate, ord_de.OrderQty, prd.Name 
from saleslt.salesorderheader as ord
inner join saleslt.salesorderdetail as ord_de on ord.salesOrderID = ord_de.salesOrderID
inner join saleslt.product as prd on ord_de.ProductID = prd.ProductID
where cast(OrderDate as date) = '2008-06-01'
