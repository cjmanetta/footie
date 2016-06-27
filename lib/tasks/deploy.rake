namespace :assets do
	desc "clobber and precompile assets before heroku push"
	task :deploy => ['assets:clobber', 'assets:precompile']
end