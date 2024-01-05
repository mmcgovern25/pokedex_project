# TODO: Define your View class here, to display elements to the user and ask them for their input
class View
  def display_list(array_of_recipes)
    array_of_recipes.each_with_index do |recipe, index|
      puts "#{index + 1}. #{recipe.name} - #{recipe.description}"
      description = gets.chomp
    end

    def (ask_for_index)
      puts "index"
      index = gets.chomp
    end
  end
end
