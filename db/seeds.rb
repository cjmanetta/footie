
# players
User.create(
  admin: false,
  firstname: "Bailey",
  lastname: "Parsons",
  birthdate: Date.parse('2003-10-20'),
  username:"bparsons",
  password: "1234")


User.create(
  admin: false,
  firstname: "Anni",
  lastname: "Coss",
  birthdate: Date.parse('2003-10-20'),
  username:"acoss",
  password: "1234")

User.create(
  admin: false,
  firstname: "Arista",
  lastname: "Vasquez",
  birthdate: Date.parse('2004-12-15'),
  username:"avasquez",
  password: "1234")

User.create(
  admin: false,
  firstname: "Carli",
  lastname: "Smith",
  birthdate: Date.parse('2003-08-02'),
  username:"csmith",
  password: "1234")

User.create(
  admin: false,
  firstname: "Haley",
  lastname: "Dolin",
  birthdate: Date.parse('2004-01-12'),
  username:"hdolin",
  password: "1234")

# coaches
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
    date: Date.parse('2015-10-25'),
    activity_type: "Challenge")

  Activity.create(
    title: "Juggling",
    description: "4pts per juggle",
    date: Date.parse('2015-09-02'),
    activity_type: "Challenge")

  Activity.create(
    title: "Maradona",
    description: "5pts at speed",
    date: Date.parse('2015-09-15'),
    activity_type: "Challenge")

  Activity.create(
    title: "Headers",
    description: "2pts for each one",
    date: Date.parse('2015-10-05'),
    activity_type: "Challenge")
