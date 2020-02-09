class TodoSerializer < ActiveModel::Serializer
  attributes :id, :title, :done, :category
end
