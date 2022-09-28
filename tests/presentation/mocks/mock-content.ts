

export class AddContentSpy {
    params: any
    async add (params: any): Promise<void> {
        this.params = params
    }
}