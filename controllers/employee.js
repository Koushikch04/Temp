const Appointment = require('../models/appointment')
const Orders = require('../models/orders')
const User = require('../models/userSchema')
const Product = require("../models/productSchema")

exports.employeeDashboard = async (req, res) => {
    const appointments = await Appointment.find({ status: "pending"});
    // const orders = await Orders.find({ status: "pending"}).populate('products').populate('userSchema').lean().exec();

    res.render("./HTML/ProfilePages/employee.ejs", { appointments: appointments });
}

exports.changeStatus = async(req, res) => {
    const appointmentId = req.query.appId;
    const status = req.query.status;

    const appointment = await Appointment.findById(appointmentId);
    console.log(appointment)
    const userName = appointment.userName;
    const names = userName.split(" ");
    console.log(names);    
    await Appointment.findOneAndUpdate({ _id: appointmentId}, { status: status});
    await User.findOne({'name.firstName': names[0]}).then(doc => {
        console.log(doc.appointment[0])
        console.log(appointment.date);
        let ind = 0;
        let inde = -1;
        doc.appointment.forEach(element => {
            if(element.date == appointment.date) inde = ind;
            ind++;
        });
        console.log(inde)
        doc.appointment[inde].status = status
        doc.save()
    })
    res.redirect('/profile/employee/profile');
}