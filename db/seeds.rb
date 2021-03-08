require "open-uri"

puts "Destroying all previous data..."
puts "......."
puts ".................."
puts "...........................100% DELETED!"

User.destroy_all
Bicycle.destroy_all
Customization.destroy_all
Upsell.destroy_all

puts "Creating new data!"

puts "1) USERS"
file_1 = URI.open('https://guillemdlopez.github.io/portfolio/images/profile.jpg')
user_1 = User.create!(first_name: 'Guillem', last_name: 'Delás', email: 'guillemdelas@hotmail.com', password: 'password', admin: true)
user_1.avatar.attach(io: file_1, filename: 'avatar-guillem.jpg', content_type: 'image/jpg')

puts "Attached picture to first user: #{user_1.full_name}"

file_2 = URI.open('https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80')
user_2 = User.create!(first_name: 'Antonio', last_name: 'Morales', email: 'amoralesrosa@gmail.com', password: 'password')
user_2.avatar.attach(io: file_2, filename: 'avatar-antonio.jpg', content_type: 'image/jpg')

puts "Attached picture to second user: #{user_2.full_name}"

puts "Created #{User.all.count} users: #{User.first.full_name} and #{User.second.full_name}"


puts "2) BICYCLES"

file_3 = URI.open('https://ibkbike.com/img/cms/turbo-levo-800c2-compressor.jpg')
bicy_1 = Bicycle.create!(name: 'Scott SUB Cross 10', description: 'The SCOTT SUB Cross 10 puts comfort and user-friendliness first. It is perfect for tours or daily shopping. With Remote Lockout suspension fork and Syncros components the SUB Cross is perfectly equipped.')
bicy_1.photo.attach(io: file_3, filename: 'coolest-bike-img.jpg', content_type: 'image/jpg')

puts "Attached picture to first bicycle: #{bicy_1.name}"

file_4 = URI.open('https://ibkbike.com/img/cms/Kenevo-800c2-compressor.jpg')
bicy_2 = Bicycle.create!(name: 'New School XC', description: 'This is the ultimate XC race bike. Ground-breaking suspension, aggressive geometry and feathery weight let you go full gas from the gun. Grip where others slip. Attack where others lack.')
bicy_2.photo.attach(io: file_4, filename: 'bike-fastest-img.jpg', content_type: 'image/jpg')

puts "Attached picture to second bicycle: #{bicy_2.name}"

file_5 = URI.open('https://ibkbike.com/img/cms/epic-pro-carb-800.jpg')
bicy_3 = Bicycle.create!(name: 'Epic Pro Carb 800', description: "A pure road bike. Light, smooth and ultra fast. The evolution of the classic race machine. 30 watts. That's how much power the drag-reducing tube shapes.", )
bicy_3.photo.attach(io: file_5, filename: 'epic-bike.jpg', content_type: 'image/jpg')

puts "Attached picture to third bicycle: #{bicy_3.name}"

file_6 = URI.open('https://ibkbike.uk/2381-home_default/s-works-epic-carbon-sram-axs-29-mtb-specialized-2020-gloss-dove-grey-rocket-red-crimson.jpg')
bicy_4 = Bicycle.create!(name: 'Fast and Furious 5000', description: 'No other hardtail descends as fast, climbs as nimbly, or kicks as hard. With the otherworldly performance of the Lefty Ocho, this is next-level cross-country performance.', )
bicy_4.photo.attach(io: file_6, filename: 'fast-furious-img.jpg', content_type: 'image/jpg')

puts "Attached picture to forth bicycle: #{bicy_4.name}"

file_7 = URI.open("https://www.sefiles.net/images/library/large/specialized-s-works-epic-men-s-works-carbon-evo-29-344708-12.jpg")
bicy_5 = Bicycle.create!(name: 'Balck Panther 2020', description: 'Black Panther 2020 chose powerful Shimano hydraulic disc brakes for their bombproof all-weather performance and fitted chunky, fast-rolling Schwalbe tyres for the best in grip and city street comfort.', )
bicy_5.photo.attach(io: file_7, filename: 'black-panther-img.jpg', content_type: 'image/jpg')

puts "Attached picture to fifth bicycle: #{bicy_5.name}"

