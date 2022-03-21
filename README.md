# Proof of Concept for TempleGuesser
A simple yet fun web application game that uses pictures of Temple University buildings and requests a user to guess where they are on campus. Public map data will be shown to the player and the game will ask the player to guess their location. The location selection system will be an interactive map where players click on the coordinates they think the picture captures. Points will be accumulated for each location guess based on distance from the player’s location selection. After the player completes five location guesses, their score will be totaled and shown.

# How to Build
Prerequisites:
- Mac/Windows/Linux 
- Google Maps API key
- VSCode version 1.63 or earlier
- XAMPP Local Server Handling Installer
- Trello Board: https://trello.com/b/Nkg3W5V1/templeguesser

# Instructions:
## Part 1
- Install XAMPP with default settings and configure
- Test to see if ```localhost``` works in browser
- Create a folder in the file path ```C:\xampp\htdocs``` named "Test"       
> *htdocs is where all local files are stored*
- Import the ```test.html``` in this repo into the file path ```C:\xampp\htdocs\Test```

## Part 2
> Google Maps API requires a key which is a paid service. Accounts will only be charged only after $300 worth of credit. 
> This project at its current stage would not exceed that limit and therefore not requiring students to pay for this service.

- Import index.html & the js folder into the file path ```C:\xampp\htdocs\Test```
- Insert your API key on ```line 26``` of the ```googlemaps.js``` file

# How to Run and Test
## Part 1
- Open the Apache server within the control panel in XAMPP
- Open the ```localhost/Test/test.html``` server connection in your browser
- You should now see the string of text "XAMPP Server runs successfully"

## Part 2
- Open the Apache and MySQL server within the control panel in XAMPP
- Open the ```localhost/Test/``` server connection in your browser
- You should now see the string of text "TempleGuesser" with a Google Map image with a pin on the page

# Debugging
- If you are having trouble setting up XAMPP, follow the specific instructions here: https://www.youtube.com/watch?v=C2Is5KNQRh4
- If you see only a blue box when opening ```index.html``` your Google API Key is not correct or your account is experiencing issues. 
Troubleshooting help: 
https://developers.google.com/maps/documentation/javascript/cloud-setup
https://www.youtube.com/watch?v=367oxHpnn_4&list=PLWnON6N0wn-EwVx4ZJNbmvC6quBgq5cif&index=5
