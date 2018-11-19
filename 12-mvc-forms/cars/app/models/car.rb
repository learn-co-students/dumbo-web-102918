class Car < ActiveRecord::Base


  def self.search(search_term)
    if !search_term.nil? && search_term.length > 0
      self.all.where("lower(model) = ? or lower(make) = ?", search_term.downcase, search_term.downcase)
    else
      self.all
    end
  end 

end