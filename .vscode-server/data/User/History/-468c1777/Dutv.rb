class CustomersView
  def show_customers(array)
    customers.each_with_index do |customere, index|
      puts "#{index + 1}. #{customer.name}: #{customer.address}"
    end
  end

  def ask_user_for(word)
    puts "What is your #{word}?"
    return gets.chomp
  end

  def ask_user_for_index
    puts "Index?"
    print "> "
    return gets.chomp.to_i - 1
  end

end
