import Joi from "joi";
import { Types } from "mongoose";

// Validation schema for the Content model
const contentValidation = {
  // Validation for creating or updating content
  create: {
    body: Joi.object({
      link: Joi.string().optional().uri().messages({
        "string.uri": "Link must be a valid URL",
        "string.base": "Link must be a string"
      }),
      type: Joi.string()
        .valid("image", "video", "article", "audio")
        .required()
        .messages({
          "string.base": "Type must be a string",
          "any.only":
            'Type must be one of "image", "video", "article", or "audio"'
        }),
      title: Joi.string().required().messages({
        "string.base": "Title must be a string",
        "string.empty": "Title is required"
      }),
      tags: Joi.array()
        .items(
          Joi.string()
            .regex(/^[0-9a-fA-F]{24}$/)
            .required()
        )
        .optional()
        .messages({
          "array.base": "Tags must be an array",
          "array.items": "Each tag must be a valid ObjectId"
        }),
      userId: Joi.array()
        .items(
          Joi.string()
            .regex(/^[0-9a-fA-F]{24}$/)
            .required()
        )
        .required()
        .messages({
          "array.base": "UserId must be an array of ObjectIds",
          "array.items": "Each userId must be a valid ObjectId"
        })
    })
  },
  delete: {
    body: Joi.object({
      contentId: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required()
        .messages({
            'string.empty': 'ContentId is required',
            'string.regex': 'ContentID must be valid ObjectID',
        }),
    })
  },
  share:{
    body:Joi.object({
     share: Joi.boolean().required().messages({
        "boolean.base": "Share must be a boolean",
        "boolean.empty": "Share must be required"
      })
    })
  },
  sharelink:{
    params:Joi.object({
      sharelink:Joi.string().min(10).max(10).messages({
        "string.empty":"ShareLink must be string",
        "string.base":"Link must be string"
      })
    })
  }
};

export default contentValidation;
