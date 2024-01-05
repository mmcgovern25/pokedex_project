class CustomersView
  def show_customers(customers)
    customers.each_with_index do |customer, index|
      puts "#{index + 1}. #{customer.name}: #{customer.address}"
    end
  end

  def ask_user_for(word)
    puts "What is your #{word}?"
    return gets.chomp
  end
end