file_8 = URI.open("https://cdn.mtbdatabase.com/wp-content/uploads/2019/12/26071729/2016-Specialized-Epic-Elite-Carbon-29-World-Cup-1-scaled.jpg")
bicy_6 = Bicycle.create!(name: 'Elite Carbon', description: "The Elite Carbon is your ticket to ride more and get to places you never thought possible. It's a comfortable and powerful bike that will inspire you to ride more than ever before.", )
bicy_6.photo.attach(io: file_8, filename: 'elite-carbon-img.jpg', content_type: 'image/jpg')

puts "Attached picture to sixth bicycle: #{bicy_6.name}"


file_9 = URI.open("https://specializedconceptstore.co.uk/content/products/2015-epic-elite-world-cup_307.jpg")
bicy_7 = Bicycle.create!(name: 'Elite World Cup', description: "Lots of fun and low weight - The World Cup is ideal to rip around the neighborhood for meet ups, running errands or Sunday fun days. It is comfortable, playful and above all easy to use. ", )
bicy_7.photo.attach(io: file_9, filename: 'epic-worldcup-img.jpg', content_type: 'image/jpg')

puts "Attached picture to seventh bicycle: #{bicy_7.name}"

file_10 = URI.open("https://www.bicispasaje.es/44196-large_default/bicicleta-conor-7200-29-2021.jpg")
bicy_8 = Bicycle.create!(name: 'Conor 7200', description: "If you've got the urge to explore, you'll need a bike that won't let you down. The Conor 7200 SL features Shimano's legendary XT 3x10 transmission - slick, reliable and with a gear to suit any situation. ", )
bicy_8.photo.attach(io: file_10, filename: 'conor-img.jpg', content_type: 'image/jpg')

puts "Attached picture to eighth bicycle: #{bicy_8.name}"


puts "Created #{Bicycle.count} bicycles"

puts "4) CUSTOMIZATIONS"

puts "Creating Wheel sizes....🚲"
puts "Wheel sizes for bicycle 1: #{bicy_1.name} ans bicycle 2: #{bicy_2.name}"
wheel_1 = Customization.create!(name: 'wheel size', value: '15 inches', price: rand(5.0..10.0).round(2), bicycle_id: bicy_1.id)
wheel_2 = Customization.create!(name: 'wheel size', value: '15 inches', price: rand(5.0..10.0).round(2), bicycle_id: bicy_2.id)
wheel_3 = Customization.create!(name: 'wheel size', value: '16 inches', price: rand(5.0..10.0).round(2), bicycle_id: bicy_1.id)
wheel_4 = Customization.create!(name: 'wheel size', value: '16 inches', price: rand(5.0..10.0).round(2), bicycle_id: bicy_2.id)
wheel_5 = Customization.create!(name: 'wheel size', value: '17 inches', price: rand(5.0..10.0).round(2), bicycle_id: bicy_2.id)
wheel_6 = Customization.create!(name: 'wheel size', value: '17 inches', price: rand(5.0..10.0).round(2), bicycle_id: bicy_1.id)

puts "Wheel sizes for bicycle 3: #{bicy_3.name}"
wheel_7 = Customization.create!(name: 'wheel size', value: '15 inches', price: rand(5.0..10.0).round(2), bicycle_id: bicy_3.id)
wheel_8 = Customization.create!(name: 'wheel size', value: '16 inches', price: rand(5.0..10.0).round(2), bicycle_id: bicy_3.id)
wheel_9 = Customization.create!(name: 'wheel size', value: '17 inches', price: rand(5.0..10.0).round(2), bicycle_id: bicy_3.id)

puts "Wheel sizes for bicycle 4: #{bicy_4.name}"
wheel_10 = Customization.create!(name: 'wheel size', value: '15 inches', price: rand(5.0..10.0).round(2), bicycle_id: bicy_4.id)
wheel_11 = Customization.create!(name: 'wheel size', value: '16 inches', price: rand(5.0..10.0).round(2), bicycle_id: bicy_4.id)

