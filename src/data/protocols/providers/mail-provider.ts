export interface IMailProvider {
  sendMail(message: IMailProvider.Request): Promise<void>
}

export namespace IMailProvider {
  export type Request = {
    to: IAddress
    from: IAddress
    subject: string
    body: string
  }
}

interface IAddress {
  email: string
  name: string
}

