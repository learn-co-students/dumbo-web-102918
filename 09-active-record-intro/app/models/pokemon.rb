class Pokemon < ActiveRecord::Base
  def attack
    "#{name} is attacking with #{move}!!!!!!"
  end

  def talk
    "#{name} #{name} #{name}!!"
  end
end