puts "Wheel sizes for bicycle 5: #{bicy_5.name}"
wheel_12 = Customization.create!(name: 'wheel size', value: '15 inches', price: rand(5.0..10.0).round(2), bicycle_id: bicy_5.id)
wheel_13 = Customization.create!(name: 'wheel size', value: '16 inches', price: rand(5.0..10.0).round(2), bicycle_id: bicy_5.id)
wheel_14 = Customization.create!(name: 'wheel size', value: '17 inches', price: rand(5.0..10.0).round(2), bicycle_id: bicy_5.id)

puts "Wheel sizes for bicycle 6: #{bicy_6.name}"
wheel_15 = Customization.create!(name: 'wheel size', value: '15 inches', price: rand(5.0..10.0).round(2), bicycle_id: bicy_6.id)
wheel_16 = Customization.create!(name: 'wheel size', value: '16 inches', price: rand(5.0..10.0).round(2), bicycle_id: bicy_6.id)
wheel_17 = Customization.create!(name: 'wheel size', value: '17 inches', price: rand(5.0..10.0).round(2), bicycle_id: bicy_6.id)

puts "Wheel sizes for bicycle 7: #{bicy_7.name}"
wheel_18 = Customization.create!(name: 'wheel size', value: '15 inches', price: rand(5.0..10.0).round(2), bicycle_id: bicy_7.id)
wheel_19 = Customization.create!(name: 'wheel size', value: '16 inches', price: rand(5.0..10.0).round(2), bicycle_id: bicy_7.id)
wheel_20 = Customization.create!(name: 'wheel size', value: '17 inches', price: rand(5.0..10.0).round(2), bicycle_id: bicy_7.id)

puts "Wheel sizes for bicycle 7: #{bicy_8.name}"
wheel_21 = Customization.create!(name: 'wheel size', value: '15 inches', price: rand(5.0..10.0).round(2), bicycle_id: bicy_8.id)
wheel_22 = Customization.create!(name: 'wheel size', value: '16 inches', price: rand(5.0..10.0).round(2), bicycle_id: bicy_8.id)
wheel_23 = Customization.create!(name: 'wheel size', value: '17 inches', price: rand(5.0..10.0).round(2), bicycle_id: bicy_8.id)


puts "Created #{Customization.where(name: 'Wheel size').count} wheel sizes❗️"
puts "Creating Rim colors...🎨"
puts "Rim colors for bicycle 1: #{bicy_1.name} and bicycle 2: #{bicy_2.name}"

rim_1 = Customization.create!(name: 'rim color', value: 'blue', price: rand(5.0..10.0).round(2), bicycle_id: bicy_2.id)
rim_2 = Customization.create!(name: 'rim color', value: 'black', price: rand(5.0..10.0).round(2), bicycle_id: bicy_1.id)
rim_3 = Customization.create!(name: 'rim color', value: 'orange', price: rand(5.0..10.0).round(2), bicycle_id: bicy_2.id)
rim_4 = Customization.create!(name: 'rim color', value: 'turquoise', price: rand(5.0..10.0).round(2), bicycle_id: bicy_1.id)

puts "Rim colors for bicycle 3: #{bicy_3.name}"
rim_5 = Customization.create!(name: 'rim color', value: 'lightgreen', price: rand(5.0..10.0).round(2), bicycle_id: bicy_3.id)
rim_6 = Customization.create!(name: 'rim color', value: 'brown', price: rand(5.0..10.0).round(2), bicycle_id: bicy_3.id)
rim_7 = Customization.create!(name: 'rim color', value: 'red', price: rand(5.0..10.0).round(2), bicycle_id: bicy_3.id)

puts "Rim colors for bicycle 4: #{bicy_4.name}"
rim_8 = Customization.create!(name: 'rim color', value: 'lightblue', price: rand(5.0..10.0).round(2), bicycle_id: bicy_4.id)
rim_9 = Customization.create!(name: 'rim color', value: 'orange', price: rand(5.0..10.0).round(2), bicycle_id: bicy_4.id)
rim_10 = Customization.create!(name: 'rim color', value: 'purple', price: rand(5.0..10.0).round(2), bicycle_id: bicy_4.id)

