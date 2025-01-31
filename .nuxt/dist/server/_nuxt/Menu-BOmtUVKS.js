import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as __nuxt_component_0 } from "./nuxt-link-C4gLkNyK.js";
import { publicAssetsURL } from "#internal/nuxt/paths";
const _sfc_main$2 = {
  __name: "Loader",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "loader-wrap" }, _attrs))}><svg viewBox="0 0 1000 1000" preserveAspectRatio="none"><path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path></svg><div class="loader-wrap-heading"><span><h2 class="load-text"><span>L</span><span>o</span><span>a</span><span>d</span><span>i</span><span>n</span><span>g</span></h2></span></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Common/Loader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/assets/imgs/logo-light.png");
const _sfc_main$1 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  props: ["borderBottom"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "navi",
        class: ["topnav blur", { "bord-thin-bottom": __props.borderBottom }]
      }, _attrs))}><div class="container"><div class="${ssrRenderClass(`logo icon-img-${__props.borderBottom ? "100" : "90"}`)}">`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="menu-icon cursor-pointer"><span class="text"><span class="word">Menu</span></span><span class="icon"><i></i><i></i></span></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Common/Navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Menu",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hamenu valign" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-8"><div class="menu-links"><ul class="main-menu rest"><li><div class="o-hidden">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "link dmenu"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="nm"${_scopeId}>01.</span>Home `);
          } else {
            return [
              createVNode("span", { class: "nm" }, "01."),
              createTextVNode("Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li><li><div class="o-hidden"><a href="/about" class="link animsition-link"><span class="nm">02.</span>About</a></div></li><li><div class="o-hidden">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/carousel-slider",
        class: "link dmenu"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="nm"${_scopeId}>03.</span>Portfolio `);
          } else {
            return [
              createVNode("span", { class: "nm" }, "03."),
              createTextVNode("Portfolio ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="sub-menu"><div class="row"><div class="col-md-6"><ul class="rest"><li><div class="o-hidden"><a href="/carousel-slider" class="sub-link animsition-link">Carousel Slider</a></div></li></ul></div><div class="col-md-6"><ul class="rest"><li><div class="o-hidden"><a href="/portfolio-fixed-text" class="sub-link animsition-link">Creative Portfolio</a></div></li></ul></div></div></div></li><li><div class="o-hidden"><a href="/blog" class="link animsition-link"><span class="nm">04.</span>Stories</a></div></li><li><div class="o-hidden"><a href="/contact" class="link animsition-link"><span class="nm">05.</span>Contact</a></div></li></ul></div></div><div class="col-lg-4 valign"><div class="cont-info"><div class="item mb-50"><h6 class="text-u fw-600 mb-20">Location</h6><p class="fw-400 fz-18">Old Road Monrovia, Liberia</p></div><div class="item mb-50"><h6 class="text-u fw-600 mb-20">How to Connect</h6><a href="tel:+231 881 791 949">+231 881 791 949</a><br><a href="mailto:hello@spaceedigital.com">hello@spaceedigital.com</a></div><div class="bottom"><h6 class="text-u fw-600 mb-20">Follow Us</h6><ul class="rest social-text d-flex fz-13"><li class="mr-20"><a target="_blank" href="https://www.facebook.com/space.digitals" class="hover-this"><span class="hover-ani">Facebook</span></a></li><li class="mr-20"><a target="_blank" href="https://www.x.com/spaceedigital" class="hover-this"><span class="hover-ani">Twitter</span></a></li><li class="mr-20"><a target="_blank" href="https://www.linkedin.com/company/spaceedigital" class="hover-this"><span class="hover-ani">LinkedIn</span></a></li><li><a target="_blank" href="https://www.instagram.com/spacee.digital" class="hover-this"><span class="hover-ani">Instagram</span></a></li></ul></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Common/Menu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main$2 as _,
  _sfc_main$1 as a,
  _sfc_main as b,
  _imports_0 as c
};
//# sourceMappingURL=Menu-BOmtUVKS.js.map
