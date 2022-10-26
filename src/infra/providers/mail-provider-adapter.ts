import { MailProvider } from '@/data/protocols/providers/mail-provider'
import nodemailer from 'nodemailer'
import handlebars from 'handlebars'
import path from 'path'
import fs from 'fs'
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

        const template = handlebars.compile(message.body)
        const htmlToSend = template(message.replacements)

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
            html: htmlToSend
        })
    }
}