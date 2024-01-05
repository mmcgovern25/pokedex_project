class View
  def display_list(meals)
    meals.each_with_index do |meal, index|
      puts "#{index + 1}. #{meals.name}: #{meals.price}"
    end
  end

  def ask_user_for(word)
    puts "What is the #{name} pf your meal?"
    print "> "
    return gets.chomp
  end

  def ask_user_for_index
    puts "Index?"
    print "> "
    return gets.chomp.to_i - 1
  end
end
