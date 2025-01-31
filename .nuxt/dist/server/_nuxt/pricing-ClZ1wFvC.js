import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$3 } from "./Menu-BOmtUVKS.js";
import { _ as _sfc_main$4 } from "./Footer1-D6LXaAWj.js";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { u as useHead } from "./index-C2merokO.js";
import "./nuxt-link-C4gLkNyK.js";
import "ufo";
import "hookable";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
const _sfc_main = {
  __name: "pricing",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: `%s - Pricing`,
      bodyAttrs: {
        class: "pricing"
      },
      link: [
        {
          rel: "stylesheet",
          href: "/assets/css/base.css"
        }
      ],
      script: [
        { src: "/assets/js/TweenMax.min.js" },
        { src: "/assets/js/charming.min.js" },
        { src: "/assets/js/smoother-script.js", defer: true }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonLoader = _sfc_main$1;
      const _component_CommonNavbar = _sfc_main$2;
      const _component_CommonMenu = _sfc_main$3;
      const _component_CommonFooter1 = _sfc_main$4;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_CommonLoader, null, null, _parent));
      _push(`<div id="smooth-wrapper">`);
      _push(ssrRenderComponent(_component_CommonNavbar, null, null, _parent));
      _push(ssrRenderComponent(_component_CommonMenu, null, null, _parent));
      _push(`<div id="smooth-content"><main class="main-bg"><div class="main-box main-bg ontop"></div></main>`);
      _push(ssrRenderComponent(_component_CommonFooter1, null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pricing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=pricing-ClZ1wFvC.js.map
