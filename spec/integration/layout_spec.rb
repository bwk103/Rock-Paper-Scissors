feature 'Site layout', type: :feature do

  scenario 'page has correct title' do
    visit '/'
    expect(page).to have_content 'Rock - Paper - Scissors - Lizard - Spock'
  end

  scenario 'page has input for players' do
    visit '/'
    expect(page).to have_selector("input", :id =>"player1")
    expect(page).to have_selector("input", :id =>"player2")
    expect(page).not_to have_css("input#hide")
  end

  scenario 'page has play button' do
    visit '/'
    expect(page).to have_xpath("//a",:id => "play")
  end

  scenario 'page has five weapon options' do
    visit '/'
    expect(page).to have_selector('button[data-weapon="rock"]')
    expect(page).to have_selector('button[data-weapon="paper"]')
    expect(page).to have_selector('button[data-weapon="scissors"]')
    expect(page).to have_selector('button[data-weapon="lizard"]')
    expect(page).to have_selector('button[data-weapon="spock"]')
  end

end
