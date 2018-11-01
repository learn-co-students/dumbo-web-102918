require 'pry'
class User
  attr_reader :username

  def initialize(username)
    @username = username
  end

  def post_tweet(message)
    Tweet.new(message, self)
    "posted the tweet!"
  end

  def tweets
    # we need to only show the tweets
    # that have the same user object as the
    # instance of the user that is calling this method
    Tweet.all.select do |tweet|
      tweet.user == self
    end
  end
end
