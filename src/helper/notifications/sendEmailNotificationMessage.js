import sendGrid from '@sendgrid/mail';
import 'dotenv/config';
import settings from '../../settings';
import
accountConfirmationEmailMessage
  from '../message_template/accountMessaeTemplate';

sendGrid.setApiKey(process.env.SENDGRID_API_KEY);
const sendNotificationEmail = async (to, token, data, emailOrSMSType) => {
  let msg;

  switch (emailOrSMSType) {
    case 'ACCOUNT SIGNUP VERIFICATION': {
      const link = `${process.env.BACKEND_URL}${settings.API_ENTRY_POINT}/auth/verify/email?token=${token}`;
      msg = {
        to,
        from: 'no-reply@buildforsdg.andela.com',
        subject: 'Confirm your empowerFarmer account... AndelaBuildSDG Empower farmer access link',
        html: accountConfirmationEmailMessage(data, link)
      };
      break;
    }
    case 'ADMIN ACCOUNT SIGNUP VERIFICATION': {
      const link = `${process.env.BACKEND_URL}${settings.API_ENTRY_POINT}/auth/verify/email?token=${token}`;
      msg = {
        to,
        from: 'no-reply@buildforsdg.andela.com',
        subject: 'Confirm your empowerFarmer account... AndelaBuildSDG Empower farmer access link',
        html: accountConfirmationEmailMessage(data, link)
      };
      break;
    }
    default: {
      const link = `${process.env.BACKEND_URL}${settings.API_ENTRY_POINT}/auth/verify/email?token=${token}`;
      msg = {
        to,
        from: 'no-reply@buildforsdg.andela.com',
        subject: 'Confirm your ADMIN account... AndelaBuildSDG Empower farmer access link',
        html: accountConfirmationEmailMessage(data.firstName, data.lastName, to, link)
      };
      break;
    }
  }
  await sendGrid.send(msg);
};

export default sendNotificationEmail;
