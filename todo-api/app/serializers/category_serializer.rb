class CategorySerializer < ActiveModel::Serializer
  attributes :id, :title, :todos
  has_many :todos
end
