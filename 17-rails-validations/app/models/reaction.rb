class Reaction < ApplicationRecord

  validates :emoji, length: { in: 1..4 }

  def emoji_a_lot
    self.emoji * 10
  end
end
