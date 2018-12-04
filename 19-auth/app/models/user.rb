class User < ApplicationRecord


  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
  end

end