puts "Rim colors for bicycle 5: #{bicy_5.name}"
rim_11 = Customization.create!(name: 'rim color', value: 'maroon', price: rand(5.0..10.0).round(2), bicycle_id: bicy_5.id)
rim_12 = Customization.create!(name: 'rim color', value: 'gray', price: rand(5.0..10.0).round(2), bicycle_id: bicy_5.id)
rim_13 = Customization.create!(name: 'rim color', value: 'blue', price: rand(5.0..10.0).round(2), bicycle_id: bicy_5.id)

puts "Rim colors for bicycle 6: #{bicy_6.name}"
rim_14 = Customization.create!(name: 'rim color', value: 'pink', price: rand(5.0..10.0).round(2), bicycle_id: bicy_6.id)
rim_15 = Customization.create!(name: 'rim color', value: 'lightblue', price: rand(5.0..10.0).round(2), bicycle_id: bicy_6.id)
rim_16 = Customization.create!(name: 'rim color', value: 'black', price: rand(5.0..10.0).round(2), bicycle_id: bicy_6.id)

puts "Rim colors for bicycle 7: #{bicy_7.name}"
rim_17 = Customization.create!(name: 'rim color', value: 'orange', price: rand(5.0..10.0).round(2), bicycle_id: bicy_7.id)
rim_18 = Customization.create!(name: 'rim color', value: 'brown', price: rand(5.0..10.0).round(2), bicycle_id: bicy_7.id)
rim_19 = Customization.create!(name: 'rim color', value: 'blue', price: rand(5.0..10.0).round(2), bicycle_id: bicy_7.id)


puts "Rim colors for bicycle 7: #{bicy_8.name}"
rim_20 = Customization.create!(name: 'rim color', value: 'turquoise', price: rand(5.0..10.0).round(2), bicycle_id: bicy_8.id)
rim_21 = Customization.create!(name: 'rim color', value: 'darkgreen', price: rand(5.0..10.0).round(2), bicycle_id: bicy_8.id)
rim_22 = Customization.create!(name: 'rim color', value: 'black', price: rand(5.0..10.0).round(2), bicycle_id: bicy_8.id)



puts "Created #{Customization.where(name: 'Rim color').count} rim colors❗️"

puts "Creating Saddle"
puts "Saddle colors for bicycle 1: #{bicy_1.name} and bicycle 2: #{bicy_2.name}"
saddle_1 = Customization.create!(name: 'saddle color', value: 'pink', price: rand(5.0..10.0).round(2), bicycle_id: bicy_1.id)
saddle_2 = Customization.create!(name: 'saddle color', value: 'yellow', price: rand(5.0..10.0).round(2), bicycle_id: bicy_2.id)
saddle_3 = Customization.create!(name: 'saddle color', value: 'red', price: rand(5.0..10.0).round(2), bicycle_id: bicy_1.id)
saddle_4 = Customization.create!(name: 'saddle color', value: 'black', price: rand(5.0..10.0).round(2), bicycle_id: bicy_2.id)

puts "Saddle colors for bicycle 3: #{bicy_3.name}"
saddle_5 = Customization.create!(name: 'saddle color', value: 'red', price: rand(5.0..10.0).round(2), bicycle_id: bicy_3.id)
saddle_6 = Customization.create!(name: 'saddle color', value: 'yellow', price: rand(5.0..10.0).round(2), bicycle_id: bicy_3.id)

puts "Saddle colors for bicycle 4: #{bicy_4.name}"
saddle_7 = Customization.create!(name: 'saddle color', value: 'blue', price: rand(5.0..10.0).round(2), bicycle_id: bicy_4.id)

puts "Saddle colors for bicycle 5: #{bicy_5.name}"
saddle_8 = Customization.create!(name: 'saddle color', value: 'turquoise', price: rand(5.0..10.0).round(2), bicycle_id: bicy_5.id)
saddle_9 = Customization.create!(name: 'saddle color', value: 'pink', price: rand(5.0..10.0).round(2), bicycle_id: bicy_5.id)
saddle_10 = Customization.create!(name: 'saddle color', value: 'gray', price: rand(5.0..10.0).round(2), bicycle_id: bicy_5.id)

puts "Saddle colors for bicycle 6: #{bicy_6.name}"
saddle_11 = Customization.create!(name: 'saddle color', value: 'yellow', price: rand(5.0..10.0).round(2), bicycle_id: bicy_6.id)
saddle_12 = Customization.create!(name: 'saddle color', value: 'red', price: rand(5.0..10.0).round(2), bicycle_id: bicy_6.id)

