import { shallowMount } from "@vue/test-utils";
import Note from "./Note.vue";

describe("Note.vue", () => {
  it("renders contents", () => {
    const note = {
      title: "Hello",
      content: "World",
    };
    const wrapper = shallowMount(Note, {
      propsData: { note, onClick: jest.fn() },
    });

    expect(wrapper.find("h2").text()).toMatch(note.title);
    expect(wrapper.find("p").text()).toMatch(note.content);
  });

  it("renders placeholder title", () => {
    const note = {
      content: "World",
    };
    const wrapper = shallowMount(Note, {
      propsData: { note, onClick: jest.fn() },
    });

    expect(wrapper.find("h2").text()).toMatch("Title");
    expect(wrapper.find("p").text()).toMatch(note.content);
  });
});
