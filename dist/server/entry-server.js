"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var vue = require("vue");
var serverRenderer = require("vue/server-renderer");
var serverRenderer$1 = require("@vue/server-renderer");
var vueRouter = require("vue-router");
var pinia = require("pinia");
var core = require("@vueuse/core");
var App_vue_vue_type_style_index_0_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$5 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_RouterView = vue.resolveComponent("RouterView");
  _push(serverRenderer.ssrRenderComponent(_component_RouterView, _attrs, null, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var App = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const createApp = () => {
  const app = vue.createSSRApp(App);
  return { app };
};
const createRouter = (type) => vueRouter.createRouter({
  history: type === "client" ? vueRouter.createWebHistory() : vueRouter.createMemoryHistory(),
  routes: [
    {
      path: "/",
      name: "index",
      meta: {
        title: "\u9996\u9875",
        keepAlive: true,
        requireAuth: true
      },
      component: () => Promise.resolve().then(function() {
        return index$1;
      })
    },
    {
      path: "/login",
      name: "login",
      meta: {
        title: "\u767B\u5F55",
        keepAlive: true,
        requireAuth: false
      },
      component: () => Promise.resolve().then(function() {
        return login$1;
      })
    },
    {
      path: "/user",
      name: "user",
      meta: {
        title: "\u7528\u6237\u4E2D\u5FC3",
        keepAlive: true,
        requireAuth: true
      },
      component: () => Promise.resolve().then(function() {
        return user$1;
      })
    },
    {
      path: "/vueuse",
      name: "vueuse",
      meta: {
        title: "vueuse",
        keepAlive: true,
        requireAuth: true
      },
      component: () => Promise.resolve().then(function() {
        return vueUse$1;
      })
    }
  ]
});
var useUserStore = pinia.defineStore("user", {
  state: () => {
    return {
      name: "cc",
      age: 20
    };
  },
  actions: {
    updateName(name) {
      this.name = name;
    },
    updateAge(age) {
      this.age = age;
    }
  }
});
var createStore = () => {
  const pinia$1 = pinia.createPinia();
  useUserStore(pinia$1);
  return pinia$1;
};
const render = async (ctx, manifest) => {
  const { app } = createApp();
  const router = createRouter("server");
  app.use(router);
  await router.push(ctx.path);
  await router.isReady();
  const pinia2 = createStore();
  app.use(pinia2);
  const state = JSON.stringify(pinia2.state.value);
  const renderCtx = {};
  const renderedHtml = await serverRenderer$1.renderToString(app, renderCtx);
  const preloadLinks = renderPreloadLinks(renderCtx.modules, manifest);
  return [renderedHtml, state, preloadLinks];
};
function renderPreloadLinks(modules, manifest) {
  let links = "";
  const seen = /* @__PURE__ */ new Set();
  if (modules === void 0)
    throw new Error();
  modules.forEach((id) => {
    const files = manifest[id];
    if (files) {
      files.forEach((file) => {
        if (!seen.has(file)) {
          seen.add(file);
          links += renderPreloadLink(file);
        }
      });
    }
  });
  return links;
}
function renderPreloadLink(file) {
  if (file.endsWith(".js")) {
    return `<link rel="modulepreload" crossorigin href="${file}">`;
  } else if (file.endsWith(".css")) {
    return `<link rel="stylesheet" href="${file}">`;
  } else {
    return "";
  }
}
const _sfc_main$4 = vue.defineComponent({
  name: "UsePinia",
  setup() {
    const userStore = useUserStore();
    const addAge = () => {
      userStore.updateAge(userStore.age + 1);
      console.log(userStore.age);
    };
    return {
      userStore,
      addAge
    };
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h2>\u6B22\u8FCE\u8BBF\u95EEcongb19-top-ssr</h2><div>${serverRenderer.ssrInterpolate(_ctx.userStore.name)}\u7684\u5E74\u9F84\uFF1A ${serverRenderer.ssrInterpolate(_ctx.userStore.age)}</div><br><button>\u70B9\u51FB\u7ED9${serverRenderer.ssrInterpolate(_ctx.userStore.name)}\u7684\u5E74\u9F84\u589E\u52A0\u4E00\u5C81</button><br><!--]-->`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/UsePinia.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var UsePinia = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
var _imports_0 = "/assets/logo.03d6d6da.png";
const _sfc_main$3 = vue.defineComponent({
  name: "IndexPage",
  components: {
    UsePinia
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UsePinia = vue.resolveComponent("UsePinia");
  const _component_router_link = vue.resolveComponent("router-link");
  _push(`<!--[--><img alt="Vue logo"${serverRenderer.ssrRenderAttr("src", _imports_0)}>`);
  _push(serverRenderer.ssrRenderComponent(_component_UsePinia, null, null, _parent));
  _push(`<br>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/login" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u70B9\u51FB\u8DF3\u8F6C\u81F3login`);
      } else {
        return [
          vue.createTextVNode("\u70B9\u51FB\u8DF3\u8F6C\u81F3login")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<br><br>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/user" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u70B9\u51FB\u8DF3\u8F6C\u81F3user\u9875\u9762`);
      } else {
        return [
          vue.createTextVNode("\u70B9\u51FB\u8DF3\u8F6C\u81F3user\u9875\u9762")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<br><br>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/vueuse" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u70B9\u51FB\u8DF3\u8F6C\u81F3vueuse\u9875\u9762`);
      } else {
        return [
          vue.createTextVNode("\u70B9\u51FB\u8DF3\u8F6C\u81F3vueuse\u9875\u9762")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var index = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
var index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = vue.defineComponent({
  name: "LoginPage"
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = vue.resolveComponent("router-link");
  _push(`<!--[--><h2>\u8FD9\u91CC\u662F\u767B\u5F55\u9875\u9762</h2><br>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u70B9\u51FB\u8DF3\u8F6C\u81F3\u9996\u9875`);
      } else {
        return [
          vue.createTextVNode("\u70B9\u51FB\u8DF3\u8F6C\u81F3\u9996\u9875")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<br><br>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/user" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u70B9\u51FB\u8DF3\u8F6C\u81F3user\u9875\u9762`);
      } else {
        return [
          vue.createTextVNode("\u70B9\u51FB\u8DF3\u8F6C\u81F3user\u9875\u9762")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/login.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var login = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
var login$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": login
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = vue.defineComponent({
  name: "UserPage"
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = vue.resolveComponent("router-link");
  _push(`<!--[--><h2>\u8FD9\u91CC\u662F\u7528\u6237\u4E2D\u5FC3\u9875\u9762</h2><br>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u70B9\u51FB\u8DF3\u8F6C\u81F3\u9996\u9875`);
      } else {
        return [
          vue.createTextVNode("\u70B9\u51FB\u8DF3\u8F6C\u81F3\u9996\u9875")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<br><br>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/login" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u70B9\u51FB\u8DF3\u8F6C\u81F3login`);
      } else {
        return [
          vue.createTextVNode("\u70B9\u51FB\u8DF3\u8F6C\u81F3login")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/user.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var user = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
var user$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": user
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = vue.defineComponent({
  name: "VueUse",
  setup() {
    const { x, y } = core.useMouse();
    return {
      x,
      y
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = vue.resolveComponent("router-link");
  _push(`<!--[--><h1>\u6D4B\u8BD5 vueUse \u7684\u9F20\u6807\u5750\u6807</h1><h3>Mouse: ${serverRenderer.ssrInterpolate(_ctx.x)} x ${serverRenderer.ssrInterpolate(_ctx.y)}</h3><br><br>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u70B9\u51FB\u8DF3\u8F6C\u81F3\u9996\u9875`);
      } else {
        return [
          vue.createTextVNode("\u70B9\u51FB\u8DF3\u8F6C\u81F3\u9996\u9875")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/vueUse.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var vueUse = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
var vueUse$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": vueUse
}, Symbol.toStringTag, { value: "Module" }));
exports.render = render;