puts "Saddle colors for bicycle 7: #{bicy_7.name}"
saddle_13 = Customization.create!(name: 'saddle color', value: 'orange', price: rand(5.0..10.0).round(2), bicycle_id: bicy_7.id)
saddle_14 = Customization.create!(name: 'saddle color', value: 'purple', price: rand(5.0..10.0).round(2), bicycle_id: bicy_7.id)

puts "Saddle colors for bicycle 8: #{bicy_8.name}"
saddle_15 = Customization.create!(name: 'saddle color', value: 'salmon', price: rand(5.0..10.0).round(2), bicycle_id: bicy_8.id)
saddle_16 = Customization.create!(name: 'saddle color', value: 'wheat', price: rand(5.0..10.0).round(2), bicycle_id: bicy_8.id)


puts "Created #{Customization.where(name: 'Saddle color').count} saddle colors❗️"

puts "FINISHED CUSTOMIZATIONS WITH #{Customization.count} CUSTOMIZATIONS 😱😱😱"


puts "5) CREATING UPSELLS"
########################################################
# BICYCLE 1
puts "Creating associated customizations for bicycle #{bicy_1.name}"

upsell_1 = Upsell.create!(first_customization_id: wheel_1.id, second_customization_id: rim_2.id)
upsell_2 = Upsell.create!(first_customization_id: wheel_1.id, second_customization_id: rim_4.id)
upsell_3 = Upsell.create!(first_customization_id: wheel_1.id, second_customization_id: saddle_1.id)
upsell_4 = Upsell.create!(first_customization_id: wheel_1.id, second_customization_id: saddle_3.id)

upsell_5 = Upsell.create!(first_customization_id: wheel_3.id, second_customization_id: rim_2.id)
upsell_6 = Upsell.create!(first_customization_id: wheel_3.id, second_customization_id: saddle_3.id)
upsell_7 = Upsell.create!(first_customization_id: wheel_6.id, second_customization_id: rim_4.id)
upsell_8 = Upsell.create!(first_customization_id: wheel_6.id, second_customization_id: saddle_3.id)

puts "Upsells for #{bicy_1.name} DONE"


########################################################
# BICYCLE 2
puts "Creating associated customizations for bicycle #{bicy_2.name}"
upsell_9 = Upsell.create!(first_customization_id: wheel_2.id, second_customization_id: rim_1.id)
upsell_10 = Upsell.create!(first_customization_id: wheel_2.id, second_customization_id: rim_3.id)
upsell_11 = Upsell.create!(first_customization_id: wheel_2.id, second_customization_id: saddle_2.id)
upsell_12 = Upsell.create!(first_customization_id: wheel_2.id, second_customization_id: saddle_4.id)

upsell_13 = Upsell.create!(first_customization_id: wheel_4.id, second_customization_id: rim_1.id)
upsell_14 = Upsell.create!(first_customization_id: wheel_4.id, second_customization_id: saddle_4.id)
upsell_15 = Upsell.create!(first_customization_id: wheel_5.id, second_customization_id: rim_3.id)
upsell_16 = Upsell.create!(first_customization_id: wheel_5.id, second_customization_id: saddle_2.id)


puts "Upsells for #{bicy_2.name} DONE"

########################################################
# BICYCLE 3
upsell_17 = Upsell.create!(first_customization_id: wheel_9.id, second_customization_id: rim_5.id)
upsell_18 = Upsell.create!(first_customization_id: wheel_9.id, second_customization_id: rim_6.id)
upsell_19 = Upsell.create!(first_customization_id: wheel_9.id, second_customization_id: rim_7.id)
upsell_20 = Upsell.create!(first_customization_id: wheel_8.id, second_customization_id: rim_5.id)
upsell_21 = Upsell.create!(first_customization_id: wheel_7.id, second_customization_id: rim_5.id)
upsell_22 = Upsell.create!(first_customization_id: wheel_7.id, second_customization_id: rim_6.id)

