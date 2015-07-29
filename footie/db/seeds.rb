
10.times do
  User.create(
    firstname: Faker::Name.first_name,
    lastname: Faker::Name.last_name,
    username: Faker::Internet.user_name,
    birthdate: Faker::Date.backward(1000),
    email: Faker::Internet.email,
    password: "1234")
end

User.create(
  admin: true,
  firstname: "Charlotte",
  lastname: "Manetta",
  birthdate: Date.parse('1984-11-24'),
  username:"cjmanetta",
  password: "1234")

User.create(
  admin: true,
  firstname: "Dena",
  lastname: "Delaviz",
  birthdate: Date.parse('1985-06-02'),
  username:"ddelaviz",
  password: "1234")

  Activity.create(
    title: "Ronaldo Chop",
    description: "2pts at speed",
    date: Faker::Date.forward(60),
    activity_type: "Challenge")

  Activity.create(
    title: "Juggling",
    description: "4pts per juggle",
    date: Faker::Date.forward(60),
    activity_type: "Challenge")

  Activity.create(
    title: "Maradona",
    description: "5pts at speed",
    date: Faker::Date.forward(60),
    activity_type: "Challenge")

  Activity.create(
    title: "Headers",
    description: "2pts for each one",
    date: Faker::Date.forward(60),
    activity_type: "Challenge")
