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
end
