class User < ApplicationRecord

  validates_uniqueness_of :username


  # def password=(password)
  #   self.password_digest = BCrypt::Password.create(password)
  # end

  # def authenticate(password)
  #   BCrypt::Password.new(self.password_digest) == password
  # end

  has_secure_password

end
