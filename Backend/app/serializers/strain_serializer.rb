class StrainSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :notes, :list

  private

  def lists
    ListSerializer.new(object.lists).attributes 
  end
  
end
