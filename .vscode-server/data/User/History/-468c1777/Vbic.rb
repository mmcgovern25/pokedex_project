class CustomersView
  def display_list(array)
    customers.each_with_index do |customer, index|
      puts "#{index + 1}. #{customer.name}: #{customer.address}"
    end
  end

  def ask_user_for(word)
    puts "What is your #{word}?"
    return gets.chomp
  end

  def display_list
    puts "Which customer would you like to choose?"
  end
end
