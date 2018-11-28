class Reaction < ApplicationRecord

  def emoji_a_lot
    self.emoji * 10
  end
end
