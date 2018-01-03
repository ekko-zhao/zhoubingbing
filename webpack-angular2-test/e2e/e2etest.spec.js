
describe('app.component', () => {
    beforeEach(() => {
        browser.get('http://localhost:3089/')
    })
    it('a to b', () => {
        expect(this.com.name).toEqual('zhoubingbing')
    })
})
