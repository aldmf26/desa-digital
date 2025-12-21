import numeral from 'numeral';
import {DateTime} from 'luxon';

export function formatRupiah(value) {
    return numeral(value).value();
}

export function formatPercentage(value) {
    return numeral(value).format('0,0[.][00]%');
}

export function formatDate(value) {
    const options = {day:'numeric', month:'long', year:'numeric'};

    return new Date(value).toLocaleDateString('id-ID', options);
}

export function formatDateTime(value) {
    const options = {day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric'};

    return new Date(value).toLocaleDateString('id-ID', options);
}

export function formatToClientTimzezone(date) {
    const originalDate = DateTime.fromISO(date, {zone: 'utc'});

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return originalDate.setZone(timezone).setLocale('id').toFormat('dd LLLL yyyy, HH:mm');
}

export function ucfist(string) {
    return string ? string.charAt(0).toUpperCase() + string.slice(1) : '';
}