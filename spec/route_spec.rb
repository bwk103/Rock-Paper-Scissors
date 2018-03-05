require './app'
require 'rack/test'

describe 'Rock Paper Scissors' do
  include Rack::Test::Methods

  def app
    RPSApp
  end

  it 'renders index' do
    get '/'
    expect(last_response).to be_ok
    expect(last_response.body).to include('Rock - Paper - Scissors - Lizard - Spock')
  end

end
