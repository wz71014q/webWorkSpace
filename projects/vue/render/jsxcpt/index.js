import Vue from 'vue';
import Child from '../../slot/src/child';

let vm =new Vue({
  el: '#demo',
  render () {
    return (
      <Child>
        Hello Child Slot
        <template v-slot="nameSlot">
          <div className="wrapper">
            <p>
            hello nameSlot
          </p>
          </div>
        </template>
      </Child>
    )
  }
});
Vue.use(vm);