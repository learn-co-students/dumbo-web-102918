class Cat < Mammal
  attr_accessor :fluffy_level

  def initialize(name, fluffy_level)
    super(name)
    @fluffy_level = fluffy_level
  end
  def meow
    "MEOWWWWWWW"
  end
end
