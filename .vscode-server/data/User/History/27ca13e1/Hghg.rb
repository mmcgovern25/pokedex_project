require_relative "chicken"
class Chicken < Animals

  def female_talk
    @talk = "cluck cluck"
  end

  def male_talk
    @talk = "cock-a-doodle-doo"
  end

  end
