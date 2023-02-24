# RecordAudioWidget
Created by Lauren Anderson, updated by Jacob Thomsen, 2023.

Built to run on Mendix version 9.18.2

## Features
- This widget can record audio using HTML MediaRecorder, 
- Play the audio back to you
- Download the .weba file of the audio 
- *And pass the audio into your Mendix application*

## Usage
### To add the widget to your project
1. Download this repository
2. Move the file `byu.RecordAudioWidget.mpk` to your Mendix application's `widgets` folder
3. In Studio Pro, press F4 or navigate to App -> Synchronize App Directory, and click this option.

### Making the widget functional
To use the widget, there are a few items you will need complete in your project.
1. In your Domain Model, add a first entity, non-persistable, with these fields:  
Url : String,  
Filename : String,  
Title : String,   
isUrlDisplayed : Boolean (Default: false)

This entity is used to generate audio blob urls, which are how MediaRecorder stores the audio within the browser.

2. Add a persistable entity that is a generalization of System.FileDocument, with one attribute, Title : String

![img.png](readme_images/img.png)

3. Create a Microflow, named however you please, that returns and creates an instance of the first entity.

![img_1.png](readme_images/img_1.png)

4. On the page where you would like to have the widget, add a DataView which calls the microflow you just created. 
5. In the DataView, below the Text Box, place the widget.

![img_2.png](readme_images/img_2.png)

6. Create a Microflow that takes an instance of the persistable entity as a paramter and then handles the entity-
which now contains the audio file- as you please.

![img_4.png](readme_images/img_4.png)

### Widget Settings
These are the required settings of the widget you will need to set in order to use the widget.
- Set the Data source of the widget to be the Url string of the given entity.*

#### Instructions
- You can select whether you would like to display the instructions section of the widget.
- Enter a descriptive string of where the audio files will be saved.

#### File Management
- Enter the title of the Microflow you made to handle the audio file when the save recording button is selected.*
- Enter the title of the persistable entity you created to store the audio file.*

(* required)

![img_3.png](readme_images/img_3.png)

## Demo project
[link to sandbox]

## Issues, suggestions and feature requests
[link to GitHub issues]

## Development and contribution
[specify contribute]
