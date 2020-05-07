
export const JoiErrorFormatter = (errStr) => errStr.split('"').join('');

export const validateInput = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync({ ...req.body, ...req.params });
    req.body = { ...req.body, ...req.params };
    return next();
  } catch (error) {
    return res.status(422).json({ status: 422, message: JoiErrorFormatter(error.message) });
  }
};
