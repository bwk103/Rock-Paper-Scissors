describe 'Adding players', type: :feature do
  scenario 'one player game' do
    visit '/'
    expect(page).to have_selector("input", :id =>"player1")
    fill_in :player1, with: 'James'
    click_link 'Play'
    expect(page).to have_selector("input", :id => "player1", visible: false)
  end

  scenario 'two player game' do
    visit '/'
    expect(page).to have_selector("input", :id =>"player1")
    expect(page).to have_selector("input", :id =>"player2")
    fill_in :player1, with: 'James'
    fill_in :player2, with: 'Laura'
    click_link 'Play'
    expect(page).to have_selector("input", :id => "player1", visible: false)
    expect(page).to have_selector("input", :id => "player2", visible: false)
  end
end
