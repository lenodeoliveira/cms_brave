import { MailProvider } from '@/data/protocols/providers/mail-provider'
import nodemailer from 'nodemailer'

export class MailProviderAdapter implements MailProvider {
    async sendMail(message: MailProvider.Request): Promise<void> {
        const transporter = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth: {
                user: '2f35195d798232',
                pass: 'd1ebdeb9300b3c'
            }
        })

        await transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        })
    }
}