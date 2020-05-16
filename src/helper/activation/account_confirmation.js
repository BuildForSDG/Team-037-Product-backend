import crypto from 'crypto-random-string';
import database from '../../database/models';
import sendNotificationEmail from '../notifications/sendEmailNotificationMessage';
// import sendNotificationSms from '../message_service_templates/send_notification_sms';

const { Activation } = database;


const accountConfirmationHelper = async (confirmationType, data, emailOrSMSType) => {
  let ACTIVATION_SENT_TO;
  switch (confirmationType) {
    case 'EMAIL': {
      const token = crypto({ length: 16 });
      ACTIVATION_SENT_TO = 'email';
      Activation.create({ userId: data.id, token });
      await sendNotificationEmail(data.email, token, data, emailOrSMSType);
      break;
    }
    default: {
      const token = crypto({ length: 16 });
      ACTIVATION_SENT_TO = 'email';
      Activation.create({ userId: data.id, token });
      await sendNotificationEmail(data.email, token, data, emailOrSMSType);
      break;
    }
  }
  return ACTIVATION_SENT_TO;
};

export default accountConfirmationHelper;
