require 'rest-client'
require 'json'
require 'pry'


# Ask a user for a word(s) to search for from our API (Google books)
# - puts What would you like to search? Gonna show ya some books." (ask the user to enter a book) *done
puts "What would you like to search? Gonna show ya some books."
# - save their response *done
user_response = gets.chomp
# - gets.chomp *done
# - validating user input? *MAYBE COME BACK TO IF WE HAVE TIME*

# get info From our API (use the api) and save the response
# url = "https://www.googleapis.com/books/v1/volumes?q=vegan+life"

# - Send something to the Google API? *done
  # - make a get request *done
response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{user_response}")
  # - parse our JSON into ruby!! yay! *done
  # - save our new ruby hash *done
response_hash = JSON.parse(response.body)

# Show the user the available books from the API
puts "Here are the books we found:"
puts "-" * 25
puts ""
# - find the books in our Hash
books = response_hash["items"]
# - how many books do we want to show the user? (only 5)
# - relevance? (google's api does this! Whoo!)
# - for each book, show just the:
  # - title
  # puts "the title is:"
  # puts books[0]["volumeInfo"]["title"]

  # response_hash.each do |k,v|
  #   if k == items
  # end
  #
  # response_hash["items"].each do |book|
  books.each do |book_hash|
    puts "the title is:"
    puts book_hash["volumeInfo"]["title"]
    puts "the authors are:"
    puts book_hash["volumeInfo"]["authors"]
    puts "the description is:"
    puts book_hash["volumeInfo"]["description"][0...50]
    puts "*" * 25
    puts ""
  end

  # - author(s)
  # puts "the authors are:"
  # puts books[0]["volumeInfo"]["authors"]
  # - desc
  # puts "the description is:"
  # puts books[0]["volumeInfo"]["description"]
  # - show the book's link *NICE TO HAVE
  # - ispn *NICE TO HAVE
  # - price *NICE TO HAVEa

# binding.pry

0












# user_response = gets.chomp

# reddit_url = "https://www.reddit.com/r/awww"
#
# response = RestClient.get("https://www.reddit.com/r/awww.json")
# response_hash = JSON.parse(response.body)

# example of accessing the first post's title:
# response_hash["data"]["children"][0]["data"]["title"]
