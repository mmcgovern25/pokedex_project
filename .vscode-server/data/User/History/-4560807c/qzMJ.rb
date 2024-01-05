class SessionsView
  def ask_for(stuff)
    puts "#{stuff.capitalize}?"
    print "> "
    gets.chomp
  end

  def wrong_credentials
    puts "Wrong credentials! Try again."
  end
end