upsell_23 = Upsell.create!(first_customization_id: wheel_9.id, second_customization_id: saddle_5.id)
upsell_24 = Upsell.create!(first_customization_id: wheel_9.id, second_customization_id: saddle_6.id)
upsell_25 = Upsell.create!(first_customization_id: wheel_9.id, second_customization_id: saddle_7.id)
upsell_26 = Upsell.create!(first_customization_id: wheel_8.id, second_customization_id: saddle_5.id)
upsell_27 = Upsell.create!(first_customization_id: wheel_7.id, second_customization_id: saddle_5.id)
upsell_28 = Upsell.create!(first_customization_id: wheel_7.id, second_customization_id: saddle_6.id)

puts "Upsells for #{bicy_3.name} DONE"

########################################################
# BICYCLE 4
upsell_29 = Upsell.create!(first_customization_id: wheel_10.id, second_customization_id: rim_8.id)
upsell_30 = Upsell.create!(first_customization_id: wheel_10.id, second_customization_id: rim_9.id)
upsell_31 = Upsell.create!(first_customization_id: wheel_10.id, second_customization_id: rim_10.id)
upsell_32 = Upsell.create!(first_customization_id: wheel_11.id, second_customization_id: rim_10.id)
upsell_33 = Upsell.create!(first_customization_id: wheel_10.id, second_customization_id: rim_8.id)

upsell_34 = Upsell.create!(first_customization_id: wheel_10.id, second_customization_id: saddle_7.id)
upsell_35 = Upsell.create!(first_customization_id: wheel_11.id, second_customization_id: saddle_7.id)

puts "Upsells for #{bicy_4.name} DONE"

########################################################
# BICYCLE 5
upsell_36 = Upsell.create!(first_customization_id: wheel_13.id, second_customization_id: rim_11.id)
upsell_37 = Upsell.create!(first_customization_id: wheel_13.id, second_customization_id: rim_12.id)
upsell_38 = Upsell.create!(first_customization_id: wheel_13.id, second_customization_id: rim_13.id)

upsell_39 = Upsell.create!(first_customization_id: wheel_12.id, second_customization_id: rim_12.id)
upsell_40 = Upsell.create!(first_customization_id: wheel_12.id, second_customization_id: rim_13.id)
upsell_41 = Upsell.create!(first_customization_id: wheel_14.id, second_customization_id: rim_11.id)

upsell_42 = Upsell.create!(first_customization_id: wheel_13.id, second_customization_id: saddle_8.id)
upsell_43 = Upsell.create!(first_customization_id: wheel_13.id, second_customization_id: saddle_9.id)
upsell_44 = Upsell.create!(first_customization_id: wheel_13.id, second_customization_id: saddle_10.id)
upsell_45 = Upsell.create!(first_customization_id: wheel_12.id, second_customization_id: saddle_8.id)
upsell_46 = Upsell.create!(first_customization_id: wheel_14.id, second_customization_id: saddle_9.id)
upsell_47 = Upsell.create!(first_customization_id: wheel_14.id, second_customization_id: saddle_10.id)


puts "Upsells for #{bicy_5.name} DONE"

########################################################
# BICYCLE 6
upsell_48 = Upsell.create!(first_customization_id: wheel_17.id, second_customization_id: rim_14.id)
upsell_49 = Upsell.create!(first_customization_id: wheel_17.id, second_customization_id: rim_15.id)
upsell_50 = Upsell.create!(first_customization_id: wheel_17.id, second_customization_id: rim_16.id)

upsell_51 = Upsell.create!(first_customization_id: wheel_15.id, second_customization_id: rim_14.id)
upsell_52 = Upsell.create!(first_customization_id: wheel_15.id, second_customization_id: rim_15.id)
upsell_53 = Upsell.create!(first_customization_id: wheel_15.id, second_customization_id: rim_16.id)
upsell_54 = Upsell.create!(first_customization_id: wheel_16.id, second_customization_id: rim_14.id)
upsell_55 = Upsell.create!(first_customization_id: wheel_16.id, second_customization_id: rim_15.id)

