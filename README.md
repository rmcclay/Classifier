# ClassifierApp

This project uses node.js as the back end. To run this, enter "node server" on the command line in the root of the app.

The first input takes in a comman delineated list of keywords. You do not need to put quotes around words, just the words themselves.

The next input is the document text file you wish to censor.

The last input is a checkbox which will censor the whole word if par tof it matches the keyword:

Example: 

  Keyword:    Secret Agent Smith
  
  Text:       No one must know of Secret Agent Smith's operation.
  
  Unchecked:  No one must know of XXXXX XXXXX XXXXX's operation.
  
  Checked:    No one must know of XXXXX XXXXX XXXXXXX operation.
