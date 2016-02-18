
# players
User.create(
  admin: false,
  firstname: "Hope",
  lastname: "Solo",
  birthdate: Date.parse('2003-10-20'),
  username:"hsolo",
  password: "1234",
  profile_photo: "profile_hope.png")


User.create(
  admin: false,
  firstname: "Becky",
  lastname: "sauerbrunn",
  birthdate: Date.parse('2003-10-20'),
  username:"bsauerbrunn",
  password: "1234",
  profile_photo: "profile_becky.png")

User.create(
  admin: false,
  firstname: "Megan",
  lastname: "Rapinoe",
  birthdate: Date.parse('2004-12-15'),
  username:"mrapinoe",
  password: "1234",
  profile_photo: "profile_megan.png")

User.create(
  admin: false,
  firstname: "Kelley",
  lastname: "O'Hara",
  birthdate: Date.parse('2003-08-02'),
  username:"kohara",
  password: "1234",
  profile_photo: "profile_kelley.png")

User.create(
  admin: false,
  firstname: "Carli",
  lastname: "Lloyd",
  birthdate: Date.parse('2004-01-12'),
  username:"clloyd",
  password: "1234",
  profile_photo: "profile_lloyd.png")

# coaches
User.create(
  admin: true,
  firstname: "Charlotte",
  lastname: "Manetta",
  birthdate: Date.parse('1984-11-24'),
  username:"cjmanetta",
  password: "1234",
  profile_photo: "profile_charlotte.png")

User.create(
  admin: true,
  firstname: "Jill",
  lastname: "Ellis",
  birthdate: Date.parse('1960-06-02'),
  username:"jellis",
  password: "1234",
  profile_photo: "profile_jill.png")

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
