var plugin = requirePlugin("hello-plugin");
Page({
  data: {
    items: [],
    currentItem: 0,
    option: {
      min: 1,
      max: 9,
      increment: 1,
    }
  },
  onLoad: function () {
    plugin.sayHello();
    var world = plugin.answer;
    console.log(world);
  },
  setTotal: function (e) {
    console.log(e)
  }
});