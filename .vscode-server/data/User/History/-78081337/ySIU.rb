# TODO: code the Corn class
require_relative "crop"
class Corn < Crop
  def water!
    @grains = super
  end
end
