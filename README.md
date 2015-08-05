## footie

footie is a simple points tracking app for managing contests or player progress over the course of a sports season. I developed it initially as a personal project with the aim of never having to use a spreadsheet to track player stats ever again.

footie evolved into a great platform for me to learn new technologies. I began the project in Sinatra and then ported it to Rails before using it as a tool to learn React and deepeen my understanding of Javascript.


## Screencast
[screencast](https://youtu.be/eLw_B1rymtk)

## Technologies
I learned so much working on this project. Heres a list of all of the technologies I used in the development process.

Frontend:
* HTML + CSS + SASS
* JavaScript
* jQuery + Ajax
* React

Backend:
* Ruby
* Postgresql
* Rails

Oauth:
* Teamsnap API [teamsnap docs](http://developer.teamsnap.com/)
* dotenv gem 
* HTTP

## Usage and Invitation to Collaborate
This project is open-source, so please feel free to clone, submit pull requests, issues or feature reccomendations. 

Local Setup:
Currently footie is not deployed. I am working on deploying to Heroku but my Oauth isn't working in that environment 

Oauth and the dotenv gem - use the dotenv rails gem to save ENV varialbes for client id and client secret.

Add the dotenv-rails gem to your Gemfile and bundle:
```ruby
gem 'dotenv-rails', :groups => [:development, :test]
```

I used the ruby Net::HTTP API and the ruby URI module to handle the uris and construct the http requests. Require them at the top of the controller which handles the Oauth.
```ruby
require "uri"
require "net/http"

```

