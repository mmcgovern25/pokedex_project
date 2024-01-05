require "sqlite3"
db = SQLite3::Database.new("lib/db/jukebox.sqlite")
rows = db.execute("SELECT * FROM artists LIMIT 3")



def artist_count(db)
  results = db.execute("YOUR SQL QUERY")
  p results
  # TODO: use `db` to execute an SQL query against the database.
  # Should return an integer of the number of artists.
end

def number_of_rows(db, table_name)
  results = db.execute("YOUR SQL QUERY")
  p results
  # TODO: count number of rows in table table_name.
  # Should return an integer of the number of rows.
end

def sorted_artists(db)
  results = db.execute("YOUR SQL QUERY")
  p results
  # TODO: return array of artists' names sorted alphabetically.
  # Should return an array of strings sorted alphabetically.
end

def love_tracks(db)
  results = db.execute("YOUR SQL QUERY")
  p results
  # TODO: return array of love songs' names.
  # Should return an array of strings (track names).
end

def long_tracks(db, min_length)
  results = db.execute("YOUR SQL QUERY")
  p results
  # TODO: return an array of tracks' names verifying: duration > min_length (minutes) sorted by length (ascending).
  # Should return an array of strings.
end

def albums_per_artist(db)
  results = db.execute("YOUR SQL QUERY")
  p results
  # TODO: return an array of arrays, each containing the artist's name and the number of albums they have
end
