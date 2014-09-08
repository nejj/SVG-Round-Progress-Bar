SVG-Round-Progress-Bar
======================

Cross browser (SVG Supported) round progress bar with the option of a gradient overlay.

After including both jQuery and SVG Round Progress Bar library, you can easily create progress bars by adding the following HTML anywhere on the site.

Legend:
- *data-progress* - Sets the percent progress of the progress bar. (required)
- *data-progress-size* - Sets the width and height of the progress bar. (required)
- *data-progress-stroke-width* - Sets the stroke thickness of the progress bar. (optional)
- *data-progress-background* - Sets the background color of the progress bar. (optional)
- *data-progress-gradient-start* - Sets the start color of the background gradient. (optional)
- *data-progress-gradient-stop* - Sets the end color of the background gradient. (optional)

*Create a progress bar at 25%, with a height and width of 200px, a stroke width of 20px and a gradient background.*
`<div class="progress" data-progress="25" data-progress-size="200" data-progress-stroke-width="20" data-progress-gradient-start="rgb(11,178,180)" data-progress-gradient-stop="rgb(0,255,114)"></div>`

*Create a progress bar at 50%, with a height and width of 100px, a stroke width of 10px and a background color.*
`<div class="progress" data-progress="50" data-progress-size="100" data-progress-stroke-width="10" data-progress-background="rgb(0,255,0)"></div>`

*Create a progress bar at 75%, with a height and width of 50px, a stroke width of 5px and a background color.*
`<div class="progress" data-progress="75" data-progress-size="50" data-progress-stroke-width="5" data-progress-background="rgb(0,255,255)"></div>`

*The bare minimum to make a round progress bar.*
`<div class="progress" data-progress="100" data-progress-size="50"></div>`
