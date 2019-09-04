# Project 3 - Pain Point Overflow Max 3000
by Sebastian Portuondo

---

DropDown is a full stack application that allows people to grab or screenshot images on web pages and drop the images to a mobile app. The dropped images can then be saved and stored directly on the phone.

---

## User Stories

**Session**
- Upon opening DropDown, a user will be given a session code. The user can enter the session code on their mobile phone to begin dropping image data
- The user can request a new session key at any time


**Chrome Application**
- A user can:
  - Expand and close the dropdown extension at any time
  - Drag and drop any static media format
  - Click button to open a screenshot selection tool
  - Preview dragged / screenshotted media before dropping it to a mobile phone
  - Either confirm media and drop it or cancel selection

  **Mobile Application**
  - A user can:
    - View all dropped photos that haven't been saved to the phone
    - Delete images that you dont want to download
    - Download all dropped photos to the phone's local photo library
    - View downloaded photos in the DropDown app




## Routes/Endpoints

#### CHROME APP
| 	     | HTTP VERB | URL           | DESCRIPTION	  	  		                      |
| ------ | :---------| :-------------| :--------------------------------------------|
| 		   | POST	     | /             | create a new session         	              |
|		     | GET		   | /             | retrieve the current session key             |
| 		   | POST	     | /drop         | drop an image to the database	              |




#### MOBILE APP
| 	     | HTTP VERB | URL          | DESCRIPTION	  	  		                                |
| ------ | :---------| :------------| :-----------------------------------------------------|
|		     | GET		   | /dropped     | get all photos that have been dropped in this session |
| 		   | DELETE	   | /dropped     | delete photo/photos from database                     |
