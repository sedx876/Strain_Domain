class StrainsController < ApplicationController

  def index
    @strains = Strain.all 
    render json: StrainSerializer.new(@strains), status: 200
  end

  def show
    render json: StrainSerializer.new(@strain), status: 200
  end

  def create
    @strain = Strain.new(strain_params)
    if @strain.save
      render json: StrainSerializer.new(@strain), status: 200
    else
      render json: @strain.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @strain = Strain.find(params[:id])
    @strain.destroy
  end

private

  def strain_params
    params.require(:strain).permit(:name, :notes, :list_id)
  end

end
