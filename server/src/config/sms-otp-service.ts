import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export const sendOTP = async (data: { phoneNumber: string; code: string }) => {
  const { errorMessage } = await client.messages.create({
    body: `${data.code} is your verification code`,
    from: process.env.TWILIO_FROM_PHONE,
    to: data.phoneNumber,
  });

  if (errorMessage) throw new Error(errorMessage);
};

export const signUpOnVerification:
  | {
      getTempEmail: (phoneNumber: string) => string;
      getTempName?: (phoneNumber: string) => string;
    }
  | undefined = {
  getTempEmail: (phoneNumber) => {
    return `${phoneNumber}@my-site.com`;
  },
  getTempName: (phoneNumber) => {
    return phoneNumber; //by default, it will use the phone number as the name
  },
};
