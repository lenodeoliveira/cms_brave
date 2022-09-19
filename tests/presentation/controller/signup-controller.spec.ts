describe('SignUp Controller', () => {
    test('Should call AddAccount the correct values', async () => {
        const sut = new SignUpController()
        const addSpy = jest.spyOn(addAccountStub, 'add')
        const httpResponse = {
            name: 'any_name',
            email: 'any_mail@mail.com',
            password: 'any_password'
        }
        const httpResponse = await sut.handle(httpResponse)
        expect(httpResponse).toHaveBeenCalledWith({
            name: 'any_name',
            email: 'any_mail@mail.com',
            password: 'any_password'
        })

    })
})