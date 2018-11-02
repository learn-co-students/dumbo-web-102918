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

  def like_tweet(tweet)
    Like.new(self, tweet)
  end

  def likes
    Like.all.select do |like|
      like.user == self
    end
  end

  def liked_tweets
    # returns a collection of
    # all the tweets this user has like
    self.likes.map do |like|
      like.tweet
    end
  end

  def liked_tweets_contents
    liked_tweets.map do |tweet|
      tweet.content
    end
  end

  def number_of_likes
    likes.count
  end

end
