# method 1

def calculator(operator, num_one, num_two)
  case operator
  when "+"
    return num_one + num_two
  when "-"
    return num_one - num_two
  when "*"
    return num_one * num_two
  when "/"
    return num_one / num_two
  else
    return "Invalid math. Try again"
  end
end

puts calculator("-", 5, 6)

# method 2

def positive_sum(array)
	array.select { |n| n > 0 }.reduce(0,:+)
end

# method 3

def upcase_string(word)
  word.upcase
end

# method 4

def student_infos(first_name, last_name, id, age, city, country)
  return { first_name: first_name, last_name: last_name, id: id, age: age, city: city, country: country }
end

# method 5

def print_student_name(hash)
  return "First Name: #{hash[:first_name]}, Last Name: #{hash[:last_name]}"
end

# method 6

def sum_numbers(num_one, num_two, num_three, num_four, num_five, num_six)
  return num_one + num_two + num_three + num_four + num_five + num_six
end

# method 7

def sunny_or_shinny(weather_string)
  if weather_string == "sunny"
    "I am going to the beach!"
  else
    "I am watching Netflix."
  end
end
