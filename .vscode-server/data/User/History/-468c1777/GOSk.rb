class CustomersView
  def display_list(customers)
    customers.each_with_index do |customere, index|
      puts "#{index + 1}. #{meal.name}: #{meal.price}"
    end
  end

  def ask_user_for(word)
    puts "What is the #{word} of your meal?"
    return gets.chomp
  end

  def ask_user_for_index
    puts "Index?"
    print "> "
    return gets.chomp.to_i - 1
  end
end
