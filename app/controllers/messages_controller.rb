class MessagesController < ApplicationController
  before_action :set_group, only: [:index]

  def index
  end
  def set_group
    @group = Group.find(params[:group_id])
  end
end