import { AppComponent } from './app.component';

describe('app.component', () => {
    beforeEach(() => {
        this.com = new AppComponent()
    })
    it('a to b', () => {
        expect(this.com.name).toEqual('zhoubingbings')
    })
})
