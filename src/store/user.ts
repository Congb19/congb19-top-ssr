import { defineStore } from 'pinia';

export default defineStore('user', {
  state: () => {
    return {
      name: 'cc',
      age: 20,
    };
  },
  actions: {
    updateName(name: string) {
      this.name = name;
    },
    updateAge(age: number) {
      this.age = age;
    },
  },
});