upsell_56 = Upsell.create!(first_customization_id: wheel_17.id, second_customization_id: saddle_11.id)
upsell_57 = Upsell.create!(first_customization_id: wheel_17.id, second_customization_id: saddle_12.id)
upsell_58 = Upsell.create!(first_customization_id: wheel_15.id, second_customization_id: saddle_11.id)
upsell_59 = Upsell.create!(first_customization_id: wheel_15.id, second_customization_id: saddle_12.id)
upsell_60 = Upsell.create!(first_customization_id: wheel_16.id, second_customization_id: saddle_11.id)
upsell_61 = Upsell.create!(first_customization_id: wheel_16.id, second_customization_id: saddle_12.id)


puts "Upsells for #{bicy_6.name} DONE"

########################################################
# BICYCLE 7
upsell_48 = Upsell.create!(first_customization_id: wheel_19.id, second_customization_id: rim_17.id)
upsell_49 = Upsell.create!(first_customization_id: wheel_19.id, second_customization_id: rim_18.id)
upsell_50 = Upsell.create!(first_customization_id: wheel_19.id, second_customization_id: rim_19.id)
upsell_51 = Upsell.create!(first_customization_id: wheel_18.id, second_customization_id: rim_18.id)
upsell_52 = Upsell.create!(first_customization_id: wheel_18.id, second_customization_id: rim_17.id)
upsell_53 = Upsell.create!(first_customization_id: wheel_18.id, second_customization_id: rim_19.id)
upsell_54 = Upsell.create!(first_customization_id: wheel_20.id, second_customization_id: rim_18.id)
upsell_55 = Upsell.create!(first_customization_id: wheel_20.id, second_customization_id: rim_17.id)

upsell_56 = Upsell.create!(first_customization_id: wheel_19.id, second_customization_id: saddle_13.id)
upsell_57 = Upsell.create!(first_customization_id: wheel_18.id, second_customization_id: saddle_14.id)
upsell_58 = Upsell.create!(first_customization_id: wheel_20.id, second_customization_id: saddle_13.id)
upsell_59 = Upsell.create!(first_customization_id: wheel_20.id, second_customization_id: saddle_14.id)
upsell_60 = Upsell.create!(first_customization_id: wheel_19.id, second_customization_id: saddle_14.id)

puts "Upsells for #{bicy_7.name} DONE"

########################################################
# BICYCLE 8
upsell_61 = Upsell.create!(first_customization_id: wheel_21.id, second_customization_id: rim_20.id)
upsell_62 = Upsell.create!(first_customization_id: wheel_21.id, second_customization_id: rim_21.id)
upsell_63 = Upsell.create!(first_customization_id: wheel_21.id, second_customization_id: rim_22.id)

upsell_64 = Upsell.create!(first_customization_id: wheel_22.id, second_customization_id: rim_21.id)

upsell_65 = Upsell.create!(first_customization_id: wheel_23.id, second_customization_id: rim_20.id)
upsell_66 = Upsell.create!(first_customization_id: wheel_23.id, second_customization_id: rim_21.id)
upsell_67 = Upsell.create!(first_customization_id: wheel_23.id, second_customization_id: rim_22.id)

upsell_68 = Upsell.create!(first_customization_id: wheel_21.id, second_customization_id: saddle_15.id)
upsell_69 = Upsell.create!(first_customization_id: wheel_21.id, second_customization_id: saddle_16.id)

upsell_70 = Upsell.create!(first_customization_id: wheel_22.id, second_customization_id: saddle_15.id)
upsell_71 = Upsell.create!(first_customization_id: wheel_22.id, second_customization_id: saddle_16.id)

upsell_72 = Upsell.create!(first_customization_id: wheel_23.id, second_customization_id: saddle_16.id)

puts "Upsells for #{bicy_8.name} DONE"


puts "Wait a second please............."
puts "................................."
puts "................................................"
puts "..............................................................."
puts "..............................................................................."
puts "..............................................................."
puts "................................................"
puts "................................"
puts "Okay, WE'RE DONE!✨"
puts "No, wait, THERE'S BEEN AN ERROR! ABORT MISSION!💥❗️"
puts "JUST KIDDING🤪. SEEDED ALL THE DATABASE WITH: "
puts "#{User.count} users 🙋🏽‍♂️"
puts "#{Bicycle.count} bicycles 🚲"
puts "#{Upsell.count} upsells 📈"
puts ":)"