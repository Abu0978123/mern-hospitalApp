import express from "express";
import {
  addNewAdmin,
  addNewDoctor,
  deleteDoctor,
  getAllDoctors,
  getUserDetails,
//   addNewDoctor,
//   getAllDoctors,
//   getUserDetails,
  login, 
  logoutAdmin, 
  logoutPatient, 
//   logoutAdmin,
//   logoutPatient,
  patientRegister,
} from "../controller/userController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/patient/register", patientRegister);
router.post("/login", login);
router.post("/admin/addnew", isAdminAuthenticated, addNewAdmin);
router.post("/doctor/addnew", isAdminAuthenticated, addNewDoctor);
router.delete("/doctor/delete/:id", isAdminAuthenticated, deleteDoctor);
router.get("/doctors", getAllDoctors);
router.get("/patient/me", isPatientAuthenticated, getUserDetails);
router.get("/admin/me", isAdminAuthenticated, getUserDetails);
router.get("/patient/logout", isPatientAuthenticated, logoutPatient);
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);

export default router;