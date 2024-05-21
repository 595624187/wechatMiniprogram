import "./s-behavior";
module.exports = Behavior({
  data: {
    username: "父行为", //组件>父行为>子行为>靠后行为
    //这里的s-behavior被my-behavior引用，应该是父引用子，所以s-*优先级大一些
  },
  properties: {},
  methods: {},
});
