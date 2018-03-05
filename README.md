[![Build Status](https://travis-ci.org/bwk103/Rock-Paper-Scissors.svg?branch=master)](https://travis-ci.org/bwk103/Rock-Paper-Scissors)

# Rock Paper Scissors (RPS)

Are you desperate to play Rock Paper Scissors but have no one to play with?  Are
you bored of playing in front of a mirror and always having
the match end up as a tie?  Well, now you can play against your computer!


My attempt of the Rock, Paper, Scissors, Lizard, Spock challenge set by [Makers
Academy](http://www.makersacademy.com). The crux of the challenge was to mirror the logic developed as a solution to the
same problem in [Ruby](https://github.com/bwk103/rps-challenge) and develop a
web application using front end JavaScript.

Play my version of the game
[here](https://bk-rpsls.herokuapp.com/#).

## Getting Started

The easiest way to play my version of the game is to go [here](https://bk-rpsls.herokuapp.com/#) but if you instead wish to run it on a
local server, follow these steps:

### Prerequisites

Whilst the project is predominantly written in JavaScript, it uses Sinatra to
run on a localhost, therefore you are going to need the following:

#### Ruby

If you're on Linix or Mac you can probably ignore this step, otherwise download
and install Ruby from [here](https://www.ruby-lang.org/en/).

#### Bundler
The simplest way to install Sinatra will be to use bundler.  Therefore if you've
never used it in the past, run the following at the command line:

`gem install bundler`

### Installing RPS

Navigate to an appropriate location and run the following command:

`git clone https://github.com/bwk103/Rock-Paper-Scissors.git`

Once all the files have been downloaded, navigate to the new project directory
and run the following:

`bundle install`

After the dependencies have been installed, you're good to go.  Launch the
application using the following command:

`rackup config.ru`

And in your browser, navigate to the appropriate port.

## Playing RPS

It's the classic game with a bit of a twist, best described by the
contributors at [Wikipedia](https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors#Additional_weapons):

> One popular five-weapon expansion is "rock-paper-scissors-Spock-lizard", invented by Sam Kass and Karen Bryla, which adds "Spock" and "lizard" to the standard three choices. "Spock" is signified with the Star Trek Vulcan salute, while "lizard" is shown by forming the hand into a sock-puppet-like mouth. Spock smashes scissors and vaporizes rock; he is poisoned by lizard and disproven by paper. Lizard poisons Spock and eats paper; it is crushed by rock and decapitated by scissors. This variant was mentioned in a 2005 article in The Times of London and was later the subject of an episode of the American sitcom The Big Bang Theory in 2008 (as rock-paper-scissors-lizard-Spock).

If you want to play against the computer, simply enter your name in the text
field for Player 1(leave the other input blank) and click on 'Play'.

If you've invited some friends round to play and have decided against doing so
with your hands, simply enter both players' names in the text fields and click
play.

If, having lost one game, you decide to make it 'best of 3/5/7 etc', simply
click on 'Play Again' to re-live the suspense, drama and excitement all over
again.

![](https://user-images.githubusercontent.com/8667021/36853831-5e21ec48-1d67-11e8-8491-0cd213e9f4c4.png)

![](https://user-images.githubusercontent.com/8667021/36853950-aca7543e-1d67-11e8-84a1-6a01fa4501dd.png)

![](https://user-images.githubusercontent.com/8667021/36853978-c091deba-1d67-11e8-8821-dc1d9cbb44bf.png)

## Running the tests

In order to run my javascript tests, execute the following command and the tests will
appear in your browser.

`open SpecRunner.html`

To see my integration tests, simply run the following command:

`rspec`

## Built With

- [Jamine Standalone](https://github.com/jasmine/jasmine/releases) - JavaScript testing framework
- [Sinata](http://sinatrarb.com/)
- [Capybara](https://github.com/teamcapybara/capybara) - integration tests
- [Heroku](http://heroku.com) - hosting application

## Acknowledgements

- [Makers Academy](http://www.makersacademy.com) for their challenge.
- [Font Awesome](http://www.fontawesome.com) for their icons.
