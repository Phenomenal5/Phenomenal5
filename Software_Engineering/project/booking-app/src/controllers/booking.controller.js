import prisma from "../utils/prisma.js";




export const createBooking = async (req, res) => {
    try {
        const { startDate, endDate, roomId } = req.body;

        // check availability
        const conflict = await prisma.booking.findFirst({
            where: {
                roomId,
                OR : [
                    { startDate : { lte: new Date(endDate)}, endDate : { gte : new Date(startDate)} }
                ]
            }
        })

        if(conflict){
            return res.status(400).json({message: "Room already booked"})
        }

        const booking = await prisma.booking.create({
            data: {
                roomId,
                userId : req.userId,
                startDate: new Date(startDate),
                endDate: new Date(endDate)
            }
        })

        res.status(201).json({message: "Booking created successfully", booking})
    } catch (error) {
        res.status(500).json({message: "Something went wrong", error: error.message})
    }
}

export const getBooking = async (req, res) => {
    try {
        const bookings = await prisma.booking.findMany({
            include : { room: true }
        })

        res.json(bookings)
    } catch (error) {
        res.status(500).json({message: "Something went wrong", error: error.message})
    }
}