import { shallowMount } from "@vue/test-utils";
import Controls from "@/components/Controls.vue";

describe("Controls.vue", () => {
  it("renders title prop", () => {
    const title = "Hello world";
    const wrapper = shallowMount(Controls, {
      propsData: { title },
    });

    expect(wrapper.text()).toMatch(title);
  });
});
