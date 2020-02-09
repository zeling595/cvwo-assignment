class Api::V1::CategoriesController < ApplicationController
  def index
    render json: Category.all
    # categories = Category.order('created_at DESC');
    # render json: {status: 'SUCCESS', message: 'Loaded categories', data: categories}, status: :ok
  end

  def create
    category = Category.create(category_params)
    if not category_already_existed
      render json: {status: 'SUCCESS', message: 'Created category', data: category}, status: :ok
    end
  end

  def update
    category = Category.find(params[:id])
    if category.update_attributes(category_params)
      render json: {status: 'SUCCESS', message: 'Updated category', data: category}, status: :ok
    else
      render json: {status: 'ERROR', message: 'Not updated', data: category.errors}, status: :unprocessable_entity
    end
  end 

  def destroy
    category = Category.find(params[:id])
    category.destroy
  end

  private
    def category_params
      params.require(:category).permit(:title)
    end

    def category_already_existed
      return Category.where('title = ?', category_params[:title]).exists?   
    end
end