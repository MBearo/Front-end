import { h } from './js/component';
import { TabView } from './js/TabView';
import { ScrollView } from './js/ScrollView';
import { Text } from './js/Text';
import { ListView } from './js/ListView';

let trigged = false;
function onScrollEnd() {
  if (!trigged) {
    trigged = true;
    setTimeout(() => {
      this.setAttribute('end-text', 'no more');
    }, 1000);
  }
}

(<TabView >
  <ScrollView tab-title="推荐" end-text="加载更多" on-scrollEnd={onScrollEnd}>
    <Text>scroll1</Text>
    <ListView data={[1, 2, 3, 4, 5]}></ListView>
    <Text>some Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Text</Text>

  </ScrollView>
  <ScrollView tab-title="有趣的店">
    <Text>scroll2</Text>
    <Text>some Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Text</Text>
  </ScrollView>
  <ScrollView tab-title="品牌新店">
    <Text>scroll3</Text>
    <Text>some Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Textsome Text some Text some Text some Text some Text some Text</Text>
  </ScrollView>
</TabView>).mount(document.getElementById('app'));