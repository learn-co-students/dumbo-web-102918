class Tweet
  attr_accessor :message, :username, :id

  def initialize(message, username, id=nil)
    @message = message
    @username = username
    @id = id
  end

  def self.all
    sql = <<-SQL
      SELECT * FROM tweets
    SQL

    response = DB[:conn].execute(sql)

    response.map do |tweet_row_hash|
      # make a list of tweet instances
      # tweet_row_hash > tweet
      Tweet.new(tweet_row_hash["message"], tweet_row_hash["username"], tweet_row_hash["id"])
    end
  end

  def self.create(message, username)
    tweet = Tweet.new(message, username)
    tweet.save
    tweet
  end

  def self.find(id)
    sql = <<-SQL
      SELECT * FROM tweets WHERE id=#{id}
    SQL
    tweet_row_hash = DB[:conn].execute(sql)[0]
    if tweet_row_hash
      Tweet.new(tweet_row_hash["message"], tweet_row_hash["username"], tweet_row_hash["id"])
    else
      nil
    end
  end

  def update_message(new_message)
    self.message = new_message
    self.save
  end

  def update_username(new_username)
    self.username = new_username
    self.save
  end

  def save
    if self.persisted?
      sql = <<-SQL
        UPDATE tweets
        SET
          username = "#{@username}",
          message = "#{@message}"
        WHERE id=#{@id}
      SQL
      DB[:conn].execute(sql)
      self
    else
      sql = <<-SQL
        INSERT INTO tweets
        (username, message)
        VALUES ("#{@username}", "#{@message}")
      SQL
      DB[:conn].execute(sql)
      last_tweet = Tweet.all.last
      @id = last_tweet.id
      self
    end
  end

  def persisted?
    !!self.id
  end

  def destroy
    sql = <<-SQL
      DELETE FROM tweets WHERE id=#{@id}
    SQL
    DB[:conn].execute(sql)
    "deleted!"
  end
end
