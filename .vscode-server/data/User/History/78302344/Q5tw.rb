class View
  def display_list(meals)
    meals.each_with_index do |meal, index|
      puts "#{index + 1}. #{meals.name}: #{meals.price}"
    end
  end

  def ask_user_for(stuff)
    puts "#{stuff.capitalize}?"
    print "> "
    return gets.chomp
  end

  def ask_user_for_index
    puts "Index?"
    print "> "
    return gets.chomp.to_i - 1
  end
end
