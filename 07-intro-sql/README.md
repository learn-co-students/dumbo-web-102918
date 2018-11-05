
What is SQL stand for?
- structured query language

What is SQL for?
- manage or interact with a database
- databases
- storing information in databases
- be able to pull out information so you might be able to do something useful with it

What is persistence?
- where you keep integrity with your data
- fancy word for saving stuff somewhere
-

Why save stuff somewhere?
- use information for metrics
- to know your customers
- save information after we leave a program







What kinds of operations are there in SQL?
CRUD
-----------
Create
- Create a table
- Creating a row
- INSERT
Read
- SELECT
Update
ex. users table take username "kevin" => "kevywevy"
- ALTER TABLE (for table)
- UPDATE
Delete (or Destroy)
- DROP TABLE
- DELETE

- SELECT
- CREATE
- INSERT INTO
- UPDATE
- DROP

# Doing work on the data (math, data manipulation)
- COUNT
- ADD
- SUM
- AVG














# Intro to SQL

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

## Challenges

1. Write the SQL to return all of the rows in the artists table?

```SQL
SELECT * FROM artists LIMIT 10;
```

2. Write the SQL to select the artist with the name "Black Sabbath"

```SQL
SELECT * FROM artists WHERE name = "Black Sabbath";
SELECT * FROM artists WHERE name LIKE "%Black Sabbath%";
```

3. Write the SQL to create a table named 'fans' with an auto incrementing ID that's a primary key and a name field of type text

```sql
CREATE TABLE fans (
  id INTEGER PRIMARY KEY,
  name TEXT
);
```


4. Write the SQL to alter the fans table to have a artist_id column type integer?

```sql
ALTER TABLE fans ADD COLUMN artist_id INTEGER;
```

5. Write the SQL to add yourself as a fan of the Black Eyed Peas? ArtistId **169**

```sql
INSERT INTO
  fans (name, artist_id, age)
  VALUES ("Bob", 169, 72);
```

6. UPDATE OUR OTHER fans to have ages

```sql
UPDATE fans
SET age = 100
WHERE
 name != "Bob";
```

6. Check out the [Faker gem](https://github.com/stympy/faker). `gem install faker`, open up irb, run `require 'faker'` and then generate a fake name for yourself using `Faker::Name.name`. How would you update your name in the fans table to be your new name?

   ```sql

   ```

7. Write the SQL to return fans that are not fans of the black eyed peas.

```sql
SELECT * FROM fans WHERE artist_id != 169;
```

8. Write the SQL to display all artists names next to their album title
artist_name   | album_title
-------------------------
black sabbath | ablum 1
black sabbath | ablum 2
black sabbath | ablum 3

SELECT * FROM albums WHERE ArtistId = 1;

```sql
SELECT albums.title as "album title", artists.name as "artist name" FROM albums
JOIN artists ON artists.ArtistId = albums.ArtistId
LIMIT 10;
```

9. Write the SQL to display artist name, album name and number of tracks on that album

```sql
SELECT
  artists.name as "artist name",
  albums.title as "album title",
  COUNT(tracks.Name) as "track count",
FROM albums
JOIN artists ON artists.ArtistId = albums.ArtistId
JOIN tracks ON tracks.AlbumId = albums.AlbumId
GROUP BY albums.Title;
```


10. DESTORY Our user....

```sql
DELETE FROM fans WHERE name = "Bob";
```










11. Write the SQL to return the name of all of the artists in the 'Pop' Genre

```sql

```

## BONUS (very hard)

12. I want to return the names of the artists and their number of rock tracks
    who play Rock music
    and have move than 30 tracks
    in order of the number of rock tracks that they have
    from greatest to least

```sql

```
