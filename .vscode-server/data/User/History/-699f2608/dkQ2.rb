# TODO: code the Rice class
require_relative "crop"
class Rice < Crop

  def water!
    @grains = super - 5
  end

  def transplant!
    @grain += 10
  end
end
