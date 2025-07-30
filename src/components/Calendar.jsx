const Calendar = ({handleCalendar}) => {
  return (
    <div>
      <input 
      type="date"
      onChange={handleCalendar}
      >
        
      </input>
    </div>
  )
}

export default Calendar