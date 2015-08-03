class Activity < ActiveRecord::Base
  has_many :scores
  has_many :users, through: :scores
  scope :challenges, -> {where(activity_type: 'Challenge')}
end
