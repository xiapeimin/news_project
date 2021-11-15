const app = getApp()

Page({
  data: {
    currentTab:0
  },
  swichNav: function (e) {
    console.log('hh');
    //console.log(e);
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
        return false;
    } else {
        that.setData({
            currentTab: e.target.dataset.current,
        })
    }
  },
  swiperChange: function (e) {
    console.log('lllllll');
    //console.log(e);
    this.setData({
        currentTab: e.detail.current,
    })
  },
  onLoad: function () {
    console.log('Welcome to Mini Code')
  },
})
