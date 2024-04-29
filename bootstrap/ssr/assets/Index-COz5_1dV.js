import { onMounted, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./NextLayout-CXcbsrfx.js";
import { initFlowbite } from "flowbite";
import "@inertiajs/vue3";
import "pinia";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    onMounted(() => {
      initFlowbite();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container m-auto"${_scopeId}><h1${_scopeId}>Contact</h1><h1${_scopeId}>Contact</h1><h1${_scopeId}>Contact</h1></div>`);
          } else {
            return [
              createVNode("div", { class: "container m-auto" }, [
                createVNode("h1", null, "Contact"),
                createVNode("h1", null, "Contact"),
                createVNode("h1", null, "Contact")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Contact/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
