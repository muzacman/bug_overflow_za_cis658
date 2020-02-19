class User < ApplicationRecord
  validates :fname, :lname, :email, presence: true

  # VALID_EMAIL_REGEX = URI::MailTo::EMAIL_REGEXP
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]*\.[a-z]+\z/i
  VALID_THUMBNAIL_REGEX = /[0-9a-zA-Z\\\/\_]*\.(gif|jpg|png)\Z/
  validates :email, presence: true, length: {maximum: 105},
            uniqueness: { case_sensitive: false },
            format: { with: VALID_EMAIL_REGEX }

  validates :thumbnail, allow_blank: true,
            format: {with: VALID_THUMBNAIL_REGEX,
                     message: 'must be a URL for GIF, JPG, or PNG image.'}

  has_many :bugs

end
