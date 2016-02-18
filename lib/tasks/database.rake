namespace :db do
  desc "dump, create, migrate and seed"
  task :remake =>  ['db:drop', 'db:create', 'db:migrate', 'db:seed']
end
