class Pokemon < ActiveRecord::Base
  has_many :pokeballs
  has_many :trainers, through: :pokeballs

  def trainer_names
    trainers.map{|trainer| trainer.name}
  end

  def talk
    "#{name} #{name} #{name}!!"
  end
end
