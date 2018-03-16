describe 'Playing the Game', type: :feature do
  scenario 'one player game' do
    visit '/'
    fill_in :player1, with: 'James'
    click_link 'Play'
    find('button[data-weapon="rock"]').click
    expect(page).to have_selector('#result-message', visible: true)
    expect(page).to have_selector('#replay', visible: true)
  end

  scenario 'two player game' do
    visit '/'
    fill_in :player1, with: 'James'
    fill_in :player2, with: 'Laura'
    click_link 'Play'
    find('button[data-weapon="rock"]').click
    expect(page).to have_selector('#result-message', visible: false)
    find('button[data-weapon="paper"]').click
    expect(page).to have_content("Laura's paper covers James's rock")
    expect(page).to have_selector('#replay', visible: true)
  end
end
