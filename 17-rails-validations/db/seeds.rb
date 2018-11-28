# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Status.destroy_all
Reaction.destroy_all

fire = Reaction.create(emoji: "🔥")
check = Reaction.create(emoji: "✅")
donut = Reaction.create(emoji: "🍩")
bagel = Reaction.create(emoji: "🥯")
puppy_eyes = Reaction.create(emoji: "🥺")
hair_flip = Reaction.create(emoji: "💁‍♀️")
anguish = Reaction.create(emoji: "😩")
grin = Reaction.create(emoji: "😁")
cold = Reaction.create(emoji: "🥶")
snow = Reaction.create(emoji: "❄️")


Status.create(body: "It's cold today")
Status.create(body: "Coffee is life")
Status.create(body: "It's gray today")
Status.create(body: "Bagels taste good")
Status.create(body: "Blogs are scary")
Status.create(body: "Rails is fun")
Status.create(body: "This app rules")
Status.create(body: "Something else too")


# Status.create(body: "It's cold today", reactions: [cold, anguish])
# Status.create(body: "Coffee is life", reactions: [donut])
# Status.create(body: "It's gray today", reactions: [anguish, puppy_eyes])
# Status.create(body: "Bagels taste good", reactions: [bagel])
# Status.create(body: "Blogs are scary", reactions: [anguish])
# Status.create(body: "Rails is fun", reactions: [hair_flip])
# Status.create(body: "This app rules", reactions: [hair_flip, check])
# Status.create(body: "Something else too", reactions: [check])




