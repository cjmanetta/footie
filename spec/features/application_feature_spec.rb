require 'rails_helper'

describe 'As a user I can', :js => true do

  it 'visit the homepage' do
    visit '/'
    expect(page).to have_selector 'div.login'
  end

end