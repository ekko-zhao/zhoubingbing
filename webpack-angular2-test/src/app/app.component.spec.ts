import { AppComponent } from './app.component';
import { } from '@types/jasmine';

describe('app.component', () => {
    beforeEach(() => {
        this.com = new AppComponent();
    })
    it('a to b', () => {

        expect(this.com.names).toEqual('zhoubingbing')
    })
})
