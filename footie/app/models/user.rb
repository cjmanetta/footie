class User < ActiveRecord::Base
  has_secure_password
  # has_many :scores
  # has_many :activities, through :scores
  scope :players, -> {where(admin: false)}

  def total_score
    scores.sum(:value)
  end

  def player_stat(challenge)
    score = scores.find( challenge.id)
    score.value
  end

end
