class ListsController < ApplicationController
  before_action :set_list, only: [:show, :update, :destroy]

  def index
    @lists = List.all 
    render json: ListSerializer.new(@lists), status: 200
  end

  def show
    render json: ListSerializer.new(@list), status: 200
  end


private

  def set_list
    @list = List.find(params[:id])
  end

  def list_params
    params.require(:list).permit(:title)
  end
end
