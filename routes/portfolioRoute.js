const express = require("express");
const route = express.Router();

const { Intro, About, Project, Contact, Experience, Course } = require("../models/portfolioModel.js");

const { Admin } = require("../models/userModel.js");

// ! Get portfolio data
route.get("/get-portfolio-data", async (req, res) => {
    try {
        const intros = await Intro.find();
        const abouts = await About.find();
        const projects = await Project.find();
        const contacts = await Contact.find();
        const experiences = await Experience.find();
        const courses = await Course.find();

        res.status(200).send({
            intro: intros.length > 0 ? intros[0] : null,
            about: abouts.length > 0 ? abouts[0] : null,
            projects: projects,
            contacts: contacts,
            experiences: experiences,
            courses: courses
        });
    } catch (error) {
        res.status(500).send({ error: "Server Error", details: error.message });
    }
});

// ! Update Intro

route.post("/update-intro", async (req, res) => {
    try {
        const intro = await Intro.findOneAndUpdate(
            {_id:req.body._id},
            req.body,
            {new: true}
        )
        res.status(200).send({
            data: intro,
            success: true,
            message: "Introduction Updated SUccessfully!"
        })
    } catch (error) {
        res.status(200).send({
            message: error.message,
            success: false
        })
    }
})

route.post("/update-about", async (req, res) => {
    try {
        const about = await About.findOneAndUpdate(
            {_id:req.body._id},
            req.body,
            {new: true}
        )
        res.status(200).send({
            data: about,
            success: true,
            message: "About Updated SUccessfully!"
        })
    } catch (error) {
        res.status(200).send({
            message: error.message,
            success: false
        })
    }
})

route.post("/update-contact", async (req, res) => {
    try {
        const contact = await Contact.findOneAndUpdate(
            {_id:req.body._id},
            req.body,
            {new: true}
        )
        res.status(200).send({
            data: contact,
            success: true,
            message: "Contact Updated SUccessfully!"
        })
    } catch (error) {
        res.status(200).send({
            message: error.message,
            success: false
        })
    }
})

// Add experience


route.post("/add-experience", async (req, res) => {
    try {
        const experience = await Experience.create(req.body);
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience Added Successfully!"
        })
        
    } catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        })
        
    }
})

route.post("/update-experience", async (req, res) => {

    try {
        const experience = await Experience.findOneAndUpdate(
            {_id: req.body._id},
            req.body
        )
    
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience Updated Successfully!"
        })
    } catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
    
})

route.post("/delete-experience", async (req, res) => {

    // return;
    try {
        const experience = await Experience.findOneAndDelete({_id: req.body._id});

        if (!experience) {
            return res.status(404).send({
                success: false,
                message: "Experience not found"
            });
        }
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience Deleted Successfully!"
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
    
})

route.post("/add-course", async (req, res) => {
    try {
        const course = await Course.create(req.body);
        res.status(200).send({
            data: course,
            success: true,
            message: "Course Added Successfully!"
        })
        
    } catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        })
        
    }
})

route.post("/update-course", async (req, res) => {

    try {
        const course = await Course.findOneAndUpdate(
            {_id: req.body._id},
            req.body
        )
    
        res.status(200).send({
            data: course,
            success: true,
            message: "Course Updated Successfully!"
        })
    } catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
    
})

route.post("/delete-course", async (req, res) => {

    try {
        const course = await Course.findOneAndDelete({_id: req.body._id});

        if (!course) {
            return res.status(404).send({
                success: false,
                message: "Course not found"
            });
        }
        res.status(200).send({
            data: course,
            success: true,
            message: "Course Deleted Successfully!"
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
    
})

route.post("/add-project", async (req, res) => {
    try {
        const project = await Project.create(req.body);
        res.status(200).send({
            data: project,
            success: true,
            message: "Project Added Successfully!"
        })
        
    } catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        })
        
    }
})

route.post("/update-project", async (req, res) => {

    try {
        const project = await Project.findOneAndUpdate(
            {_id: req.body._id},
            req.body
        )
    
        res.status(200).send({
            data: project,
            success: true,
            message: "Project Updated Successfully!"
        })
    } catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
    
})

route.post("/delete-project", async (req, res) => {

    // return;
    try {
        const project = await Project.findOneAndDelete({_id: req.body._id});

        if (!project) {
            return res.status(404).send({
                success: false,
                message: "Project not found"
            });
        }
        res.status(200).send({
            data: project,
            success: true,
            message: "Project Deleted Successfully!"
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
    
})

route.post("/admin-login", async (req, res) => {
    
    try {
        const admin  = await Admin.findOne({
            username: req.body.username,
            password: req.body.password
        })
    
        if (admin) {
            res.status(200).send({
                data: admin,
                success: true,
                message: "Login successful"
            })
        } else {
            res.status(500).send({
                data: [],
                success: false,
                message: "Invalid username or password!"
            })
        }
    } catch (error) {
        res.status(500).send({
            data: [],
            success: false,
            message: error.message
        })
    }
})

module.exports = route;
