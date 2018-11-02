require 'pry'

require_relative '../lib/set_on_fire'
require_relative '../lib/animal'
require_relative '../lib/mammal'
require_relative '../lib/bird'
require_relative '../lib/cat'
require_relative '../lib/dog'
require_relative '../lib/lizzard'
require_relative '../lib/monkey'


# Dog
# - bark
# - pee
# - bite
# - jump
# - lick
# - eat
# - poop

# Cat
# - meow
# - stare
# - alleric reaction???
# - ignore
# - pee
# - poop
# - eat

# Bird
# - eat
# -chirp
# - fly
# - poop

# Lizard
# - shed scales
# - flicker tounge
# - pee
# - poop
# - eat

# Monkey
# - pee
# - poop
# - eat
# - throw poop
# - pick lice

bird = Bird.new("tweety")
cat1 = Cat.new("Silvester", 4)
dog = Dog.new("Keekee")
lizzard = Lizzard.new("Charizard")
monkey = Monkey.new("Tarzan")

binding.pry
false
