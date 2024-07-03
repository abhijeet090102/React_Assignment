import Event from './EventScedule.css'
function EventSchedule(props) {
    const {tit,dat,loc,des} = props;
    return (
        <>
            <div className="eventschedule">
                <h1 className="events">Event Schedule</h1>
                <p>Title : {tit}</p>
                <p>Date : {dat}</p>
                <p>Location : {loc}</p>
                <p>Description : {des}</p>
            </div>
        </>
    )
}
export default EventSchedule;