class Status < ApplicationRecord

  validates :body, presence: true
  validate :body_has_exactly_three_words

  has_many :status_reactions
  has_many :reactions, through: :status_reactions

  def body_has_exactly_three_words
    if body && body.split.size != 3
      errors.add(:body, "can't be more or less than 3 words")
    end
  end

end
