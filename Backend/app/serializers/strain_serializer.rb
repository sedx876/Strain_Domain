class StrainSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :notes, :list 
end
