import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Page extends Vue {
  render() {
    return (
      <demo-section>
        <demo-block title="基础用法">
          <demo-button type="primary" style="margin-left: 15px">
            按钮
          </demo-button>
        </demo-block>

        <demo-block title="自定义颜色">
          <demo-button color="#03a9f4" style="margin-left: 15px">
            按钮
          </demo-button>
        </demo-block>
      </demo-section>
    );
  }
}
