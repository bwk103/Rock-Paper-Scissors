describe 'Replaying game', type: :feature do
  scenario 'replaying a one player game' do
    visit '/'
    fill_in :player1, with: 'James'
    click_link 'Play'
    find('button[data-weapon="rock"]').click
    expect(page).to have_selector('#result-message', visible: true)
    expect(page).to have_selector('#replay', visible: true)
    click_link 'Play Again'
    expect(page).to have_selector('#result-message', visible: false)
    expect(page).to have_selector('#replay', visible: false)
  end

  scenario 'replaying a two player game' do
    visit '/'
    fill_in :player1, with: 'James'
    fill_in :player2, with: 'Laura'
    click_link 'Play'
    find('button[data-weapon="rock"]').click
    find('button[data-weapon="paper"]').click
    expect(page).to have_selector('#replay', visible: true)
    expect(page).to have_selector('#result-message', visible: true)
    click_link 'Play Again'
    expect(page).to have_selector('#result-message', visible: false)
    expect(page).to have_selector('#replay', visible: false)
  end

end
