# TempleGuesser
A simple yet fun web application game that uses pictures of Temple University buildings, food trucks, and other outdoor places of interest, and requests a user to guess where they are on campus. Public map data will be shown to the player and the game will ask the player to guess their location. The location selection system will be an interactive map where players click on the coordinates they think the picture captures. Points will be accumulated for each location guess based on distance from the player’s location selection. After the player completes five location guesses, their score will be totaled and shown.

# Vision Statement
For people wanting to explore Temple's Main Campus virtually
who cannot immediately visit in-person or are exploring for fun.
TempleGuesser is a Web-based game that is free for everyone 
and provides an educational yet entertaining experience.
Unlike GeoGuessr and other Web-based location games,
our product has a smaller target audience which provides
a better quality service to those in need.

# How to Build
Prerequisites:
- Mac/Windows/Linux 
- Google Maps API key with billing set-up
- VSCode version 1.63 or earlier
- Trello Board: https://trello.com/b/Nkg3W5V1/templeguesser

# Instructions:
## Part 1
- Test to see if ```localhost``` works in browser
- Create a folder in the file path ```C:\TempleGuesser\htdocs``` named "Test"
- Import the ```test.html``` in this repo into the file path ```C:\TempleGuesser\htdocs\Test```

## Part 2
> Google Maps API requires a key which is a paid service. Accounts will only be charged only after $300 worth of credit which re-sets each month. 
> This project at its current stage would not exceed that limit and therefore not requiring students to pay for this service.

- Import index.html & the js file into the same file path ```C:\TempleGuesser\htdocs\Test```
- Insert your API key on ```line 14``` of the ```index.html``` file

# How to Run and Test
## Part 1
- Open the ```localhost/Test/test.html``` server connection in your browser
- You should now see the string of text "Yay you did it!"

## Part 2
- Open the ```localhost/Test/``` server connection in your browser
- You should now see a Google Map image

# Debugging
- If you see nothing when opening ```index.html``` your Google API Key is not correct or your account is experiencing issues. 
Troubleshooting help: 
https://developers.google.com/maps/documentation/javascript/cloud-setup
https://www.youtube.com/watch?v=367oxHpnn_4&list=PLWnON6N0wn-EwVx4ZJNbmvC6quBgq5cif&index=5
