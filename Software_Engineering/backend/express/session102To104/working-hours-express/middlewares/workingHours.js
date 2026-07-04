export const checkWorkingHours = (req, res, next) => {
    const now = new Date()
    const day = now.getDay()
    const hour = now.getHours()
    const weekdays = day >= 1 && day <= 5
    const workingHours = hour >= 9 && hour <= 17

    // console.log(day)
    // console.log(hour)
    // console.log(workingHours)

    if(weekdays && workingHours) {
        next()
    } else {
        res.render('closed')
    }
}


// Days: 0 = sunday , 1 = monday, ......... 6 = saturday
// Hours: 9 to 17