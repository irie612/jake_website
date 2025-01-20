import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { DaysOfWeek } from '@/components/booking_form';


export async function POST(request: NextRequest) {
    const { email, firstName, lastName, phone, description, size, placement, budget, days } = await request.json();

    const transport = nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.BOOKING_EMAIL,
            pass: process.env.MY_PASSWORD,
        },
    });

    const mailOptions: Mail.Options = {
        from: process.env.BOOKING_EMAIL,
        // to: process.env.BOOKING_EMAIL, // switch out this line for the line below in production
        to: process.env.MY_EMAIL,
        cc: email, // (uncomment this line if you want to send a copy to the sender)
        subject: `Booking Request - ${firstName} ${lastName} (${email})`,
        text: 
        `
        ${firstName} ${lastName} has made a booking request with the following details:\n
        Email: ${email}, \n
        Phone: ${phone}, \n
        Description: ${description}, \n
        Size: ${size} inches, \n
        Placement: ${placement}, \n
        Budget: £${budget}, \n
        Preferred Days: ${days.map((day: DaysOfWeek) => day).join(', ')}
        `,
    };

    const sendMailPromise = () =>
        new Promise<string>((resolve, reject) => {
            transport.sendMail(mailOptions,
                (err) => {
                    if (!err) {
                        resolve('Email sent');
                    } 
                    else {
                        console.log(err.message);
                        reject(err.message);
                    }
                }
            );
        });

    try {
        await sendMailPromise();
        return NextResponse.json({ message: 'Email sent' });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}