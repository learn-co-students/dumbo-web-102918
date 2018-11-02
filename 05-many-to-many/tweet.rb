class Tweet
  attr_accessor :user, :content

  @@all = []

  def initialize(content, user)
    @content = content
    @user = user

    @@all << self
  end

  def username
    # self = tweet1 || tweet2.username
    # in an instance method,
    # self is always the instance
    self.user.username
  end

  def self.all
    # self = Tweet
    @@all
  end

  def create_like(user)
    Like.new(user, self)
  end

  def likes
    Like.all.select do |like|
      like.tweet == self
    end
  end

  def likers
    likes.map do |like|
      like.user
    end
  end

  def liker_usernames
    likers.map do |user|
      user.username
    end
  end

end
