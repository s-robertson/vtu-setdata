import { shallow } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'New Message';
    const wrapper = shallow(HelloWorld);

    wrapper.setData({ msg });
    expect(wrapper.find('h1').text()).toMatch(msg);
  })
});
