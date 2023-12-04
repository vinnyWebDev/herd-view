class Cow < ApplicationRecord
  belongs_to :user
  
   #These validation rules are in place to ensure correct data is gathered
   validates :tag, presence: true, length: { minimum: 5, maximum: 5 }, uniqueness: true
   validates :dob, presence: true
   validates :breed, presence: true
   validates :dam, presence: true, length: { minimum: 5, maximum: 5 }
   validates :docility, presence: true,  numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 5}
   validates :aggression, presence: true,  numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 5}
   validates :fertility, presence: true,  numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 5}
   validates :calving, presence: true,  numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 5}
   validates :milk, presence: true,  numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 5}
   validates :calfquality, presence: true,  numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 5}
 
end
