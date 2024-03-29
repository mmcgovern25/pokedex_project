require "sqlite3"


def artist_count(db)
  results = db.execute("SELECT COUNT(*) FROM artists")[0][0]
  p results
  # TODO: use `db` to execute an SQL query against the database.
  # Should return an integer of the number of artists.
end

def number_of_rows(db, table_name)
  results = db.execute("SELECT COUNT(*) FROM #{table_name}")[0][0]
  p results
  # TODO: count number of rows in table table_name.
  # Should return an integer of the number of rows.
end

def sorted_artists(db)
  results = db.execute("SELECT(name) FROM artists ORDER BY name ASC").flatten
  # p results
  # TODO: return array of artists' names sorted alphabetically.
  # Should return an array of strings sorted alphabetically.
end

def love_tracks(db)
  results = db.execute("SELECT name FROM tracks WHERE name LIKE '%love%';").flatten
  # p results
  # TODO: return array of love songs' names.
  # Should return an array of strings (track names).
end

def long_tracks(db, min_length)
  results = db.execute("SELECT name FROM tracks #{min_length} > ORDER BY ASC")
  p results
  # TODO: return an array of tracks' names verifying: duration > min_length (minutes) sorted by length (ascending).
  # Should return an array of strings.
end

def albums_per_artist(db)
  results = db.execute("YOUR SQL QUERY")
  p results
  # TODO: return an array of arrays, each containing the artist's name and the number of albums they have
end
