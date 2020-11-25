import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';

import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';

moment.locale('es');
// Configura el localizador proporcionando el objeto de momento (o globalizar)
// al localizador correcto.
const localizer = momentLocalizer(moment); // o globalizeLocalizer

const events = [{
    title: 'Cumpleaños del jefe',
    start: moment().toDate(),
    end: moment().add( 2, 'hours').toDate(),
    bgcolor: '#fafafa',
    notes: 'Comprar el pastel'
}]

export const CalendarScreen = () => {

    const eventStyleGetter = (event, start, end, isSelected) => {

        const style = {
            backgroundColor: '#165ace',
            borderRdius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }

        return {
            style
        }
    }

    return (
        <div className="calendar-screen">
            <Navbar />
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={eventStyleGetter}
            />
        </div>
    )
}
