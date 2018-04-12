import { shallow } from '@vue/test-utils/packages/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'New Message';
    const wrapper = shallow(HelloWorld);

    wrapper.setData({ msg });

    expect(wrapper.contains('h1')).toBe(true);
  })
});
