class Message < ApplicationRecord
belongs_to :user
belongs_to :group

validates :body, preferences: true, uniless: :image?
end
