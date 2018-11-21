Student.destroy_all

my_homies = ["Amir","Anik","Brian","Carlo","Eizik","Jessie","LaTarisha","Manny","Naomi","Omar","Raquel","Robert","Sanjay","Shuo","Skyler","Terrance"]

my_homies.each do |homie_name|
    Student.create(
        name: homie_name,
        favorite_band: "Nickelback",
        favorite_movie: "The Room",
        age: 15
    )
end
