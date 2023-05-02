import { createOrderHtml, createTableOptionsHtml, html, updateDraggingHtml, moveToColumn } from './view.js'
import { TABLES, COLUMNS, state, createOrderData, updateDragging } from './data.js'

let ORDERS_GLOBAL = [];

/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
};

// console.log(html.area)
// console.log(html.columns)
// console.log(html.other.grid)
// console.log(html.other.order)

const handleDragStart = (event) => {
    console.log('Start');
}

const handleDragEnd = (event) => {
    const { target } = event;
    console.log('End');
    console.log(target);

    //moveToColumn()
}

const handleHelpToggle = (event) => {
    const { target } = event;
    
    if (target == html.other.help) {
        html.help.overlay.showModal();
    } 
    else if (target == html.help.cancel) {
        html.help.overlay.close();
    }        
};

const handleAddToggle = (event) => {
    const { target } = event;
     if (target == html.other.add) {
        html.add.overlay.showModal();
     } else if (target == html.add.cancel)
    {
        html.add.overlay.close();
        html.add.form.reset();
    };
};

const handleAddSubmit = (event) => {
    event.preventDefault();
    const { target } = event;
    
    let data = {
        title: null,
        table: null,
        column: COLUMNS[0],
    }

    if (target == html.add.form) {
        
        data.title = html.add.title.value;
        data.table = html.add.table.value;
        html.add.overlay.close();
        html.add.form.reset();

        const order = createOrderData(data);
        const orderHTML = createOrderHtml(order);
        html.columns.ordered.appendChild(orderHTML); 

        ORDERS_GLOBAL.push({[order.id] : order});
    } 

};

const handleEditToggle = (event) => {
    const { target } = event;
 
    if (target == html.edit.cancel) {

        html.edit.overlay.close();

    } else if (target == html.edit.delete) {
        //Place delete function here.
    } else {
        html.edit.overlay.showModal();
    }

    // Stop propagation!
};

const handleEditSubmit = (event) => {}
const handleDelete = (event) => {}

html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)

html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}
// const it = html.columns.ordered.querySelector('.');
//.getAttribute('data-id');