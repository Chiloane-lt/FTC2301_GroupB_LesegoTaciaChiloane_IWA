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

// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

checkin0.style.color = '';
book0.querySelector('.status').style.color = STATUS_MAP[status0].color;
reserve0.innerHTML = STATUS_MAP[status0].canReserve ? 'enabled' : 'disabled';
checkout0.innerHTML = STATUS_MAP[status0].canCheckout ? 'enabled' : 'disabled';
checkin0.innerHTML = STATUS_MAP[status0].canCheckIn ? 'enabled' : 'disabled';

console.log(status0);
console.log(STATUS_MAP[status0].canReserve);


// checkin.1.color = none
// status.1.style.color = STATUS_MAP.status.color
// reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// checkin.2.color = none
// status.2.style.color = STATUS_MAP.status.color
// reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'