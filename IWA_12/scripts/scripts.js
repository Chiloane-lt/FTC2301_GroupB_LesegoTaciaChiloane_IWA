const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

const book0 = document.querySelector('#book1');
const status0 = book0.querySelector('.status').innerHTML;
const reserve0 = book0.querySelector('.reserve');
const checkout0 = book0.querySelector('.checkout');
const checkin0 = book0.querySelector('.checkin');

const book1 = document.querySelector('#book2');
const status1 = book1.querySelector('.status').innerHTML;
const reserve1 = book1.querySelector('.reserve');
const checkout1 = book1.querySelector('.checkout');
const checkin1 = book1.querySelector('.checkin');

// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

checkin0.style.color = '';
book0.querySelector('.status').style.color = STATUS_MAP[status0].color;
STATUS_MAP[status0].canReserve ? reserve0.setAttribute('enabled', 'enabled') : reserve0.setAttribute('disabled', 'disabled');
STATUS_MAP[status0].canCheckout ? checkout0.setAttribute('enabled', 'enabled') : checkout0.setAttribute('disabled', 'disabled');
STATUS_MAP[status0].canCheckIn ? checkin0.setAttribute('enabled', 'enabled') : checkin0.setAttribute('disabled', 'disabled');

checkin1.style.color = '';
book1.querySelector('.status').style.color = STATUS_MAP[status1].color;
STATUS_MAP[status1].canReserve ? reserve1.setAttribute('enabled', 'enabled') : reserve1.setAttribute('disabled', 'disabled');
STATUS_MAP[status1].canCheckout ? checkout1.setAttribute('enabled', 'enabled') : checkout1.setAttribute('disabled', 'disabled');
STATUS_MAP[status1].canCheckIn ? checkin1.setAttribute('enabled', 'enabled') : checkin1.setAttribute('disabled', 'disabled');


// checkin.2.color = none
// status.2.style.color = STATUS_MAP.status.color
// reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'