# $attrs和$listeners用来组件之间的通信

## $attrs 用来父组件给子组件或孙子组件，甚至无限子组件传值

父组件中给子组件绑定了多个属性name, age, sex, height, title, id

```js
// Father组件
<Child
  :name="name"
  age="18"
  sex="女"
  height="158"
  title="A Girl"
  id="child"
  @getChildData="setData"
  @getDataFromChild="getData"
>
</Child>
```

而子组件中作为props接收的只有name，那么这时候其他（非props）绑定的属性就可以在组件的$attrs中找到，也可以将$attrs绑定在子组件Child引用的其他组件GrandChild上，这时GrandChild中的$attrs也可以找到那些属性

```js
// Child 组件
<template>
  <div>
    <p>Child的$attrs是父组件中的不作为props传入的绑定值: {{ $attrs }}</p>
    <p>可以用$attrs将父组件的属性值传给Child的子组件</p>
    <grand-child v-bind="$attrs"></grand-child>
  </div>
</template>

<script>
import GrandChild from './GrandChild';

export default {
  name: 'Child',
  components: {
    GrandChild
  },
  // 父组件中给Child组件绑定的的非props属性将作为普通HTML属性渲染出来（除了class和style, id可以继承），如<div age="18" sex="女" height="158" title="A Girl"></div>，如果不想这样，就设置为false
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default() {
        return '';
      }
    }
  },
  created() {
    console.log(this.$attrs);
  },
  methods: {
  }
};
</script>
```

```js
created() {
  console.log(this.$attrs); // {age: "18", sex: "女", height: "158", title: "A Girl", id: "child"}
},
```

### inheritAttrs

上面绑定了那么多属性，就相当于给标签自定义了很多属性，如果默认渲染，就会直接渲染在HTML中（class和style除外，但是id也会渲染）

```html
<div data-v-1a21ebbf="" age="18" sex="女" height="158" title="A Girl" id="child">
 ......
</div>
```

所以我们需要将子组件的 inheritAttrs 设置为false，即可阻止渲染这些多余属性。

```html
<div data-v-1a21ebbf="">
 ......
</div>
```

## $listeners 用来将子组件（子组件的子组件等）的事件传递给父组件

这里的最上层的父组件监听了两个子组件的事件：getChildData，getDataFromChild。但是子组件Child中并没有发布这两个事件，所以可以在子组件中的$listeners找到父组件的监听者们，如果在子组件中将这个监听者对象继续往下传递，那么孙子组件也可以看到监听者们，这时可以在孙子组件中发布对应事件，父组件就可以监听并触发对应事件了

```js
// Father组件，事件的监听者
<template>
  <div>
    这是父组件
    -------------------------
    <Child
      @getChildData="setData"
      @getDataFromChild="getData"
    >
    </Child>
  </div>
</template>

<script>
import Child from './Child';

export default {
  name: 'Father',
  components: { Child },
  data() {
    return {
    };
  },
  methods: {
    setData() {
      console.log('this is from child');
    },
    getData() {
      console.log('this is from kid');
    }
  }
};
</script>
```

```js
// Child 组件
<template>
  <div>
    <p>Child的$attrs是父组件中的不作为props传入的绑定值: {{ $attrs }}</p>
    <p>可以用$attrs将父组件的属性值传给Child的子组件</p>
    <grand-child  v-on="$listeners"></grand-child>
  </div>
</template>

<script>
import GrandChild from './GrandChild';

export default {
  name: 'Child',
  components: {
    GrandChild
  },
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default() {
        return '';
      }
    }
  },
  created() {
    console.log(this.$listeners);
  },
  methods: {
  }
};
</script>
```

如下，在孙子组件中发布getChildData事件，父组件的setData就会触发

```js
// GrandChild组件，事件的发布者
<template>
  <div>
    <p @click="setFatherData">age: {{ age}}</p>
    <p @click="onShow">childCom2: {{ $attrs }}</p>
  </div>
</template>

<script>

export default {
  name: 'GrandChild',
  inheritAttrs: false,
  props: {
    age: {
      type: String,
      default() {
        return '';
      }
    }
  },
  created() {
    console.log(this.$attrs);
    console.log(this.$listeners);
  },
  methods: {
    onShow() {
     this.$emit('getChildData');
    },
    setFatherData() {
     this.$emit('getDataFromChild');
    }
  }
};
</script>
```