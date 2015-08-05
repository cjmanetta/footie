module ActivitiesHelper
  def parse_date(date)
    parsed_date = Date.parse(date).strftime('%a %d %b')
  end
end

