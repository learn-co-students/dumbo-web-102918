require 'pry'
# environment & application setup
# requiring relative and necessary files to make our app communicate
require "./user"
require "./tweet"
require "./like"

coffee_dad = User.new("coffee_dad")
kevin = User.new("kevywevy")
# kevin.post_tweet

tweet1 = Tweet.new("I <3 coffee", kevin)
tweet2 = Tweet.new("coffee RULZE", coffee_dad)
tweet3 = Tweet.new("yum yum in my tum coffee", coffee_dad)
tweet4 = Tweet.new("I staire into the darkness...", coffee_dad)
tweet5 = Tweet.new("Hello! I talk a lot.", kevin)
kevin.post_tweet("Yellsosdfl")
coffee_dad.post_tweet("gimmie dat coffee")

Like.new(kevin, tweet2)
Like.new(kevin, tweet3)
kevin.like_tweet(tweet4)
coffee_dad.like_tweet(tweet1)
tweet5.create_like(coffee_dad)
coffee_dad.like_tweet(tweet2)

# coffee_dad_total_tweets = 4
# kevin_total_tweets = 3



binding.pry

puts 'done'
