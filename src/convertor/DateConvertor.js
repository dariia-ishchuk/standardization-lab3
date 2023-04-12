import React from 'react';

function convertDateToUkrainianFormat(dateString) {
    const regex = /^(?<month>\d{1,2})\/(?<day>\d{1,2})\/(?<year>\d{4})$/;
    const match = dateString.match(regex);
    if (!match) {
        return dateString;
    }
    const { month, day, year } = match.groups;
    const ukrainianDate = `${day}.${month}.${year}`;
    return ukrainianDate;
}

function DateConvertor() {
    const [date, setDate] = React.useState('');

    function handleChange(event) {
        setDate(event.target.value);
    }

    return (
        <div>
            <label htmlFor="date-input">Enter a date (MM/DD/YYYY): </label>
            <input id="date-input" type="text" value={date} onChange={handleChange} />
            <p>The Ukrainian date format is: {convertDateToUkrainianFormat(date)}</p>
        </div>
    );
}

export default DateConvertor;