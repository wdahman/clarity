<template>
  <div>
    <table class="table" v-if="item === 'bindings'">
      <tr>
        <th class="left">Binding</th>
        <th class="left">Type</th>
        <th class="left">Options</th>
        <th class="left">Default</th>
        <th class="left">Description</th>
      </tr>
      <tr v-for="item in items">
        <td class="left">{{ bindingName(item) }}</td>
        <td class="left">{{ item.type }}</td>
        <td class="left">{{ item.options }}</td>
        <td class="left">{{ item.default }}</td>
        <td class="left">{{ item.description }}</td>
      </tr>
    </table>

    <table class="table" v-if="item === 'css'">
      <tr>
        <th class="left">CSS Class</th>
        <th class="left">Host Elements</th>
        <th class="left">Required</th>
        <th class="left">Description</th>
      </tr>
      <tr v-for="item in items">
        <td class="left">{{ item.name }}</td>
        <td class="left">{{ item.host }}</td>
        <td class="left">{{ item.required }}</td>
        <td class="left">{{ item.description }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Api from '../../../data/api.json';

export default {
  name: 'DocApiTable',
  props: ['object', 'item'],
  computed: {
    items: function () {
      return Api[this.object][this.item];
    },
  },
  methods: {
    typeName: function (item) {
      switch (item.type) {
        case 'input':
          return `Input`;
          break;
        case 'output':
          return `Output`;
          break;
        case 'two-way':
          return `Two-Way Binding`;
          break;
      }
    },
    bindingName: function (item) {
      switch (item.type) {
        case 'input':
          return `[${item.name}]`;
          break;
        case 'output':
          return `(${item.name})`;
          break;
        case 'two-way':
          return `[(${item.name})]`;
          break;
      }
    },
  },
};
</script>
