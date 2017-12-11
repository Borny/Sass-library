# Sass Library

## This is a custom library using HTLM 5 and CSS 3 (and some JavaScript !)

## This library contains : 

- A Grid system based on a 12 columns count
- A navigation using checkbox input
- Tabs using radio inputs 
- Modals using checkbox inputs
- Inputs with an animation on focus

### Grid system

The Grid system used here is based on a 12 columns count and uses media-queries.

The **container** class contains all the columns and goes up to 1200px max-width.
The **row** class is needed to keep the structure together, it uses 'clear: both' on pseudo-elements so the columns don't mess up the layout.

Use the class name col-xs- / col-sm- / col-md- / col-lg- and a number that defines the column's length.
There can be as many as 12 columns but the total must be 12 otherwise the last column will be stacked underneath.

### Navigation

The **navigation** works like the modals. It is triggered thanks to a 'label' element styled like a button. 

### Tabs

The **tabs** can be set up using radio inputs. Each tabs are binded to a radio input.
The first tab has its radio input checked by default. 

### Modal

The **modals** are displayed thanks to a checkbox. By default the checkbox is unchecked and the modal hidden. 
When it is checked then the modal appears on the screen.

The 'label' element is styled like a button and is used as a trigger to open the modal. The modal can be closed using another 'label' element styled like a close button. It can also be closed by clicking anywhere around the modal on a 'label' element that is displayed when the modal opens and takes 100% of the screen.

Some JavaScript is used so that the scroll is disabled on the 'body' element when the modal is opened.

### Collapse

The **collapse** elements are animated with checkbox.
By default the checkbox is unchecked and the element is collapsed. So when the checkbox is triggered with the label the element opens up and the content is displayed.
Unfortunately the collapse elements can't interact with each other without JavaScript. So an open element won't collapse if another one is opened.

### Input Text

The **input text** are animated using the focus state.
They are kept focused with JavaScript as CSS and HTML alone won't work.
