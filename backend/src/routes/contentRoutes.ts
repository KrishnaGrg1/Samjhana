import { Router } from "express";
import getUserfromAuthToken from "../middlewares/jwtfromUser";
import contentController from "../controller/content";
import validate from "../validations/allvalidate";
import contentValidation from "../validations/content";

const contentRouter = Router();

contentRouter.post(
  "/content",
  getUserfromAuthToken,
  validate(contentValidation.create),
  contentController.createContent
);

contentRouter.get(
  "/content",
  getUserfromAuthToken,
  contentController.viewContent
);

contentRouter.delete(
  "/content",
  getUserfromAuthToken,
  validate(contentValidation.delete),
  contentController.deleteContent
);

contentRouter.post("/brain/share", getUserfromAuthToken,validate(contentValidation.share),contentController.shareContent);

contentRouter.post('/brain/:sharelink',validate(contentValidation.sharelink),contentController.shareContentLink)

export default contentRouter;
