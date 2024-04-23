import Mentor from "../models/mentorModel.js";
import MentorInfo from "../models/MentorInfoModel.js";
import bcrypt from "bcrypt";
import { sendResponse, sendErrorResponse } from "../utils/helper.js";

const registerMentor = async (req, res) => {
  const { name, email, password, phoneNo } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newMentor = await new Mentor({
    name,
    email,
    password: hashedPassword,
    phoneNo,
  });
  try {
    await newMentor.save();
    sendResponse(res, "User created", newUser);
  } catch (error) {
    sendErrorResponse(res, 500, "Error creating user");
  }
};

const findMentorByName = async (req, res) => {
  const { name } = req.body;
  try {
    // Search for the mentor by name
    const mentor = await Mentor.findOne({ name });

    if (!mentor) {
      // If mentor is not found, return a response indicating that
      sendResponse(res, "Mentor not found", null);
    } else {
      // If mentor is found, return the mentor object
      sendResponse(res, "Mentor found", mentor);
    }
  } catch (error) {
    // If an error occurs during the search, handle it and return an error response
    sendErrorResponse(res, 500, "Error finding mentor");
  }
};

const mentorInfo = async (req, res) => {
  const { mentorId, startTime, endTime, dispcription, experience } = req.body;

  const newMentorInfo = await new MentorInfo({
    mentorId,
    startTime,
    endTime,
    dispcription,
    experience,
  });
  try {
    await newMentorInfo.save();
    sendResponse(res, "User created", newUser);
  } catch (error) {
    sendErrorResponse(res, 500, "Error creating user");
  }
};

export { findMentorByName, registerMentor, mentorInfo };
